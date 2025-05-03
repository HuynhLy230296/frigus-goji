import { clerkMiddleware } from '@clerk/nextjs/server';

// @ts-ignore
// eslint-disable-next-line consistent-return
export default clerkMiddleware(async (auth, req) => {
  const { userId, redirectToSignIn } = await auth();
  // Add custom logic to run if user is authenticated
  const currentPath = req.nextUrl.pathname;
  if (
    !userId &&
    !currentPath.includes('/sign-in') &&
    !currentPath.includes('/sign-up')
  ) {
    // Add custom logic to run before redirecting
    return redirectToSignIn();
  }
  // Add custom logic to run if user is not authenticated
  console.log('User is not authenticated');
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
