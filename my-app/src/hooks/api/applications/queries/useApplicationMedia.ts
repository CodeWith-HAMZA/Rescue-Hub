// hooks/queries/useApplicationMedia.ts
import { useQuery } from "@tanstack/react-query";
import { getMedia } from "@/services/applicants";
import { Media } from "@/interfaces/application";
import { QueryKeys } from "@/interfaces/types";

export const useApplicationMedia = (applicationId: number) => {
  return useQuery<Media[]>({
    queryKey: [QueryKeys.ApplicationMedia, applicationId],
    queryFn: () => getMedia(applicationId),
  });
};
