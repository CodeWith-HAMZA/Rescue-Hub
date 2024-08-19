"use client";
import Header from "@/components/shared/Header";
import { AuroraBackground } from "@/components/ui/aurora-background";
import React from "react";
import { motion } from "framer-motion";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { Testimonials } from "@/components/home-page/Testimonials";
import { ContainerScroll } from "@/components/ui/container-scroll-animations";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { CardsInfiniteMoving } from "@/components/home-page/InfiniteMovingCards";
import { Gallery } from "@/components/home-page/Gallery";
import Footer from "@/components/shared/Footer";
import Link from "next/link";
import { useGetContents } from "@/hooks/api/content/queries/useGetContents";
export default function page() {
  const { data } = useGetContents();

 
  return (
    <div>
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
            {data?.home_section1_main_heading}
          </div>
          <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
            {data?.home_section1_secondary_heading}
          </div>
          <div className="flex gap-2">
            <button className="bg-black hover:opacity-80 transition-all dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
              Explore Applicants
            </button>
            <button className="bg-neutral-200 hover:opacity-80 transition-all dark:bg-white rounded-full w-fit text-black hover:underline dark:text-black px-4 py-2">
              <Link href={"/admin/verify"}>Enter As Admin</Link>
            </button>
          </div>
        </motion.div>
      </AuroraBackground>
      {/* <Gallery /> */}
      <CardsInfiniteMoving heading={data?.home_section2_main_heading ?? ''} />
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl flex-1 font-semibold text-black dark:text-white">
              {data?.home_section3_secondary_heading}
              <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                {data?.home_section3_main_heading}
              </span>
            </h1>
          </>
        }
      >
        <Testimonials />
      </ContainerScroll>
      <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
          <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
            {data?.home_section4_main_heading}
          </p>
        </div>
      </BackgroundGradientAnimation>
      <Footer />
    </div>
  );
}
