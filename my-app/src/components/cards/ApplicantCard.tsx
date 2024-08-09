import React from "react";
import { Button } from "../ui/button";
import {
  CalendarIcon,
  ClipboardListIcon,
  DatabaseIcon,
  PencilIcon,
  StarIcon,
} from "lucide-react";
import StarRating from "../shared/StarRatings";
import Application from "@/interfaces/application";
import clsx from "clsx";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { FloodSeverityBadge } from "../shared/FloodSeverityBadge";
import { MagnitudeBadge } from "../shared/MagnitudeBadge";

export default function ApplicantCard({ ...application }: Application) {
  return (
    <div className="bg-white dark:bg-gray-950 rounded-lg shadow-sm overflow-hidden">
      <div className="p-6 space-y-4">
        <div className="flex items-start gap-4">
          <div className="size-16 rounded-xl bg-gray-200 flex items-center justify-center">
            <span className="text-2xl capitalize">
              {application.contactName.at(0)}
            </span>
          </div>
          {/* <img
            alt="App Logo"
            className="rounded-lg"
            height={48}
            src="/placeholder.svg"


            style={{
              aspectRatio: "48/48",
              objectFit: "cover",
            }}
            width={48}
          /> */}
          <div>
            <div className="font-semibold flex gap-2 text-lg">
              <p>{application.contactName}</p>
              <p hidden={!application.floodSeverity}>
                ({application.floodSeverity})
              </p>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {application.city}, {application.country}
            </p>
          </div>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {application.description}
        </p>
        <div className="flex items-center gap-2">
          <StarRating rating={4} />
          <span className="text-sm text-gray-500 dark:text-gray-400">
            4.7 (12,345 reviews)
          </span>
        </div>
        <div className=" grid  sm:grid-cols-2  gap-2">
          {application.floodSeverity && (
            <div className="flex items-center gap-2">
              <ClipboardListIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              <span className="flex gap-2 text-sm text-gray-500 dark:text-gray-400">
                <span>Flood Severity: </span>
                <FloodSeverityBadge severity={application?.floodSeverity} />
              </span>
            </div>
          )}
          {application?.magnitude && (
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              <div className="flex gap-2 items-center text-sm text-gray-500 dark:text-gray-400">
                <span>Earth Quake: </span>
                <MagnitudeBadge magnitude={application.magnitude} />
              </div>
            </div>
          )}
          {application?.created_at && (
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              <div className="flex gap-2 items-center text-sm text-gray-500 dark:text-gray-400">
                <span>Applied Date: </span>
                <span>{formatDate(application?.created_at, "MM/DD/YYYY")}</span>
              </div>
            </div>
          )}
          <div className="flex items-center gap-2">
            <PencilIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Notes
            </span>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 flex justify-between items-center">
        <div className="font-semibold text-lg">Free</div>
        <Link href={"/applicants/" + application.id}>View Details</Link>
      </div>
    </div>
  );
}
