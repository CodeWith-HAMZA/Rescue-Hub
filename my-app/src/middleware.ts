import { authMiddleware } from "@clerk/nextjs";

// See https://clerk.com/docs/references/nextjs/auth-middleware
// for more information about configuring your Middleware
export default authMiddleware({
  // Allow signed out users to access the specified routes:
  // publicRoutes: ["/sign-in(.*)", "/sign-up(.*)"], // Public routes: Sign-in and Sign-up
  publicRoutes: [
    "/home",
    "/auth",
    "/applicants",
    "/about",
    "/contact",
    "/admin/verify",
    "/admin/applications",
    "/admin/users",
    "/admin/settings",
    "/api/test", // This line allows all API routes to be public
  ], // Public routes: Sign-in and Sign-up

  debug: true,
});
// Configure matcher to apply middleware only to non-API routes
export const config = {
  matcher: [
    "/((?!api/).*)", // This pattern excludes all routes that start with /api/ from the middleware
  ],
};
