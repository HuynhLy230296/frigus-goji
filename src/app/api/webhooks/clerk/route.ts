import type { WebhookEvent } from '@clerk/nextjs/server';
import { PrismaClient } from '@prisma/client';
import { headers } from 'next/headers';
import { Webhook } from 'svix';

const prisma = new PrismaClient();

const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET || '';

if (!WEBHOOK_SECRET) {
  throw new Error(
    'Please add CLERK_WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local',
  );
}

export async function POST(req: Request) {
  const headerPayload = await headers();
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const svix_id = headerPayload.get('svix-id');
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const svix_timestamp = headerPayload.get('svix-timestamp');
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const svix_signature = headerPayload.get('svix-signature');

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occurred -- no svix headers', {
      status: 400,
    });
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error occurred', {
      status: 400,
    });
  }

  const eventType = evt.type;
  console.log(`Received webhook event: ${eventType}`);

  try {
    if (eventType === 'user.created' || eventType === 'user.updated') {
      const { id, ...attributes } = evt.data;

      await prisma.user.upsert({
        where: { clerkUserId: id },
        update: {
          // Add attributes to update here.
          firstName: attributes.first_name ?? '',
          lastName: attributes.last_name ?? '',
          profileImageUrl: attributes.image_url,
          // Prisma handles 'updatedAt' automatically if @updatedAt is in your schema
        },
        create: {
          clerkUserId: id,
          firstName: attributes.first_name ?? '',
          lastName: attributes.last_name ?? '',
          profileImageUrl: attributes.image_url,
        },
      });
      console.log(`User ${id} processed successfully for event ${eventType}.`);
    } else if (eventType === 'user.deleted') {
      const { id } = evt.data;
      if (id) {
        // Check if the user exists before attempting to delete
        const userExists = await prisma.user.findUnique({
          where: { clerkUserId: id },
        });

        if (userExists) {
          await prisma.user.delete({
            where: { clerkUserId: id },
          });
          console.log(`User ${id} deleted successfully.`);
        } else {
          console.log(
            `User ${id} not found in database, no action taken for deletion.`,
          );
        }
      } else {
        console.warn('User deleted event received without an ID.');
      }
    }
    return new Response('Webhook processed successfully', { status: 200 });
  } catch (error) {
    console.error('Error processing webhook:', error);
    return new Response('Error processing webhook', { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
