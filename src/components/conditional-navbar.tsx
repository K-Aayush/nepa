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

  // Determine active section from pathname
  const section = (() => {
    if (pathname === "/" || pathname === "") return "";
    const match = pathname.split("/")[1];
    switch (match) {
      case "collaboration":
      case "services":
      case "products":
      case "teams":
      case "blogs":
      case "gallery":
      case "contact":
        return match;
      default:
        return "";
    }
  })();
  return <Navbar activeSection={section} />;
}
