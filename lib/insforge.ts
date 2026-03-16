import { createClient } from "@insforge/sdk";

export const insforge = createClient({
  baseUrl:
    process.env.NEXT_PUBLIC_INSFORGE_BASE_URL ||
    "https://w9es6r3i.us-east.insforge.app/",
  anonKey: process.env.NEXT_PUBLIC_INSFORGE_ANON_KEY!,
});
