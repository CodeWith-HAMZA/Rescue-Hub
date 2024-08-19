// hooks/mutations/useUpdateApplicationStatus.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateApplicationStatusById } from "@/services/applicants";
import Application, { ApplicationStatus } from "@/interfaces/application";
import { QueryKeys } from "@/interfaces/types";

interface UpdateApplicationStatusVariables {
  applicationId: string;
  status: ApplicationStatus;
}

export const useUpdateApplicationStatus = () => {
  const queryClient = useQueryClient();

  return useMutation<Application, Error, UpdateApplicationStatusVariables>({
    mutationFn: ({ applicationId, status }) =>
      updateApplicationStatusById(applicationId, status),
    onSuccess: (updatedApplication) => {
      // Invalidate specific queries to ensure fresh data
      queryClient.invalidateQueries({
        queryKey: ["application", updatedApplication.id],
      });
      queryClient.invalidateQueries({ queryKey: [QueryKeys.AllApplications] });
      queryClient.invalidateQueries({ queryKey: [QueryKeys.UserApplications] });
    },
  });
};
