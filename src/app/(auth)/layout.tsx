import { viVN } from '@clerk/localizations';
import { ClerkProvider } from '@clerk/nextjs';

export default function AuthLayout(
  props: Readonly<{ children: React.ReactNode }>,
) {
  const clerkLocale = viVN;
  const signInUrl = '/sign-in';
  const signUpUrl = '/sign-up';

  return (
    <ClerkProvider
      localization={clerkLocale}
      signInUrl={signInUrl}
      signUpUrl={signUpUrl}
    >
      {props.children}
    </ClerkProvider>
  );
}
