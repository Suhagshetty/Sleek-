"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { DarkModeToggle } from "./Darkmode";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
  useAuth,
} from "@insforge/nextjs";

const AuthButtons = () => {
  const auth = useAuth();
  const isLoading = !auth?.signIn === undefined;

  if (isLoading) {
    return (
      <div className="h-8 w-8 rounded-full border-2 border-muted border-t-foreground animate-spin" />
    );
  }

  return (
    <>
      <SignedOut>
        <SignInButton>
          <button className="text-sm font-medium px-4 py-1.5 rounded-md border border-input hover:bg-accent transition-colors">
            Sign In
          </button>
        </SignInButton>
        <SignUpButton>
          <button className="text-sm font-medium px-4 py-1.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
            Sign Up
          </button>
        </SignUpButton>
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  );
};

const Header = () => {
  const pathName = usePathname();
  const isProjectPage = pathName.startsWith("/project/");

  return (
    <header className="w-full">
      <div
        className={cn(
          "w-full flex py-3.5 px-0 items-center justify-between",
          isProjectPage && "absolute top-0 z-50 px-2 py-1 right-0 w-auto",
        )}
      >
        <div>{!isProjectPage && <Logo />}</div>
        <div className="flex items-center justify-end gap-3">
          <DarkModeToggle />
          <AuthButtons />
        </div>
      </div>
    </header>
  );
};

export default Header;
