import { UserButton, SignOutButton } from '@clerk/nextjs';

export default function UserPage() {
  return (
    <>
      <p>user page</p>
      <UserButton></UserButton>
      <SignOutButton>
        <button>log out</button>
      </SignOutButton>
    </>
  );
}
