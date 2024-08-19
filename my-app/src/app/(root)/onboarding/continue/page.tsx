"use client";
import { PiSpinner } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import { getUserProfile, registerUser } from "@/services/users";
import { useSession, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { BiRightArrow } from "react-icons/bi";

export default function ContinueToProfilePage() {
  const r = useRouter();
  const { session } = useSession();
  const { user } = useUser();
  const [loading, setLoading] = useState(false);

  async function continueToOnboarding() {
    if (session?.user) {
      const { firstName, identifier, imageUrl, lastName } =
        session.publicUserData;

      const clerkId = session?.user.id;
      const emailAddress = identifier || "";
      const fullName = firstName ?? "" + lastName ?? "";
      const image = imageUrl;

      console.log(clerkId, emailAddress, fullName, image);

      setLoading(true);
      // @ts-ignore
      const res = await registerUser({
        email: emailAddress,
        username: fullName,
      });
      setLoading(false);

      console.log(emailAddress, fullName, res);

      if (res.user.onBoarded === "0") {
        const params = new URLSearchParams();
        params.append("c_id", clerkId);
        params.append("fullName", fullName);
        params.append("email", emailAddress);

        r.push(`/onboarding?${params.toString()}`);
      } else {
        r.push("/home");
      }
    }
  }

  return (
    <div className="flex justify-center items-center h-[90vh]">
      <Button
        disabled={loading}
        onClick={continueToOnboarding}
        className="flex gap-2"
      >
        <span>{loading ? "Please wait..." : "Continue Proceeding"}</span>
        {!loading && <BiRightArrow />}
        {loading && <PiSpinner className="animate-spin  b" size={23} />}
      </Button>
    </div>
  );
}
