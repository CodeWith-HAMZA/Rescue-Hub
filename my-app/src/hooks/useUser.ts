import { createApplication } from "@/services/applicants";
import { useMutation, useQuery } from "@tanstack/react-query";

export default function useUser() {
  const getApp = useQuery({
    queryFn: () => {},
    queryKey: ["create-application"],
  });
  

  return {
    getApp,
  };
}
