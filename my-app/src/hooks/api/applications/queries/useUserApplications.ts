// hooks/queries/useUserApplications.ts
import { useQuery } from "@tanstack/react-query";

import Application from "@/interfaces/application";
import { getUserApplications } from "@/services/applicants";

export const useUserApplications = () => {
  return useQuery<Application[]>({
    queryKey: ["user-applications"],
    queryFn: getUserApplications,
  });
};
