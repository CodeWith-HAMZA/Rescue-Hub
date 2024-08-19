import { contentKeys } from "@/utils/constants";

type ContentKey = (typeof contentKeys)[number]["key"];

export default interface Content {
  id?: string;
  key: ContentKey;
  value: string;
  page?: string;
  description?: string; // Optional field
}

export type ContentValues = {
  [key in ContentKey]: string;
};
