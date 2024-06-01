import { StarIcon } from "lucide-react";

function StarRating({ rating }: { rating: number }) {
  const maxStars = 5;

  return (
    <div className="flex gap-0.5">
      {Array.from({ length: maxStars }, (v, i) => (
        <StarIcon
          key={i}
          className={`w-5 h-5 ${i < rating ? "fill-black" : "fill-muted"} ${
            i >= rating ? "stroke-muted-foreground" : ""
          }`}
        />
      ))}
    </div>
  );
}

export default StarRating;
