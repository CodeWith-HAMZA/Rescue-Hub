 
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateOrCreateKeyValuePairs } from "@/services/content";
import Content from "@/interfaces/content";

export const useUpsertContent = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, Content[]>({
    mutationFn: (keyValuePairs: Content[]) =>
      updateOrCreateKeyValuePairs(keyValuePairs),

    onSuccess: () => {
      // Invalidate any relevant queries to ensure fresh data is fetched
    },
  });
};
