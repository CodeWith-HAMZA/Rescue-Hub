// services/applicants.ts
import axiosInstance from "./index";
import { ApplicationStatus, Media } from "../interfaces/application";
import Application from "../interfaces/application";
import { ClientUploadedFileData } from "uploadthing/types";
import { uploadFiles } from "@/lib/utils";
import { PostApplication } from "@/hooks/api/applications/mutations/useCreateApplication";

// Create an application
export const createApplication = async (
  applicationData: PostApplication
): Promise<Application> => {
  // let uploadedFiles: ClientUploadedFileData<{
  //   uploadedBy: string;
  // }>[] = [];

  // uploading files using (upload-thing-service) as S3-Bucket
  // uploadedFiles = await uploadFiles("rescueApplicationMediaUploader", {
  //   files: <Array<File>>applicationData.mediaFiles,
  // });
  // console.log(uploadedFiles);
  // applicationData.mediaFiles = <Array<string>>uploadedFiles.map((_) => _.url);

  const response = await axiosInstance.post<Application>(
    "/applications",
    applicationData,
    { headers: { Authorization: localStorage.getItem("token") } }
  );
  return response.data;
};

// Get applications for the authenticated user
export const getApplications = async (
  searchQuery?: string
): Promise<Application[]> => {
  const params = searchQuery ? { search: searchQuery } : {};
  const response = await axiosInstance.get<Application[]>("/applications/all", {
    params,
  });
  return response.data;
};

export const getUserApplications = async (): Promise<Application[]> => {
  const response = await axiosInstance.get<Application[]>("/applications", {
    headers: { Authorization: localStorage.getItem("token") },
  });
  return response.data;
};
export const getAdminDashboardData = async () => {
  const response = await axiosInstance.get(`/applications/admin/dashboard`);
  return response.data;
};

// Update an application
export const updateApplication = async (
  id: number,
  applicationData: Partial<
    Omit<Application, "id" | "userId" | "createdAt" | "updatedAt">
  >
): Promise<Application> => {
  const response = await axiosInstance.put<Application>(
    `/applications/${id}`,
    applicationData
  );
  return response.data;
};

// Create media for an application
export const createMedia = async (
  applicationId: number,
  mediaData: Omit<Media, "id" | "applicationId" | "createdAt" | "updatedAt">
): Promise<Media> => {
  const response = await axiosInstance.post<Media>(
    `/applications/${applicationId}/media`,
    { ...mediaData, applicationId }
  );
  return response.data;
};

// Get media for an application
export const getMedia = async (applicationId: number): Promise<Media[]> => {
  const response = await axiosInstance.get<Media[]>(
    `/applications/${applicationId}/media`
  );
  return response.data;
};

export const getApplicationById = async (
  applicationId: string
): Promise<Application> => {
  const response = await axiosInstance.get<Application>(
    `/applications/${applicationId}`,
    { headers: { Authorization: localStorage.getItem("token") } }
  );
  return response.data;
};
export const updateApplicationStatusById = async (
  applicationId: string,
  status: ApplicationStatus
): Promise<Application> => {
  const response = await axiosInstance.put<Application>(
    `/applications/${applicationId}/?myStatus=${status}`,
    {},
    { headers: { Authorization: localStorage.getItem("token") } }
  );
  return response.data;
};

export const fetchApplications = async (
  searchQuery?: string
): Promise<Application[]> => {
  const params = searchQuery ? { search: searchQuery } : {};
  const response = await axiosInstance.get<Application[]>("/applications/all", {
    params,
  });
  return response.data;
};

export const uploadMultipleFiles = async (files: Array<File>) => {
  const formData = new FormData();

  files.forEach((file) => {
    formData.append("files", file); // Append each file to the form data
  });

  try {
    const response = await axiosInstance.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data", // Set the content type to handle multiple file uploads
      },
    });

    return response.data.fileUrls; // Returns an array of URLs of the uploaded files
  } catch (error) {
    console.error("Error uploading multiple files:", error); // Log any error that occurs
    throw error; // Rethrow the error to handle it in the calling function
  }
};
