import CheckIsOnboarded from "@/components/CheckIsOnboarded";
import ApplicationForm from "@/components/forms/application";
import Applications from "@/components/tables/applications";
import { getUserApplications } from "@/services/applicants";
import React from "react";
import UserApplications from "./UserApplications";

export default async function CreateApplicationPage() {
  return (
    <>
      <CheckIsOnboarded />

      <ApplicationForm />
      <UserApplications />
    </>
  );
}
