import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';

import { useRouter } from 'next/navigation';

export function HeaderUserButton() {
  const router = useRouter();

  return (
    <>
      <SignedOut>
        <SignInButton>
          <button className="w-5 h-5 bg-zinc-100 absolute right-6" title="user" />
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <button
          className="w-5 h-5 bg-zinc-100 absolute right-6"
          title="user"
          onClick={() => router.push('/user')}
        />
      </SignedIn>
    </>
  );
}
