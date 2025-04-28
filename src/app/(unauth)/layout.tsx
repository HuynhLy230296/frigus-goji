'use client';

import { useAuth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

export default function CenteredLayout(
  props: Readonly<{ children: React.ReactNode }>,
) {
  const { userId } = useAuth();

  if (userId) {
    redirect('/dashboard');
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      {props.children}
    </div>
  );
}
