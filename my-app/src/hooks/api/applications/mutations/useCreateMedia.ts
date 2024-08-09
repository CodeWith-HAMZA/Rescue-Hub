// hooks/mutations/useCreateMedia.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createMedia } from "@/services/applicants";
import { Media } from "@/interfaces/application";

export const useCreateMedia = (applicationId: number) => {
  const queryClient = useQueryClient();

  return useMutation<
    Media,
    Error,
    Omit<Media, "id" | "applicationId" | "createdAt" | "updatedAt">
  >({
    mutationFn: (mediaData) => createMedia(applicationId, mediaData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["application-media", applicationId],
      });
    },
  });
};
