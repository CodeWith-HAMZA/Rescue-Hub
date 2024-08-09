"use client";

import Application from "@/interfaces/application";
import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "../ui/badge";
import clsx from "clsx";
import { formatDate } from "@/lib/utils";
export const payments: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
  // ...
];

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const applicationColumns: ColumnDef<Application>[] = [
  {
    accessorKey: "floodSeverity",
    header: "Flood Severity",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const { status } = row.original;
      return (
        <>
          <Badge
            className={clsx({
              "bg-yellow-700/40 pb-1 text-yellow-700": status === "processing",
              "bg-blue-700/40 pb-1 text-blue-700": status === "pending",
              "bg-green-700/40 pb-1 text-green-700": status === "eligible",
              "bg-red-700/40 pb-1 text-red-700": status === "not_eligible",
            })}
          >
            {status}
          </Badge>
        </>
      );
    },
  },
  {
    accessorKey: "city",
    header: "City",
  },
  {
    accessorKey: "country",
    header: "Country",
  },
  {
    accessorKey: "contactName",
    header: "Contact Name",
  },
  {
    accessorKey: "magnitude",
    header: "Magnitude",
  },
  {
    accessorKey: "earthquakeLocation",
    header: "Location",
  },
  {
    accessorKey: "earthquakeDate",
    header: "Date",
    cell: ({ row }) =>
      row.original.earthquakeDate
        ? formatDate(row.original.earthquakeDate, "MM/DD/YYYY")
        : "",
  },
];
