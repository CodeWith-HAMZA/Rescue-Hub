// hooks/mutations/useUpdateUserOnboardStatus.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserOnboardStatus } from "@/services/users";

import User from "@/interfaces/user";
import { QueryKeys } from "@/interfaces/types";

export const useSuspendUser = () => {
  const queryClient = useQueryClient();

  return useMutation<User, Error, string>({
    mutationFn: (userId: string) => updateUserOnboardStatus(userId),

    onSuccess: (_, userId) => {
      // Invalidate any queries related to this user to ensure fresh data
    //   queryClient.invalidateQueries({ queryKey: [QueryKeys.AllUsersWithApplications, userId] });
    },
  });
};
