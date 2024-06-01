import ApplicantCard from "@/components/cards/ApplicantCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  BotIcon,
  CalendarIcon,
  ClipboardListIcon,
  CodeIcon,
  DatabaseIcon,
  DownloadIcon,
  LayersIcon,
  MergeIcon,
  PencilIcon,
  StarIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { MdCheckBox } from "react-icons/md";

export default function ApplicantsList() {
  return (
    <>
      <div className="grid grid-cols-[240px_1fr] gap-8 p-8">
        <div className="flex flex-col gap-6">
          <div className="grid gap-4">
            <h2 className="text-2xl font-bold">Filters</h2>
            <Accordion collapsible type="single">
              <AccordionItem value="category">
                <AccordionTrigger className="text-base font-medium">
                  Category
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid gap-2">
                    <Label className="flex items-center gap-2 font-normal">
                      <MdCheckBox id="category-productivity" />
                      Productivity{"\n                                "}
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <MdCheckBox id="category-games" />
                      Games{"\n                                "}
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <MdCheckBox id="category-education" />
                      Education{"\n                                "}
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <MdCheckBox id="category-lifestyle" />
                      Lifestyle{"\n                                "}
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <MdCheckBox id="category-utilities" />
                      Utilities{"\n                                "}
                    </Label>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="rating">
                <AccordionTrigger className="text-base font-medium">
                  Rating
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid gap-2">
                    <Label className="flex items-center gap-2 font-normal">
                      <MdCheckBox id="rating-4-5" />
                      4.5 & up{"\n                                "}
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <MdCheckBox id="rating-4-0" />
                      4.0 & up{"\n                                "}
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <MdCheckBox id="rating-3-5" />
                      3.5 & up{"\n                                "}
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <MdCheckBox id="rating-3-0" />
                      3.0 & up{"\n                                "}
                    </Label>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="price">
                <AccordionTrigger className="text-base font-medium">
                  Price
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label className="text-sm" htmlFor="price-min">
                        Min Price
                      </Label>
                      <Input id="price-min" placeholder="0" type="number" />
                    </div>
                    <div className="grid gap-2">
                      <Label className="text-sm" htmlFor="price-max">
                        Max Price
                      </Label>
                      <Input id="price-max" placeholder="100" type="number" />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div className="grid gap-8">
          <div className="grid gap-6">
            <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {[0, 0, 0, 0, 0].map((_) => {
                return (
                  <>
                    <ApplicantCard />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
