"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import Image from "next/image";

export function CardsInfiniteMoving({
  heading,
  data,
}: {
  data: { quote: string; name: string; title: string; img: string }[];
  heading: string;
}) {
  return (
    <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <div className="font-bold mt-40 text-base md:text-7xl py-4">
        {heading}
      </div>
      <InfiniteMovingCards
        className=""
        items={data}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
