  // hooks/queries/useAllUsersWithApplications.ts
  import { useQuery } from "@tanstack/react-query";
  import { getAllUsersWithApplications } from "@/services/users";
  import User from "@/interfaces/user";
  import { QueryKeys } from "@/interfaces/types";

  export const useAllUsersWithApplications = () => {
    return useQuery<User[]>({
      queryKey: [QueryKeys.AllUsersWithApplications],
      queryFn: getAllUsersWithApplications,
    });
  };
