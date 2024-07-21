import CheckIsOnboarded from "@/components/CheckIsOnboarded";
import ApplicationForm from "@/components/forms/application";
import Applications from "@/components/tables/applications";
import React from "react";

export default function CreateApplicationPage() {
  return (
    <>
      <CheckIsOnboarded />

      <ApplicationForm />
      <Applications />
    </>
  );
}
