import CheckIsOnboarded from "@/components/CheckIsOnboarded";
import ApplicationForm from "@/components/forms/application";
import Applications from "@/components/tables/applications";
import { getUserApplications } from "@/services/applicants";
import React from "react";
import UserApplications from "./UserApplications";
import { currentUser } from "@clerk/nextjs";

export default async function CreateApplicationPage() {
  const user = await currentUser();
  return (
    <>
      <CheckIsOnboarded user={JSON.parse(JSON.stringify(user))} />

      <ApplicationForm />
      <UserApplications />
    </>
  );
}
