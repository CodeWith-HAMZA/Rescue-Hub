"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { ReactNode, useEffect } from "react";

const queryClient = new QueryClient();

function TanStackQueryProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      queryClient.setQueryData(["token"], token);
    }
     
  }, [])
  
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default TanStackQueryProvider;
