import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const sora = Sora(
  {
    subsets: ["latin"],
    variable: "--font-sora",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  }
);




export const metadata: Metadata = {
  title: "ADVIBE - Digital Marketing Agency | Grow Your Brand",
  description: "Partner with AD VIBE for result-driven digital marketing solutions. We help brands thrive through social media marketing, digital advertising, content creation, and data-driven strategies.",
  keywords: [
    "digital marketing",
    "social media marketing", 
    "digital advertising",
    "brand strategy",
    "content creation",
    "analytics reporting",
    "marketing agency",
    "brand growth",
    "AD VIBE"
  ],
  authors: [{ name: "AD VIBE Team" }],
  creator: "AD VIBE",
  publisher: "AD VIBE",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://advibe.com",
    title: "AD VIBE - Digital Marketing Agency | Grow Your Brand",
    description: "Partner with AD VIBE for result-driven digital marketing solutions. We help brands thrive through social media marketing, digital advertising, and innovative strategies.",
    siteName: "AD VIBE",
  },
  twitter: {
    card: "summary",
    title: "AD VIBE - Digital Marketing Agency | Grow Your Brand",
    description: "Partner with AD VIBE for result-driven digital marketing solutions. We help brands thrive through social media marketing and digital advertising.",
    creator: "@advibe",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://advibe.com",
  },
  category: "Digital Marketing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(sora.className, "bg-white")}
      >
        {children}
      </body>
    </html>
  );
}
