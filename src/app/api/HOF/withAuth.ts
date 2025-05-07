import { auth } from '@clerk/nextjs/server';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

type ApiHandler = (
  req: NextRequest,
  params: { params: Record<string, string | string[]> } & { userId: string },
) => Promise<NextResponse> | NextResponse;

export function withAuth(handler: ApiHandler) {
  return async (
    req: NextRequest,
    params: { params: Record<string, string | string[]> },
  ) => {
    const { userId } = await auth();

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }
    // Pass the userId to the handler if needed
    return handler(req, { ...params, userId });
  };
}
