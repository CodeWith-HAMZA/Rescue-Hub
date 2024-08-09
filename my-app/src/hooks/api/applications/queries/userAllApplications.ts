"use client";
// hooks/queries/useAllApplications.ts
import { useQuery } from "@tanstack/react-query";

import Application from "@/interfaces/application";
import { getApplications } from "@/services/applicants";

export const useAllApplications = () => {
  return useQuery<Application[]>({
    queryKey: ["all-applications"],
    queryFn: getApplications,
  });
};
