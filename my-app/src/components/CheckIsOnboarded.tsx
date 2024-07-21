"use client";

import React, { useEffect, useState } from "react";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { getUserProfile } from "@/services/users";
import { toast } from "sonner";
import { useSession } from "@clerk/nextjs";
export default function CheckIsOnboarded() {
  const [IsOnboarded, setIsOnboarded] = useState(false);
  const { session } = useSession();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getUserProfile()
        .then((_) => {
          console.log("u", _);
          setIsOnboarded(!!Number(_?.onBoarded));
        })
        .catch((_) => {
          toast.error("Something Went Wrong");
        });
    }
  }, []);
  if (!session) return null;
  const { firstName, identifier, imageUrl, lastName } = session.publicUserData;

  const clerkId = session?.user.id;
  const emailAddress = identifier || "";
  const fullName = firstName ?? "" + lastName ?? "";
  const image = imageUrl;

  const params = new URLSearchParams();
  params.append("c_id", clerkId);
  params.append("fullName", fullName);
  params.append("email", emailAddress);
  console.log(clerkId, emailAddress, fullName, image);

  return !IsOnboarded ? (
    <div className="m-3">
      <Alert variant="default">
        <AlertCircle className="h-4 w-4 " />
        <AlertTitle className="text-lg -mt-2">
          You Are Not On Boarded, Complete Your Profile
        </AlertTitle>
        <AlertDescription>
          You Are not supposed to do any Actions. Please Complete Your Profile
          &nbsp;
          <Link
            href={"/onboarding?" + params?.toString()}
            className="underline hover:opacity-50"
          >
            Onboard
          </Link>
        </AlertDescription>
      </Alert>
    </div>
  ) : null;
}
