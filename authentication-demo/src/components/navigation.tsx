import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";

export const Navigation = () => {
  return (
    <nav className="bg-background border-b border-(--foreground)/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="shrink-0">
            <h1 className="text-xl font-semibold text-foreground">
              Next.js App
            </h1>
          </div>
          <div className="flex items-center gap-4">
            {/* Sign in button goes here */}
            <SignedOut>
              <SignInButton mode="modal" />
            </SignedOut>
            <SignedIn>
              <SignOutButton />
              <Link href={"/user-profile"}>Profile</Link>
            </SignedIn>
            {/* <UserButton /> */}
          </div>
        </div>
      </div>
    </nav>
  );
};
