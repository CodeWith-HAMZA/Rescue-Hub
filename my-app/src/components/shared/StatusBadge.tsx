import React from "react";
import clsx from "clsx";
import { ApplicationStatus } from "@/interfaces/application";

interface StatusBadgeProps {
  status: ApplicationStatus;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const statusClasses = clsx(
    "px-3 py-1 rounded-full text-sm font-semibold capitalize",
    {
      "bg-yellow-100 text-yellow-800": status === "pending",
      "bg-blue-100 text-blue-800": status === "processing",
      "bg-green-100 text-green-800": status === "eligible",
      "bg-red-100 text-red-800": status === "not_eligible",
    }
  );

  return <span className={statusClasses}>{status.replace("_", " ")}</span>;
};

export default StatusBadge;
