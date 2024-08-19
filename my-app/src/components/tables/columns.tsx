"use client";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Application, { ApplicationStatus } from "@/interfaces/application";
import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "../ui/badge";
import clsx from "clsx";
import { filterStatuses, formatDate, truncateString } from "@/lib/utils";
import User from "@/interfaces/user";
import { useState } from "react";
import { useSuspendUser } from "@/hooks/api/users/mutations/useSuspendUser";
import { FloodSeverityBadge } from "../shared/FloodSeverityBadge";
import { applicationStatusList } from "@/utils/constants";
import { useUpdateApplicationStatus } from "@/hooks/api/applications/mutations/useUpdateApplicationStatus";
import Link from "next/link";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const applicationColumns: ColumnDef<Application>[] = [
  {
    accessorKey: "floodSeverity",
    header: "Severity",
    cell: ({ row }) => (
      <FloodSeverityBadge severity={row.original.floodSeverity} />
    ),
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
    header: "Contact",
  },
  {
    accessorKey: "contactEmail",
    header: "Contact Email",
  },
  {
    accessorKey: "magnitude",
    header: "Magnitude",
    cell: ({ row }) => row.original.magnitude || "N/A",
  },
  {
    accessorKey: "earthquakeLocation",
    header: "Location",
    cell: ({ row }) =>
      truncateString(row.original.earthquakeLocation || "N/A", 16),
  },
  {
    accessorKey: "earthquakeDate",
    header: "Date Of Disasters",
    cell: ({ row }) =>
      row.original.earthquakeDate
        ? formatDate(row.original.earthquakeDate, "MM/DD/YYYY")
        : "N/A",
  },

  {
    id: "actions",
    header: "",
    cell: ({ row }) => {
      const { id, status: currentApplicationStatus } = row.original;
      const { mutate } = useUpdateApplicationStatus();

      const remainingItems = filterStatuses(
        currentApplicationStatus,
        applicationStatusList
      );
      // if (remainingItems.length === 0) return "N/A";
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Take Action For Application</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem >
              <Link href={`/applicants/${id}`}>
                View Application
              </Link>
              </DropdownMenuItem>

            {remainingItems.map((status: ApplicationStatus) => {
              return (
                <DropdownMenuItem
                  onClick={() => {
                    mutate({ applicationId: id.toString(), status });
                    // window.location.reload();
                  }}
                >
                  {status}
                </DropdownMenuItem>
              );
            })}
            {/* <DropdownMenuItem></DropdownMenuItem> */}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
// Define the columns for the Users table
export const usersColumn: ColumnDef<User>[] = [
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "fullName",
    header: "Full Name",
    cell: ({ row }) => row.original.fullName || "N/A",
  },
  {
    accessorKey: "phoneNumber",
    header: "Phone Number",
    cell: ({ row }) => row.original.phoneNumber || "N/A",
  },
  {
    accessorKey: "address",
    header: "Address",
    cell: ({ row }) => truncateString(row.original.address || "N/A", 10),
  },

  {
    accessorKey: "isOnboarded",
    header: "Onboarding Status",
    cell: ({ row }) => {
      const [Status, setStatus] = useState(
        Number(row.original.onBoarded) === -1
          ? "Suspended"
          : Number(row.original.onBoarded) === 0
          ? "N/A"
          : "Yes"
      );

      return (
        <Badge
          variant={"secondary"}
          className={clsx({
            "bg-red-700/40 text-red-700":
              Number(row.original.isOnboarded) === -1,
            "bg-green-700/40 text-green-700":
              Number(row.original.isOnboarded) === 1,
            "bg-yellow-700/40 text-yellow-700":
              Number(row.original.isOnboarded) === 0,
          })}
        >
          {Status}
        </Badge>
      );
    },
  },
  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => {
      const { id, onBoarded } = row.original;
      const { mutate } = useSuspendUser();

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Take Action To User</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                mutate(id.toString());
                window.location.reload();
              }}
              className="focus:text-red-500  cursor-pointer"
            >
              {!(onBoarded === "-1") ? "Suspend" : "Unsuspend"}
            </DropdownMenuItem>
            {/* <DropdownMenuItem></DropdownMenuItem> */}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
