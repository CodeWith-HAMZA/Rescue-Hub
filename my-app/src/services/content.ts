import Content, { ContentValues } from "@/interfaces/content";
import axiosInstance from ".";

export const updateOrCreateKeyValuePairs = async (
  keyValuePairs: Content[]
): Promise<void> => {
  await axiosInstance.post("/content/update-or-create", keyValuePairs);
};
export const getContents = async (): Promise<ContentValues> => {
  const response = await axiosInstance.get<ContentValues>("/content");
  return response.data;
};
