import React from "react";
import clsx from "clsx";
import { FloodSeverity } from "@/interfaces/application";

interface DamageBadgeProps {
  earthquakeMagnitude: number;
  floodState: FloodSeverity;
  showPercentage: boolean;
}

// type FloodState = "normal" | "moderate" | "severe";
type DamageState =
  | "minimal"
  | "low"
  | "moderate"
  | "high"
  | "severe"
  | "catastrophic";

function getPercentage(damageState: DamageState) {
  let damagePercentile = 0;
  if (damageState === "minimal") return "16+";
  if (damageState === "low") return "28+";
  if (damageState === "moderate") return "56+";
  if (damageState === "high") return "75+";
  if (damageState === "severe") return "86+";
  if (damageState === "catastrophic") return "90+";
  return "unpredectable";
}
function getDamageState(
  earthquakeMagnitude: number,
  floodState: FloodSeverity
): DamageState {
  if (earthquakeMagnitude < 0 || earthquakeMagnitude > 10) {
    throw new Error(
      "Invalid earthquake magnitude. It should be between 0 and 10."
    );
  }

  if (floodState === "Severe" || !floodState) {
    if (earthquakeMagnitude >= 7) return "catastrophic";
    if (earthquakeMagnitude >= 5) return "severe";
    return "high";
  }

  if (floodState === "Moderate" || !floodState) {
    if (earthquakeMagnitude >= 7) return "severe";
    if (earthquakeMagnitude >= 5) return "high";
    return "moderate";
  }

  // floodState === "normal"
  if (earthquakeMagnitude >= 7) return "high";
  if (earthquakeMagnitude >= 5) return "moderate";
  if (earthquakeMagnitude >= 3) return "low";

  return "minimal";
}

const DamageBadge: React.FC<DamageBadgeProps> = ({
  earthquakeMagnitude,
  floodState,
  showPercentage,
}) => {
  const damageState = getDamageState(earthquakeMagnitude, floodState);

  const badgeClasses = clsx(
    "inline-flex items-center px-2.5 capitalize pb-1 pt-0.5 rounded-full text-sm font-medium",
    {
      "bg-green-100 text-green-800": damageState === "minimal",
      "bg-blue-100 text-blue-800": damageState === "low",
      "bg-yellow-100 text-yellow-800": damageState === "moderate",
      "bg-orange-100 text-orange-800": damageState === "high",
      "bg-red-100 text-red-800": damageState === "severe",
      "bg-purple-100 text-purple-800": damageState === "catastrophic",
    }
  );

  return (
    <span className={badgeClasses}>
      {damageState}&nbsp;
      <span>
        {" "}
        {showPercentage && " - (" + getPercentage(damageState) + "%)"}
      </span>
    </span>
  );
};

export default DamageBadge;
