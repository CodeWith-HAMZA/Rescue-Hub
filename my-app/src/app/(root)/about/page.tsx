"use client";
import Link from "next/link";
import React from "react";
import Slider from "./Slider";
import { Data } from "@react-google-maps/api";
import { useGetContents } from "@/hooks/api/content/queries/useGetContents";

export default function page() {
  const { data } = useGetContents();

  return (
    <>
      <main className="flex flex-col">
        <section className="w-full h-[80vh] relative">
          <img
            alt="Rescue Operation"
            className="w-full h-full object-cover"
            height="1080"
            src="https://media.istockphoto.com/id/1180471106/photo/save-us-out-from-the-darkness.jpg?s=612x612&w=0&k=20&c=v4ZOtzXmF6YnYdN3xhHATru9Y0yCQzWyARy_GyNDNQw="
            style={{
              aspectRatio: "1920/1080",
              objectFit: "cover",
            }}
            width="1920"
          />
          <div className="absolute inset-0 bg-gray-900/50 flex items-center justify-center">
            <div className="text-center text-white max-w-3xl px-4">
              <h1 className="text-5xl font-bold mb-4">
                {data?.aboutus_section1_main_heading}
              </h1>
              <p className="text-xl mb-8">{data?.aboutus_section1_paragraph}</p>
              <Link
                className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-gray-200 text-black font-medium hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                href="/applicants"
              >
                Explore More
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-24">
              <h3 className="my-3 text-3xl font-semibold">
                {data?.aboutus_section2_main_heading}
              </h3>
              <Slider />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  {data?.aboutus_section2_card1_heading}
                </h2>
                <p className="text-gray-500 dark:text-gray-400 mb-8">
                  {data?.aboutus_section2_card1_paragraph}
                </p>
                <Link
                  className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-gray-900 text-white font-medium hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                  href="/"
                >
                  Our History
                </Link>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  {data?.aboutus_section2_card2_heading}
                </h2>
                <p className="text-gray-500 dark:text-gray-400 mb-8">
                  {data?.aboutus_section2_card2_paragraph}
                </p>
                <Link
                  className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-gray-900 text-white font-medium hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                  href="/"
                >
                  Our Approach
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {data?.aboutus_section3_main_heading}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md overflow-hidden">
                <img
                  alt="Team Member"
                  className="w-full h-48 object-cover"
                  src="/placeholder.svg"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">
                    {data?.aboutus_section3_first_card_team_name}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    {data?.aboutus_section3_first_card_team_secondary_heading}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    {data?.aboutus_section3_first_card_team_paragraph}
                  </p>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md overflow-hidden">
                <img
                  alt="Team Member"
                  className="w-full h-48 object-cover"
                  src="/placeholder.svg"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">
                    {data?.aboutus_section3_second_card_team_name}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    {data?.aboutus_section3_second_card_team_secondary_heading}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    {data?.aboutus_section3_second_card_team_paragraph}
                  </p>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md overflow-hidden">
                <img
                  alt="Team Member"
                  className="w-full h-48 object-cover"
                  src="/placeholder.svg"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">
                    {data?.aboutus_section3_third_card_team_name}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    {data?.aboutus_section3_third_card_team_secondary_heading}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    {data?.aboutus_section3_third_card_team_paragraph}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
