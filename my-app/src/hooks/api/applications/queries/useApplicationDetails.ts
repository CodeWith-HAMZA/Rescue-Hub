// hooks/queries/useApplicationById.ts
import { useQuery } from "@tanstack/react-query";
import { getApplicationById } from "@/services/applicants";
import Application from "@/interfaces/application"; // Assuming you have this interface defined

export const useApplicationById = (applicationId: string) => {
  return useQuery<Application>({
    queryKey: ["application", applicationId],
    queryFn: () => getApplicationById(applicationId),
    enabled: !!applicationId, // Ensures the query only runs if applicationId is provided
  });
};
