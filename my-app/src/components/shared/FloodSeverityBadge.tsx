import { FloodSeverity } from "@/interfaces/application";
import clsx from "clsx";

export function FloodSeverityBadge({ severity }: { severity?: FloodSeverity }) {
  if(!severity) return 'N/A'
  const FloodSeverityBadgeClasses = clsx(
    " px-2 py-0.5 pb-1 rounded-full text-sm font-semibold",
    {
      "bg-green-500 text-white": severity === "Minor",
      "bg-yellow-500 text-white": severity === "Moderate",
      "bg-red-500 text-white": severity === "Severe",
    }
  );

  return <span className={FloodSeverityBadgeClasses}>{severity}</span>;
}
