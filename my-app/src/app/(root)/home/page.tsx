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
  const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
      img: "/202208asia_pakistan_family_floods.jpg",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
      img: "/pakistan-flooding-how-to-help-005.jpg__1600x900_q85_crop_subsampling-2.jpg",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
      img: "/dd.jpeg",
    },
    {
      img: "/imgg.jpeg",
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    
  ];

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
              Explore Effectives
            </button>
            <button className="bg-neutral-200 hover:opacity-80 transition-all dark:bg-white rounded-full w-fit text-black hover:underline dark:text-black px-4 py-2">
              <Link href={"/admin/verify"}>Enter As Admin</Link>
            </button>
          </div>
        </motion.div>
      </AuroraBackground>

      {/* <Gallery /> */}
      <CardsInfiniteMoving
        data={testimonials}
        heading={data?.home_section2_main_heading ?? ""}
      />
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
