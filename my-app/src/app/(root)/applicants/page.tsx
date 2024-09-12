"use client";
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
import { useAllApplications } from "@/hooks/api/applications/queries/useAllApplications";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import { MdCheckBox } from "react-icons/md";

export default function ApplicantsList({ params, searchParams }) {
  const r = useRouter();
  const [searchInput, setSearchInput] = useState<string>(
    searchParams?.searchQuery || ""
  ); // To control the input field

  const { data, isPending, isError } = useAllApplications(
    searchParams?.searchQuery
  );

  console.log(data);
  return (
    <>
      <Button
        onClick={() => r.push("/applicants/create")}
        className="flex ml-auto mr-4 mt-4 items-center gap-1"
      >
        <span> My Applications </span>
        <BiSolidRightArrow />
      </Button>
      <div className="grid grid-cols-1 gap-8 p-8">
         
        <div className="grid gap-8">
          <div className="grid gap-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">All Effectives</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  r.push("/applicants?searchQuery=" + searchInput);
                }}
              >
                <div className="flex items-center gap-2">
                  <Input
                    className="w-52"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    placeholder="Search"
                  ></Input>

 
                  {searchInput && (
                    <Link
                      onClick={() => {
                        setSearchInput("");
                      }}
                      href={"/applicants/"}
                      className="underline hover:opacity-70 text-xs"
                    >
                      Clear
                    </Link>
                  )}
                </div>
              </form>
            </div>
            <div className="grid  md:grid-cols-1 gap-6">
              {data && data.length !== 0 ? (
                data?.map((_) => <ApplicantCard {..._} key={_?.id} />)
              ) : (
                <>
                  <p className="text-center font-semibold text-lg">
                    No Results Found!
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
