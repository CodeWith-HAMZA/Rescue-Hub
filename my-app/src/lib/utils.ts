import { type ClassValue, clsx } from "clsx";
import { generateReactHelpers as reactHelpers } from "@uploadthing/react/hooks";
import type { OurFileRouter as Router } from "@//app/api/uploadthing/core";
import {
  generateUploadButton,
  generateUploadDropzone,
} from "@uploadthing/react";

import { twMerge } from "tailwind-merge";
import { ApplicationStatus } from "@/interfaces/application";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// utils/decorators.ts
export function catchAsync(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = async function (...args: any[]) {
    try {
      return await originalMethod.apply(this, args);
    } catch (error) {
      console.error(`Error in ${propertyKey}:`, error);
      throw error;
    }
  };
}

// utils/decorators.ts
export function truncateString(str: string, maxLength: number) {
  if (str.length > maxLength) {
    return str.slice(0, maxLength) + "...";
  } else {
    return str;
  }
}
export function formatDate(date: Date, format: string) {
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  const dateObj = new Date(date);

  if (isNaN(dateObj.getTime())) {
    throw new Error("Invalid date");
  }

  return format.replace(/YYYY|MM|DD|HH|mm|ss/g, (match: any) => {
    switch (match) {
      case "YYYY":
        return dateObj.getFullYear();
      case "MM":
        return String(dateObj.getMonth() + 1).padStart(2, "0");
      case "DD":
        return String(dateObj.getDate()).padStart(2, "0");
      case "HH":
        return String(dateObj.getHours()).padStart(2, "0");
      case "mm":
        return String(dateObj.getMinutes()).padStart(2, "0");
      case "ss":
        return String(dateObj.getSeconds()).padStart(2, "0");
      default:
        return match;
    }
  });
}

// import type { OurFileRouter } from "@/app/api/uploadthing/core";

// export const UploadButton = generateUploadButton<OurFileRouter>();
// export const UploadDropzone = generateUploadDropzone<OurFileRouter>();

// export const { UploadButton, UploadDropzone, Uploader } =
//   generateComponents<OurFileRouter>();

export const { useUploadThing, uploadFiles } = reactHelpers<Router>();

export const filterStatuses = (givenStatus: ApplicationStatus, statusList: ApplicationStatus[]): ApplicationStatus[] => {
  const statusOrder: ApplicationStatus[] = ["pending", "processing", "eligible", "not_eligible"];
  const givenStatusIndex = statusOrder.indexOf(givenStatus);

  // Filter out any status that comes before or is the given status itself
  return statusList.filter((status) => statusOrder.indexOf(status) > givenStatusIndex);
};
