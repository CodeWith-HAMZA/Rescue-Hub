// hooks/mutations/useUpdateApplication.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateApplication } from "@/services/applicants";
import Application from "@/interfaces/application";

export const useUpdateApplication = () => {
  const queryClient = useQueryClient();

  return useMutation<
    Application,
    Error,
    {
      id: number;
      applicationData: Partial<
        Omit<Application, "id" | "userId" | "createdAt" | "updatedAt">
      >;
    }
  >({
    mutationFn: ({ id, applicationData }) =>
      updateApplication(id, applicationData),
      
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user-applications"] });
      queryClient.invalidateQueries({ queryKey: ["all-applications"] });
    },
  });
};
