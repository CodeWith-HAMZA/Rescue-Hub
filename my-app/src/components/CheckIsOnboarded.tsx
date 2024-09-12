"use client";
import React, { useEffect, useState } from "react";
import { AlertCircle } from "lucide-react";

import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { User } from "@clerk/nextjs/server";
import { encryptData } from "@/utils/helpers/crypto";
import { useGetCurrentUser } from "@/hooks/api/users/queries/useGetCurrentProfile";

export default function CheckIsOnboarded({ user }: { user: User }) {
  const currentUser = useGetCurrentUser();

  let encryptedUser = new URLSearchParams({ _u_: encryptData(user) });

  // const { firstName, identifier, imageUrl, lastName } = session.publicUserData;

  // const clerkId = session?.user.id;
  // const emailAddress = identifier || "";
  // const fullName = firstName ?? "" + lastName ?? "";
  // const image = imageUrl;

  // const params = new URLSearchParams();
  // params.append("c_id", clerkId);
  // params.append("fullName", fullName);
  // params.append("email", emailAddress);
  // console.log(clerkId, emailAddress, fullName, image);
  // if (!localStorage.getItem("token")) {
  //   return null;
  // }
  if (
    currentUser.isPending ||
    currentUser.error ||
    currentUser.data?.onBoarded === "1"
  ) {
    return null;
  }
  if (currentUser.data?.onBoarded === "0")
    return (
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
              href={`/onboarding/continue/?${encryptedUser}`}
              className="underline hover:opacity-50"
            >
              Onboard
            </Link>
          </AlertDescription>
        </Alert>
      </div>
    );

  if (currentUser.data?.onBoarded === "-1")
    return (
      <div className="m-3">
        <Alert variant="default">
          <AlertCircle className="h-4 w-4 " />
          <AlertTitle className="text-lg -mt-2">
            You Are Suspended By The Admin
          </AlertTitle>
          <AlertDescription>
            You Are not supposed to do any Actions. You Broke Our Violations And
            Breach our terms and conditions &nbsp;
          </AlertDescription>
        </Alert>
      </div>
    );
  return null;
}
