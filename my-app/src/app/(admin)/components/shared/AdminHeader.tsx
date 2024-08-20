"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { PawPrintIcon, SearchIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdminHeader() {
  // track input
  const [input, setInput] = useState("");
  const r = useRouter();

  if (!window) {
    return null;
  }
  return (
    <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
      <Link href="#" className="lg:hidden" prefetch={false}>
        <PawPrintIcon className="h-6 w-6" />
        <span className="sr-only">Home</span>
      </Link>
      <div className="flex-1">
        <h1 className="font-semibold text-lg">Rescue Dashboard</h1>
      </div>
      <div className="flex flex-1 items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // handle search logic here
            console.log(input);
            //   window.location.href = `http://localhost:3000/applicants?searchQuery=shaddu`;
            r.replace("/applicants/?searchQuery=" + input);
          }}
          className="ml-auto flex-1 sm:flex-initial"
        >
          <div className="relative">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input
              type="search"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Search applications..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px] bg-white"
            />
          </div>
        </form>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="default"
              size="icon"
              className="bg-gray-400/70 hover:bg-gray-400 rounded-lg transition-all hover:rounded-full"
            >
              A
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => {
                localStorage.removeItem("admin");
                if (window) {
                  window.location.href = "/";
                }
              }}
            >
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
