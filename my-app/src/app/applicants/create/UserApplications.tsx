"use client";
import Applications from "@/components/tables/applications";
import { applicationColumns } from "@/components/tables/columns";
import { DataTable } from "@/components/tables/data-table";
import { useUserApplications } from "@/hooks/api/applications/queries/useUserApplications";
import Application from "@/interfaces/application";
import { getUserApplications } from "@/services/applicants";
import { useQuery } from "@tanstack/react-query";
import React from "react";

function UserApplications() {
  const { data, isLoading, isFetched } = useUserApplications();
  console.log(data);
  // return <Applications applications={data} />;
  return (
    <DataTable
      data={data || []}
      props={{ title: "Your Applications" }}
      columns={applicationColumns}
    />
  );
}

export default UserApplications;
