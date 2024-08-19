import React from "react";
import AdminPasskeyInput from "../../components/AdminPasskeyInput";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BiRightArrow } from "react-icons/bi";

function AdminLogin() {
  // return !(typeof window !== "undefined") ? : null;
  return (
    <div className="flex justify-center items-center h-screen">
      <Button className="flex gap-2">
        <Link href={"/admin"}>Continue To Admin Panel </Link>
        <BiRightArrow />
      </Button>
    </div>
  );
}

export default AdminLogin;
