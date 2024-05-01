import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs";

export function TopNav() {
  return (
    <nav className="flex w-full p-4 text-x1 font-semibold border-b items-center justify-between">
      <div>Gallery</div>
      <div>
        <SignedOut>
            <SignInButton/>
        </SignedOut>
        <SignInButton>
            <UserButton/>
        </SignInButton>
        </div>
    </nav>
  );
}