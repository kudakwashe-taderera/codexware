import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/Layout";

export const metadata: Metadata = {
  title: "CodeXware - Software Developer | Web Developer | Mobile App Development in Harare, Zimbabwe",
  description: "Premium software development, web development, and mobile app development services in Harare, Zimbabwe. Expert web designers and developers delivering exceptional digital solutions.",
  keywords: [
    "Software Developer Harare",
    "Web Developer Harare",
    "Web Designer Harare",
    "Web Development Zimbabwe",
    "Mobile App Development Harare",
    "Software Developer Zimbabwe",
    "Web Development Services Harare",
    "Mobile App Developer Zimbabwe",
    "Full Stack Developer Harare",
    "Web Design Zimbabwe",
    "App Development Harare",
    "Software Development Zimbabwe",
    "Web Developer Zimbabwe",
    "Custom Software Development Harare",
    "E-commerce Development Zimbabwe"
  ],
  authors: [{ name: "CodeXware" }],
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "android-chrome-192x192", url: "/android-chrome-192x192.png" },
      { rel: "android-chrome-512x512", url: "/android-chrome-512x512.png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "CodeXware - Software Developer | Web Developer | Mobile App Development in Harare, Zimbabwe",
    description: "Premium software development, web development, and mobile app development services in Harare, Zimbabwe.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeXware - Software Developer | Web Developer | Mobile App Development",
    description: "Premium software development services in Harare, Zimbabwe",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
