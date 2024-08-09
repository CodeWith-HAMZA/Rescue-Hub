import "@uploadthing/react/styles.css";
import type { Metadata } from "next";

import "./../globals.css";
import { Inter as FontSans } from "next/font/google";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
import { ClerkProvider, SignUpButton } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";
import Header from "@/components/shared/Header";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import TanStackQueryProvider from "@/providers";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // auth().protect();

  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <Toaster />
          <TanStackQueryProvider>
            {/* <SignedIn></SignedIn> */}
            <Header>
              {/* <AuthProfile /> */}
              <SignedOut>
                {/* <SignInButton afterSignUpUrl="/onboarding/continue" afterSignInUrl="/" mode="redirect" /> */}
                <SignUpButton
                  className="bg-black rounded-md text-white hover:opacity-80 transition-all px-3 py-1.5"
                  afterSignUpUrl="/onboarding/continue"
                  afterSignInUrl="/"
                  mode="redirect"
                />
              </SignedOut>
              <SignedIn>
                <UserButton
                  appearance={{ variables: { colorText: "black" } }}
                />
              </SignedIn>
            </Header>
            <main>{children}</main>
          </TanStackQueryProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
