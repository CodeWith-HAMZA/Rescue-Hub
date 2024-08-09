import clsx from "clsx";

export function MagnitudeBadge({ magnitude }: { magnitude: number }) {
  const getMagnitudeColor = (magnitude: number) => {
    if (magnitude >= 3 && magnitude < 5) {
      return "bg-yellow-500 text-white"; // Yellow for magnitude 3 to 5
    } else if (magnitude >= 5 && magnitude < 7) {
      return "bg-orange-500 text-white"; // Orange for magnitude 5 to 7
    } else if (magnitude >= 7 && magnitude <= 8) {
      return "bg-red-500 text-white"; // Red for magnitude 7 to 8
    } else {
      return "bg-gray-500 text-white"; // Default color for other magnitudes
    }
  };

  const badgeClasses = clsx(
    "inline-block px-2 py-1 rounded-full font-semibold text-xs",
    getMagnitudeColor(magnitude)
  );

  return <span className={badgeClasses}>Magnitude: {magnitude}</span>;
}
