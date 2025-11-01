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
          <div className="fixed bottom-10 left-10">
            <Link
              href={"mailto:aaditya1392@gmail.com"}
              className="cursor-pointer flex flex-col items-center justify-center gap-4 fixed bottom-10 left-10 bg-white/10 backdrop-blur-lg border border-gray-300 rounded-lg p-4 px-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-neutral-200 hover:text-white"
            >
              <div className="bg-emerald-500 rounded-full px-6 py-6 w-fit h-fit">
                <Mail className="w-6 h-6" />
              </div>
              <span>Email Me</span>
            </Link>
          </div>

          <Link
            href={"https://github.com/TheKyban/3dimli_hero_section"}
            target="_blank"
            className="cursor-pointer flex flex-col items-center justify-center gap-4 fixed bottom-10 right-10 bg-white/10 backdrop-blur-lg border border-gray-300 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 text-neutral-200 hover:text-white"
          >
            <div className="bg-emerald-500 rounded-full px-6 py-6 w-fit h-fit">
              <GithubIcon className="w-6 h-6" />
            </div>
            <span>View Source on GitHub</span>
          </Link>
        </div>
      </body>
    </html>
  );
}
