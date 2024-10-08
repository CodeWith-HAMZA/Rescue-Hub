// hooks/queries/useApplicationById.ts
import { useQuery } from "@tanstack/react-query";
import { getApplicationById } from "@/services/applicants";
import Application from "@/interfaces/application"; // Assuming you have this interface defined
import { QueryKeys } from "@/interfaces/types";

export const useApplicationById = (applicationId: string) => {
  return useQuery<Application>({
    queryKey: [QueryKeys.Application, applicationId],
    queryFn: () => getApplicationById(applicationId),
    enabled: !!applicationId, // Ensures the query only runs if applicationId is provided
  });
};
