"use client";
import RenderApplications from "@/components/shared/RenderApplications";

import { useUserApplications } from "@/hooks/api/applications/queries/useUserApplications";
import { useAllApplications } from "@/hooks/api/applications/queries/useAllApplications";
import Application from "@/interfaces/application";
import { getUserApplications } from "@/services/applicants";
import { useQuery } from "@tanstack/react-query";
import React from "react";

function AllApplications() {
  const { data, isLoading, isFetched } = useAllApplications();
  console.log(data);
  // return <Applications applications={data} />;
  return <RenderApplications  data={data || []} />;
}

export default AllApplications;
