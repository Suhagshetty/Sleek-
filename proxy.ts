import { InsforgeMiddleware } from '@insforge/nextjs/middleware';

if (!process.env.NEXT_PUBLIC_INSFORGE_BASE_URL) {
  throw new Error("NEXT_PUBLIC_INSFORGE_BASE_URL is not set");
}

export default InsforgeMiddleware({
  baseUrl: process.env.NEXT_PUBLIC_INSFORGE_BASE_URL,
  publicRoutes: ['/'],
});

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};