"use client";

import { LoadingProvider } from "@/context/LoadingContext";
import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return <LoadingProvider>{children}</LoadingProvider>;
}
