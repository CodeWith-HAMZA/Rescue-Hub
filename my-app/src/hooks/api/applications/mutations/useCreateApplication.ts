// hooks/mutations/useCreateApplication.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createApplication, uploadMultipleFiles } from "@/services/applicants";
import Application, { Media } from "@/interfaces/application";
import { uploadFiles } from "@/lib/utils";
import { ClientUploadedFileData } from "uploadthing/types";
import { toast } from "sonner";
import { QueryKeys } from "@/interfaces/types";
import { useUser } from "@clerk/nextjs";

export type PostApplication = Omit<
  Application,
  "id" | "userId" | "createdAt" | "updatedAt"
> & {
  mediaFiles?: Array<File | string | Media>;
};

export const useCreateApplication = () => {
  const queryClient = useQueryClient();
  const { user } = useUser();

  return useMutation<Application, Error, PostApplication>({
    mutationFn: async (application) => {
      // let uploadedFiles: ClientUploadedFileData<{
      //   uploadedBy: string;
      // }>[] = [];
      let uploadedFiles: Array<File> = [];

      if (application.mediaFiles && application.mediaFiles?.length > 0) {
        try {
          // uploadedFiles = await uploadFiles("rescueApplicationMediaUploader", {
          //   files: <Array<File>>application.mediaFiles,
          // });
          uploadedFiles = await uploadMultipleFiles(
            <Array<File>>application.mediaFiles
          );
        } catch (error) {
          toast.error("Error uploading files");
          console.log(error);
        }
      }
      const emailOrCNIC = application.contactEmail;
      application.contactEmail = user?.emailAddresses[0].emailAddress
        ? `Primary Email: ${user?.emailAddresses[0].emailAddress}, Email/CNIC: ${emailOrCNIC}`
        : emailOrCNIC;

      return await createApplication({
        ...application,
        mediaFiles: uploadedFiles,
      });
    },

    onMutate: async (variables) => {},
    // runs after the mutation
    onSettled: async (data, error, variables, context) => {},

    onSuccess: async (application) => {
      // queryClient.invalidateQueries({ queryKey: [QueryKeys.UserApplications] });
      // queryClient.invalidateQueries({ queryKey: ["all-applications"] });
    },
    onError: (error) => {
      console.error("Error creating application:", error);
      // toast.error(JSON.stringify(error));
    },
  });
};
