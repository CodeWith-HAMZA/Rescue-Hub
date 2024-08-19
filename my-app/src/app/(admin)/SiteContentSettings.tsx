"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import React from "react";

function SiteContentSettings({ searchParams }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Settings</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-2 text-gray-500 pl-4">
          <Link
            className="hover:text-black"
            href={"/admin/settings?content=true"}
          >
            Content Settings
          </Link>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default SiteContentSettings;
