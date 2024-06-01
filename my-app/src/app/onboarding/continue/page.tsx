"use client";
import { Button } from "@/components/ui/button";
import { useSession } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React from "react";

export default function ContinueToProfilePage() {
  const r = useRouter();
  const { session } = useSession();

  function continueToOnboarding() {
    if (session?.user) {
      const { firstName, identifier, imageUrl, lastName } =
        session.publicUserData;

      const clerkId = session?.user.id;
      const emailAddress = identifier || "";
      const fullName = firstName ?? "" + lastName ?? "";
      const image = imageUrl;

      console.log(clerkId, emailAddress, fullName, image);
    }
  }

  return (
    <div className="flex justify-center items-center h-[90vh]">
      <Button onClick={continueToOnboarding}>
        {" "}
        Continue To Profile Completion{" "}
      </Button>
    </div>
  );
}
