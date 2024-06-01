import { authMiddleware } from "@clerk/nextjs";

// See https://clerk.com/docs/references/nextjs/auth-middleware
// for more information about configuring your Middleware
export default authMiddleware({
  // Allow signed out users to access the specified routes:
  // publicRoutes: ["/sign-in(.*)", "/sign-up(.*)"], // Public routes: Sign-in and Sign-up
  publicRoutes: ["/home", '/auth', '/applicants', '/about', '/contact'], // Public routes: Sign-in and Sign-up

  debug: true,
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
