import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { RobotGuideWrapper } from "@/components/RobotGuideWrapper";
import { ConditionalNavbar } from "@/components/conditional-navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "NepaTronix | Leading IoT, Robotics & STEAM Education Company in Nepal | IoT Solutions, Robotics Training & Automation Services",
  description:
    "NepaTronix is Nepal's premier IoT and robotics company offering cutting-edge STEAM education, IoT solutions, robotics training, automation services, and innovative technology projects. Discover IoT courses, robotics workshops, industrial automation, and comprehensive STEAM education programs designed for students, professionals, and businesses in Nepal and beyond.",
  keywords:
    "IoT, Robotics, Automation, STEAM, NepaTronix, Technology, Innovation, iot and robotics company in nepal, iot and robotics course, iot and robotics projects, iot and robotics engineering, iot and robotics meaning, iot and robotics jobs, iot and robotics in nepal, iot and robotics ppt, iot and robotics workshop, iot and robotics syllabus, iot and robotics company, iot and robotics internship, iot and robotics salary, iot and robotics kit, iot and robotics difference, iot robotics and automation, iot robotic arm, iot ai robotics, it robotics automation, autonomy iot and robotics professional master's programs, robotics and iot and basic electronics, iot vs robotics, role of ai in iot, difference between iot and robotics, iot rules, what is ai and iot, robotics and iot projects, robotics and automation center, robotics and internet of things, iot based robotics projects, iot based robotics, robotics and iot book, the connection between iot and robotics, it and robotics club, it and robotics courses, industrial robotics and iot coding skill set, iot terms and definitions, internet of things robotic and drone technology, internet of things robotic and drone technology pdf, iot and its features, internet of things and robotics engineering, iot robotics and embedded systems, iot robotics full form, iot for robotics, robotics and iot, internet of things iot robotics and hacking with nodemcu, role of iot in home automation, iot robots in agriculture, iot in robotics, is iot and robotics same, internet of things iot and robotics, robotics and iot training institute, internship report on iot and robotics, it robotics jobs, ai and iot courses, robotics and iot lab, iot in nepali, iot or robotics which is better, iot or robotics, iot robotics projects for students, iot robotic surgery, robotics and iot training, iot robot vacuum cleaner, iot robot vacuum, iot with robotics, iot companies in nigeria, robotics in nepal, iot incorporation, robotics association of nepal, robotics shop in nepal, iot in nepal, steam education in nepal, steam education full form, steam education pdf, steam education examples, steam education kathmandu university, steam educational games, steam education in pakistan, steam education logo, steam education in sri lanka, steam education hong kong, steam education images, steam education in india, steam education center, steam education pronunciation, steam educational games for kids, steam education australia, steam education acronym, steam education association of singapore, steam education activities, steam education approach, steam education adalah, steam education a modern way to learn, steam education art, steam education abbreviation, steam ahead education, stem education australia, steam school ann arbor, steam school acronym, stem education articles, stem education act of 2015, steam education book, steam education benefits, steam education background, steam education brunei, steam education book pdf, steam education banner, steam education box, steam education build and play, steam based education, steam boiler education, steam school boy runaway, stem education benefits, stem education books, stem education background, steam school burleson, steam education curriculum, steam education certificate, steam education canada, steam education conference 2025, steam education center philippines, steam education clipart, steam education courses, steam education conference, stem education company, steam education china, steam education competition, stem education cyprus, steam education concept, steam education challenges, steam education definition, steam education design, steam education drawing, steam education degree, steam education diagram, steam education day, steam education download, stem education dubai, steam education discount, steam discovery education, stem education definition, stem education degree, steam school days, stem education director jobs, steam learning daycare, steam education edb, steam education examples in the classroom, steam education early childhood, stem education examples, steam learning ecologies, stem education en español, steam learning edmonton, stem education essay, stem education europe, stem education early childhood, stem education egypt, stem education equity, steam learning english, stem education expansion, steam education for kids, steam education facts, steam education framework, steam education for preschoolers, steam education finland, steam education for teachers, steam education for toddlers, steam education for children, steam education for girls, steam education for creator, steam education for kindergarten, steam education funding, steam education founder, steam education fair, steam education games, steam education grants, steam education grand prix, steam education gampaha, steam education ghana, steam education gampaha photos, steam education gif, steam education grand prix pro, steam education gampaha reviews, steam education graphic, steam education gothenburg, steam education germany, steam education guide, steam education goals, steam education holding ab, steam education history, steam education handbook, steam education hub, steam education harvard, stem h education, stem education hong kong, stem education history, steam school harrisburg pa, stem education hub, stem education homeschool, steam school hours, stem education hyderabad, stem education hashtags, steam education in schools, steam education ireland, steam education icon, steam education in the philippines, steam education in ghana, steam education in tamil, steam education in early childhood, steam education in finland, stem education jobs, stem education journal, stem education jobs remote, stem education jobs scotland, stem education jobs uk, steam education jobs, steam education journal, steam education japan, stem education jobs ri, steam education jamaica, stem education jobs near me, steam school journey, steam teaching jobs, stem education jobs in the last 3 days, stem education jobs atlanta, steam education kits, steam education kindergarten, stem education kit robot science, steam education kya hai, steam education kids, steam education korea, stem education kya hai, stem education k 12 perspectives on integration, stem education kids, steam learning kits, stem education kits in india, stem education k 12, stem education kcl, stem education kindergarten, steam education là gì, steam education lesson plans, steam education latur, steam education ltd, steam education lego, steam education lesson plan template, steam education logo png, steam education lesson plans pdf, steam education license, steam education login, steam lego education club, steam.land education, stem education logo, stem education lesson plans pdf, steam education meaning, steam education meaning in hindi, steam education malaysia, steam education meaning in urdu, steam education market, steam education method, steam education master, steam education meaning in tamil, steam education music, steam education meaning in nepali, steam education market size, steam education material, steam education magnetic building blocks, mit stem education, steam education meaning in marathi, steam education nz, steam education near me, steam education news, steam school near me, stem education near me, stem education news, steam school nelson, stem education nz, stem education nonprofits, stem education ngo, stem education nsf, stem education network, stem education netherlands, stem education new zealand, stem education now more than ever, steam education origin, steam education online, steam education organization, steam education objectives, steam of education, steam school of dragons, stem education organizations, stem education organization for cambodia, stem education outreach jobs, stem education online, steam school of rock, stem education overview, stem education ontario, stem education objectives, stem education origin, steam education ppt, steam education program, steam education panadura, steam education pictures, steam education pakistan, steam education projects, steam education png, steam education poster, steam education products, steam education philippines, steam education policy, steam education powerpoint templates, steam education platform, steam education quotes, steam education questions, steam education que es, stem education quotes, stem education qatar, stem education questions, stem education quiz, stem education questionnaire, stem education queensland, stem education quality framework, stem education qut, stem education que es, que es steam learning, steam education research paper, steam education research, steam education resources, steam education reddit, steam education robot, steam education review, steam room education, stem education research, stem education resources, stem education research jobs, stem education robotics, stem education remote jobs, stem education research center, stem education research topics, stem education research paper, steam education singapore, steam education system, steam education schools, steam education sri lanka, steam education sweden, steam education south africa, steam education stands for, steam school syracuse, stem education strategic plan, stem education system, stem education singapore, stem education stands for, stem education specialist jobs, stem education specialist, stem education statistics, steam education tamil, steam education training, steam education theory and practice, stem education training for teachers, steam education technology, stem education toys, stem education training kerala kochi, stem education topics, stem education training kerala kochi photos, stem education tools, stem education trust, stem education teacher training, stem education thesis, stem education thailand, stem education technology, steam education uk, steam education usa, steam education university, steam education us, steam education unesco, stem education uk, stem education usa, stem education upsc, stem education uae, stem education unesco, stem education university, stem education us, stem education uark, stem education uky, stem education ut austin, steam education vs stem, steam education video, steam education vector, steam education vietnam, steam education veyangoda, steam vr education, stem education vacancies, stem education victoria, stem education vs traditional, stem education volunteer, stem education videos, stem education vs liberal arts, stem education vietnam, stem education vector, stem education vr, steam education website, steam education what is it, steam education wikipedia, steam education workshop, steam education wallpaper, steam education with gamification a bibliometric analysis, steamworks education, stem education works, stem education what is it, stem education workshop, stem education websites, stem education wikipedia, stem education women, stem education what it is and why it matters, stem education worldwide, steam school xenia, steam x school, stem education xanthi, what is s.t.e.a.m. education, steam in education stands for, steam education course, steam education youtube, steam education yakman, steam school york pa, steam yandere school, stem education youtube, steam education georgette yakman, stem education in nepal, what is steam education definition, steam in nepal",
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
        <meta
          name="keywords"
          content={
            Array.isArray(metadata.keywords)
              ? metadata.keywords.join(", ")
              : metadata.keywords ?? undefined
          }
        />
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
            typeof metadata.robots === "string" ? metadata.robots : undefined
          }
        />
        <meta
          property="og:title"
          content={
            metadata.openGraph?.title
              ? String(metadata.openGraph.title)
              : undefined
          }
        />
        <meta
          property="og:description"
          content={metadata.openGraph?.description}
        />
        <meta
          property="og:url"
          content={
            metadata.openGraph?.url ? String(metadata.openGraph.url) : undefined
          }
        />
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
        <ConditionalNavbar />
        {children}
        <Footer />
        <RobotGuideWrapper />
      </body>
    </html>
  );
}
