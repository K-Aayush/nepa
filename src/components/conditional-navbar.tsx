"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/navbar";

export function ConditionalNavbar() {
  const pathname = usePathname();

  // Hide navbar on blog detail pages (pattern: /blogs/[id])
  const isBlogDetailPage =
    pathname.startsWith("/blogs/") && pathname !== "/blogs";

  if (isBlogDetailPage) {
    return null;
  }

  return <Navbar activeSection={""} />;
}
