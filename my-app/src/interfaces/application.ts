// Application.ts
export type FloodSeverity = "Minor" | "Moderate" | "Severe";

interface Application {
  id: number;
  userId: number;
  description: string;
  status: "pending" | "processing" | "eligible" | "not_eligible";
  city: string;
  country: string;
  contactName: string;
  contactPhone: string;
  contactEmail: string;
  magnitude?: number | null;
  earthquakeLocation?: string | null;
  earthquakeDate?: Date | null;
  floodSeverity?: FloodSeverity;
  floodLocation?: string | null;
  floodDate?: Date | null;
  created_at: Date;
  updated_at: Date;
}

export default Application;

export interface Media {
  id: number;
  applicationId: number;
  filename: string;
  url: string;
  createdAt?: Date;
  updatedAt?: Date;
}
