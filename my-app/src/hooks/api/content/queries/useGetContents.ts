// hooks/queries/useAllApplications.ts
import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "@/interfaces/types";
import { getContents } from "@/services/content";
import Content, { ContentValues } from "@/interfaces/content";

export const useGetContents = () => {
  return useQuery<ContentValues>({
    queryKey: [QueryKeys.GetAllContents],
    queryFn: () => getContents(),
  });
};
