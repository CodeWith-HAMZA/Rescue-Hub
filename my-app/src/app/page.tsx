import { Button } from "@/components/ui/button";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  auth,
} from "@clerk/nextjs";

export default function Home() {
  // const { userId }: { userId: string | null } = auth();
  // console.log(userId);

  return (
    <div className="h-screen">
        <UserButton />
        <SignInButton>
          <Button className="">Sign in with Clerk</Button>
        </SignInButton>
    </div>
  );
}
