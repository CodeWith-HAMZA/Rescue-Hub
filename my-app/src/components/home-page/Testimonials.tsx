"use client";
import { CardStack } from "../ui/card-stack";
import { cn } from "@/utils/cn";
export function Testimonials() {
  return (
    <div className="h-[40rem] flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    img: "/rescue2.jpeg",
    id: 0,
    name: "Rescue Operations",
    designation: "Emergency Response Team",
    content: (
      <p>
        Our highly trained team is ready to{" "}
        <Highlight>mobilize immediately</Highlight> when disaster strikes,
        ensuring timely and effective rescue operations. We are committed to{" "}
        <Highlight>saving lives</Highlight> and providing emergency relief to
        those in need.
      </p>
    ),
  },
  {
    img: "/rescue22.jpeg",
    id: 1,
    name: "Medical Aid",
    designation: "Healthcare Support",
    content: (
      <p>
        In times of natural disasters, medical support is critical. Our platform
        offers <Highlight>medical assistance</Highlight> and first aid supplies
        to <Highlight>treat injuries</Highlight> and save lives, providing care
        even in the most challenging circumstances.
      </p>
    ),
  },
  {
    id: 2,
    img: "/rescue.jpg",
    name: "Shelter and Supplies",
    designation: "Relief Resources Team",
    content: (
      <p>
        We provide essential relief, including <Highlight>shelter</Highlight>{" "}
        and supplies like food and water, to ensure that those affected by
        disasters are safe. Our priority is to give everyone a{" "}
        <Highlight>safe place to stay</Highlight> until they can return home.
      </p>
    ),
  },
];
