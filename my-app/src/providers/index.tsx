"use client";

import axiosInstance from "@/services";
import { useUser } from "@clerk/nextjs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { ReactNode, useEffect } from "react";

const queryClient = new QueryClient();

function TanStackQueryProvider({ children }: { children: ReactNode }) {
  const user = useUser();
  useEffect(() => {
    // TODO: need to refactor to organize the code
    const token = localStorage.getItem("token");
    console.log(user.user?.emailAddresses[0].emailAddress, "ueueu");

    if (!token && user?.user) {
      
      axiosInstance
        .post("/auth/" + user.user?.emailAddresses[0].emailAddress)
        .then(({ data }) => {
          console.log(data);
          localStorage.setItem("token", data?.token ?? "...");
        });
    }
  }, [user?.user?.emailAddresses[0].emailAddress]);

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default TanStackQueryProvider;
