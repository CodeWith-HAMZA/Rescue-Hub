// hooks/mutations/useCreateApplication.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createApplication } from "@/services/applicants";
import Application from "@/interfaces/application";
import { uploadFiles } from "@/lib/utils";
import { ClientUploadedFileData } from "uploadthing/types";

export type PostApplication = Omit<
  Application,
  "id" | "userId" | "createdAt" | "updatedAt"
> & {
  readonly mediaFiles?: File[];
};

export const useCreateApplication = () => {
  const queryClient = useQueryClient();

  return useMutation<Application, Error, PostApplication>({
    mutationFn: (application) => createApplication(application),
    onMutate(variables) {},
    // runs after the mutation
    onSettled: async (data, error, variables, context) => {
      let uploadedFiles: ClientUploadedFileData<{
        uploadedBy: string;
      }>[] = [];

      if (variables.mediaFiles && variables.mediaFiles.length > 0) {
        // uploading files using (upload-thing-service) as S3-Bucket
        uploadedFiles = await uploadFiles("rescueApplicationMediaUploader", {
          files: variables.mediaFiles,
        });
      }

      return { uploadedFiles };
    },

    onSuccess: async (application) => {
      queryClient.invalidateQueries({ queryKey: ["user-applications"] });
      queryClient.invalidateQueries({ queryKey: ["all-applications"] });
    },
  });
};
