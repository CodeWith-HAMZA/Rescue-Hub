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

export default function ApplicantCard() {
  return (
    <div className="bg-white dark:bg-gray-950 rounded-lg shadow-sm overflow-hidden">
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-4">
          <img
            alt="App Logo"
            className="rounded-lg"
            height={48}
            src="/placeholder.svg"
            style={{
              aspectRatio: "48/48",
              objectFit: "cover",
            }}
            width={48}
          />
          <div>
            <h3 className="font-semibold text-lg">Notion</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              All-in-one workspace
            </p>
          </div>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Notion is a collaborative workspace that combines documents,
          spreadsheets, and databases into one. It's a powerful tool for teams
          to stay organized and productive.
        </p>
        <div className="flex items-center gap-2">
          <StarRating rating={4} />
          <span className="text-sm text-gray-500 dark:text-gray-400">
            4.7 (12,345 reviews)
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center gap-2">
            <ClipboardListIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Task Management
            </span>
          </div>
          <div className="flex items-center gap-2">
            <CalendarIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Calendar
            </span>
          </div>
          <div className="flex items-center gap-2">
            <DatabaseIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Database
            </span>
          </div>
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
        <Button size="sm">View Details</Button>
      </div>
    </div>
  );
}
