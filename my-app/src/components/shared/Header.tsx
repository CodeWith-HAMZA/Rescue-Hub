import React from "react";
import { Navbar } from "./Navbar";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex shadow-sm justify-between items-center py-5 px-6">
      <h1 className="text-lg font-semibold cursor-pointer active:scale-95 hover:opacity-90 transition-all">
        <Link href={"/home"}>Rescue Hub</Link>
      </h1>
      <Navbar />
      <AuthProfile></AuthProfile>
    </div>
  );
}

function AuthProfile() {
  return (
    <div className="space-x-2">
      <Button>Signup</Button>
      <Button variant={"outline"}>Login</Button>
    </div>
  );
}
