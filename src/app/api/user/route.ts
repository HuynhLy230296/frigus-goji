import { PrismaClient } from '@prisma/client'; // Ensure you have a Prisma client instance
import { NextResponse } from 'next/server';

import { withAuth } from '@/app/api/HOF/withAuth';

const prisma = new PrismaClient();

export const GET = withAuth(async (_req, { userId }) => {
  // Example: Fetch user information from the database

  const user = await prisma.user.findUnique({
    where: { clerkUserId: userId },
  });

  return NextResponse.json(user);
});
