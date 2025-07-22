import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NepaTronix - Leading STEAM, IoT and Robotics company in Nepal",
  description: "Explore innovative IoT and robotics solutions by NepaTronix.",
  keywords: "IoT, Robotics, Automation, STEAM, NepaTronix, Technology, Innovation",
  authors: [{ name: "NepaTronix Team", url: "https://www.nepatronix.org" }],
  robots: "index, follow",
  openGraph: {
    title: "NepaTronix - IoT and Robotics Solutions",
    description: "Explore innovative IoT and robotics solutions by NepaTronix.",
    url: "https://www.nepatronix.org",
    siteName: "NepaTronix",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NepaTronix Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>{String(metadata.title)}</title>
        <meta name="description" content={metadata.description ?? undefined} />
        <meta name="keywords" content={Array.isArray(metadata.keywords) ? metadata.keywords.join(", ") : metadata.keywords ?? undefined} />
        <meta
          name="author"
          content={
            Array.isArray(metadata.authors) && metadata.authors.length > 0
              ? metadata.authors[0].name
              : undefined
          }
        />
        <meta
          name="robots"
          content={
            typeof metadata.robots === "string"
              ? metadata.robots
              : undefined
          }
        />
        <meta property="og:title" content={metadata.openGraph?.title ? String(metadata.openGraph.title) : undefined} />
        <meta
          property="og:description"
          content={metadata.openGraph?.description}
        />
        <meta property="og:url" content={metadata.openGraph?.url ? String(metadata.openGraph.url) : undefined} />
        <meta property="og:site_name" content={metadata.openGraph?.siteName} />
        <meta
          property="og:image"
          content={
            Array.isArray(metadata.openGraph?.images)
              ? typeof metadata.openGraph.images[0] === "string"
                ? metadata.openGraph.images[0]
                : (metadata.openGraph.images[0] as { url?: string })?.url
              : typeof metadata.openGraph?.images === "string"
                ? metadata.openGraph?.images
                : (metadata.openGraph?.images as { url?: string })?.url
          }
        />
        <meta property="og:locale" content={metadata.openGraph?.locale} />
        {/* <meta property="og:type" content={metadata.openGraph?.type} /> */}
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar activeSection={""} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
