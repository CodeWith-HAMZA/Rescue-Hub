"use client";
import React from "react";
import Map from "./Map";

export default function WorldMap() {
  return (
    <div className="container my-8">
      <h1 className="text-3xl font-bold ml-4">World View</h1>
      <p className="text-xs text-gray-400 ml-4">Let The World Is In Front Views</p>

      <div className="flex justify-center rounded-2xl border-none outline-none w-full h-screen ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.7580691187777!2d68.36416472558406!3d25.37942352759408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c70f6dbfb33f5%3A0x62393ec1bb783f44!2srailway%20colony%20Railway%20Colony%2C%20Hyderabad%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1721480049720!5m2!1sen!2s"
         
          // style="border:0;"
          className="rounded-2xl border-none outline-none m-4 w-full min-h-[30rem]" 
          // allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
