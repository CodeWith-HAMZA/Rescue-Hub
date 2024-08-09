// hooks/queries/useApplicationMedia.ts
import { useQuery } from "@tanstack/react-query";
import { getMedia } from "@/services/applicants";
import { Media } from "@/interfaces/application";

export const useApplicationMedia = (applicationId: number) => {
  return useQuery<Media[]>({
    queryKey: ["application-media", applicationId],
    queryFn: () => getMedia(applicationId),
  });
};
