import React from "react";
import { Button } from "../ui/button";
import {
  CalendarIcon,
  ClipboardListIcon,
  DatabaseIcon,
  EarthIcon,
  PencilIcon,
  StarIcon,
} from "lucide-react";
import StarRating from "../shared/StarRatings";
import Application from "@/interfaces/application";
import clsx from "clsx";
import { extractEmails, formatDate } from "@/lib/utils";
import Link from "next/link";
import { FloodSeverityBadge } from "../shared/FloodSeverityBadge";
import { MagnitudeBadge } from "../shared/MagnitudeBadge";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { BiSolidRightArrow } from "react-icons/bi";

export default function ApplicantCard({ ...application }: Application) {
  return (
    <CardContainer className="cursor-pointer border w-full border-gray-200 rounded-lg hover:shadow-2xl transition-all">
      <CardBody className="w-full">
        <div className="bg-white dark:bg-gray-950 rounded-lg shadow-sm overflow-hidden">
          <div className="p-6 space-y-4">
            <div className="flex items-start gap-4">
              <CardItem translateZ="50">
                <div className="size-16 rounded-xl bg-gray-200 flex items-center justify-center">
                  <span className="text-2xl capitalize">
                    {extractEmails(application.contactEmail).at(0)}
                  </span>
                </div>
              </CardItem>

              <div>
                <CardItem translateZ="50">
                  <div className="font-semibold flex gap-2 text-lg">
                    <p>{extractEmails(application.contactEmail)}</p>
                    <p hidden={!application.floodSeverity}>
                      ({application.floodSeverity})
                    </p>
                  </div>
                </CardItem>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {application.city}, {application.country}
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {application.description}
            </p>
            {/* <div className="flex items-center gap-2">
          <StarRating rating={4} />
          <span className="text-sm text-gray-500 dark:text-gray-400">
            4.7 (12,345 reviews)
          </span>
        </div> */}
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
                    <span>
                      {formatDate(application?.created_at, "MM/DD/YYYY")}
                    </span>
                  </div>
                </div>
              )}
              {application?.earthquakeLocation && application.country && (
                <div className="flex items-center gap-2">
                  <EarthIcon
                    size={28}
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  />
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {application?.earthquakeLocation +
                        ", " +
                        application.country}
                    </span>
                  </CardItem>
                </div>
              )}
            </div>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-4 flex justify-between items-center">
            <div className="font-semibold text-lg">
              Natural Disaster Application By {application.contactName}{" "}
              (Affected)
            </div>
            <Link
              className="text-sm flex items-center gap-1 hover:text-gray-500 hover:translate-x-2  transition-all hover:underline"
              href={"/applicants/" + application.id}
            >
              <span>View Details</span>
              <BiSolidRightArrow />
            </Link>
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
}
