import Link from "next/link";
import React from "react";
import Slider from "./Slider";

export default function page() {
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
                Helping People in Crisis
              </h1>
              <p className="text-xl mb-8">
                Our mission is to provide swift and effective rescue operations
                in the wake of natural disasters, offering hope and support to
                those in need.
              </p>
              <Link
                className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-gray-200 text-black font-medium hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                href="#"
              >
                Explore More
              </Link>
            </div>
          </div>
        </section>

        
        <section className="py-20 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
        <div className="mb-24">
          <h3 className="my-3 text-3xl font-semibold">Our Moments</h3>
          <Slider/>
        </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  About Our Organization
                </h2>
                <p className="text-gray-500 dark:text-gray-400 mb-8">
                  Founded in 2010, our rescue organization has been at the
                  forefront of providing aid and support to communities affected
                  by natural disasters. With a team of highly trained
                  professionals and a fleet of specialized equipment, we are
                  dedicated to saving lives and restoring hope.
                </p>
                <Link
                  className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-gray-900 text-white font-medium hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                  href="#"
                >
                  Our History
                </Link>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
                <p className="text-gray-500 dark:text-gray-400 mb-8">
                  At the heart of our organization is a commitment to
                  prepagrayness and rapid response. We maintain a
                  state-of-the-art command center that allows us to coordinate
                  and deploy our teams quickly, ensuring we can reach those in
                  need as soon as possible. Our approach is rooted in the latest
                  rescue techniques and technologies, enabling us to provide the
                  most effective and efficient aid.
                </p>
                <Link
                  className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-gray-900 text-white font-medium hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                  href="#"
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
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md overflow-hidden">
                <img
                  alt="Team Member"
                  className="w-full h-48 object-cover"
                  src="/placeholder.svg"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">John Doe</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    Rescue Team Leader
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    John has over 15 years of experience in emergency response
                    and has led numerous successful rescue operations.
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
                  <h3 className="text-xl font-bold mb-2">Jane Smith</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    Medical Coordinator
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Jane is a registegray nurse with extensive experience in
                    disaster relief and emergency medical care.
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
                  <h3 className="text-xl font-bold mb-2">Michael Johnson</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    Logistics Coordinator
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Michael is responsible for ensuring our rescue operations
                    run smoothly, from equipment management to transportation
                    logistics.
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
