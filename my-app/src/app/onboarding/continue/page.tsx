"use client";
import { PiSpinner } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import { getUserProfile, registerUser } from "@/services/users";
import { useSession } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

export default function ContinueToProfilePage() {
  const r = useRouter();
  const { session } = useSession();
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
      const res = await registerUser({
        email: emailAddress,
        username: fullName,
      });
      localStorage.setItem("token", res?.token);

      console.log(emailAddress, fullName, res);

      const params = new URLSearchParams();
      params.append("c_id", clerkId);
      params.append("fullName", fullName);
      params.append("email", emailAddress);

      setLoading(false);
      r.push(`/onboarding?${params.toString()}`);
    }
  }

  return (
    <div className="flex justify-center items-center h-[90vh]">
      <Button
        disabled={loading}
        onClick={continueToOnboarding}
        className="flex gap-2"
      >
        <span>
          {loading ? "Please wait..." : "Continue To Profile Completion"}
        </span>
        {loading && <PiSpinner className="animate-spin  b" size={23} />}
      </Button>
    </div>
  );
}
