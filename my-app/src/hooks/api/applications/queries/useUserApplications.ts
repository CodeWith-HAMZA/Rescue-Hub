// hooks/queries/useUserApplications.ts
import { useQuery } from "@tanstack/react-query";

import Application from "@/interfaces/application";
import { getUserApplications } from "@/services/applicants";
import { QueryKeys } from "@/interfaces/types";

export const useUserApplications = () => {
  return useQuery<Application[]>({
    queryKey: [QueryKeys.UserApplications],
    queryFn: getUserApplications,
  });
};
