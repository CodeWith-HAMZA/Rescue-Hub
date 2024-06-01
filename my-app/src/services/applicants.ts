// services/applicants.ts
import axiosInstance from './index';
import {  Media } from '../interfaces/application';
import Application from '../interfaces/application';

// Create an application
export const createApplication = async (applicationData: Omit<Application, 'id' | 'userId' | 'createdAt' | 'updatedAt'>): Promise<Application> => {
  const response = await axiosInstance.post<Application>('/applications', applicationData);
  return response.data;
};

// Get applications for the authenticated user
export const getApplications = async (): Promise<Application[]> => {
  const response = await axiosInstance.get<Application[]>('/applications');
  return response.data;
};

// Update an application
export const updateApplication = async (id: number, applicationData: Partial<Omit<Application, 'id' | 'userId' | 'createdAt' | 'updatedAt'>>): Promise<Application> => {
  const response = await axiosInstance.put<Application>(`/applications/${id}`, applicationData);
  return response.data;
};

// Create media for an application
export const createMedia = async (applicationId: number, mediaData: Omit<Media, 'id' | 'applicationId' | 'createdAt' | 'updatedAt'>): Promise<Media> => {
  const response = await axiosInstance.post<Media>(`/applications/${applicationId}/media`, { ...mediaData, applicationId });
  return response.data;
};

// Get media for an application
export const getMedia = async (applicationId: number): Promise<Media[]> => {
  const response = await axiosInstance.get<Media[]>(`/applications/${applicationId}/media`);
  return response.data;
};

// Example usage
// const newApplication = await createApplication({
//   description: 'Application description',
//   status: 'pending',
//   city: 'New York',
//   country: 'USA',
//   contactName: 'John Doe',
//   contactPhone: '123-456-7890',
//   contactEmail: 'john@example.com'
// });
