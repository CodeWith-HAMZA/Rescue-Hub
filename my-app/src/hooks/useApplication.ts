import { createApplication } from "@/services/applicants";
import { useMutation } from "@tanstack/react-query";

export default function useApplication() {
  const createApplicationMutation = useMutation({
    mutationFn: createApplication,
    mutationKey: ["create-application"],
  });
  

  return {
    createApplicationMutation,
  };
}
