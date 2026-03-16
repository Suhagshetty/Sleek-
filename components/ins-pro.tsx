// app/providers.tsx
"use client";
import {
  InsforgeBrowserProvider,
  type InitialAuthState,
} from "@insforge/nextjs";
import { insforge } from "@/lib/insforge";

export function InsforgeProvider({ children }: { children: React.ReactNode }) {
  return (
    <InsforgeBrowserProvider client={insforge} afterSignInUrl="/">
      {children}
    </InsforgeBrowserProvider>
  );
}
