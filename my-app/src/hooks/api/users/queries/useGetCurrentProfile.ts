// hooks/queries/useAllUsersWithApplications.ts
import { useQuery } from "@tanstack/react-query";
import { getAllUsersWithApplications, getUserProfile } from "@/services/users";
import User from "@/interfaces/user";
import { QueryKeys } from "@/interfaces/types";

export const useGetCurrentUser = () => {
  return useQuery<User>({
    queryKey: [QueryKeys.GetCurrentUserProfile],
    queryFn: getUserProfile,
  });
};
