import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { GithubIcon, Mail } from "lucide-react";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "3DIMLI HERO",
  description: "create by aditya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${poppins.className} antialiased`}
        suppressHydrationWarning
      >
        {children}
        <div className="h-screen relative">
          {/* Email Section */}
          <Link
            href={"mailto:aaditya1392@gmail.com"}
            className="cursor-pointer flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-4 absolute lg:fixed bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-10 md:left-10 bg-white/10 backdrop-blur-lg border border-gray-300 rounded-lg p-3 px-4 sm:p-3.5 sm:px-6 md:p-4 md:px-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-neutral-200 hover:text-white"
          >
            <div className="bg-emerald-500 rounded-full p-3 sm:p-4 md:px-6 md:py-6 w-fit h-fit">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </div>
            <span className="text-xs sm:text-sm md:text-base">Email Me</span>
          </Link>

          <Link
            href={"https://github.com/TheKyban/3dimli_hero_section"}
            target="_blank"
            className="cursor-pointer flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-4 absolute lg:fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-10 md:right-10 bg-white/10 backdrop-blur-lg border border-gray-300 rounded-lg p-3 sm:p-3.5 md:p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 text-neutral-200 hover:text-white"
          >
            <div className="bg-emerald-500 rounded-full p-3 sm:p-4 md:px-6 md:py-6 w-fit h-fit">
              <GithubIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </div>
            <span className="text-xs sm:text-sm md:text-base">
              View Source on GitHub
            </span>
          </Link>
        </div>
      </body>
    </html>
  );
}
