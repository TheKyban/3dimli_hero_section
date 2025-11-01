"use client";
import {
  ShoppingCart,
  Heart,
  Star,
  Box,
  Tag,
  Search,
  Users,
  Upload,
  Download,
  LayoutGrid,
  Layers,
  Headphones,
} from "lucide-react";
import { AnimatedIconTooltip } from "@/components/animated-icon-tooltip";
import { Badge } from "@/components/ui/badge";
import { TypeAnimation } from "react-type-animation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Home() {
  const bubbles = useRef<(HTMLDivElement | null)[]>([]);
  const typewriter = useRef<HTMLDivElement>(null);
  const parameter = useRef<HTMLDivElement>(null);
  const exploreButton = useRef<HTMLDivElement>(null);

  const addBubbleRef = (el: HTMLDivElement | null) => {
    if (el && !bubbles.current.includes(el)) {
      bubbles.current.push(el);
    }
  };

  useGSAP(() => {
    const container = document.querySelector(".scroll-container");

    // stagger bubble animations
    if (bubbles.current.length > 0) {
      bubbles.current.forEach((bubble, index) => {
        if (bubble) {
          const total = bubbles.current.length;
          const start = (index / total) * 50;
          const end = start + 10;

          gsap.fromTo(
            bubble,
            { scale: 1, opacity: 1 },
            {
              x: 0,
              y: 0,
              scale: 0.5,
              opacity: 0,
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: container,
                start: `${start}% top`,
                end: `${end}% top`,
                scrub: 1,
              },
            }
          );
        }
      });
    }

    // fade out text on scroll
    if (typewriter.current) {
      gsap.fromTo(
        typewriter.current,
        { opacity: 1, y: 0 },
        {
          opacity: 0,
          y: -300,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: container,
            start: "40% top",
            end: "90% top",
            scrub: 1,
          },
        }
      );
    }

    if (parameter.current) {
      gsap.fromTo(
        parameter.current,
        { opacity: 1, y: 0 },
        {
          opacity: 0,
          y: -300,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: container,
            start: "40% top",
            end: "90% top",
            scrub: 1,
          },
        }
      );
    }

    if (exploreButton.current) {
      gsap.fromTo(
        exploreButton.current,
        { opacity: 1, y: 0 },
        {
          opacity: 0,
          y: -300,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: container,
            start: "40% top",
            end: "90% top",
            scrub: 1,
          },
        }
      );
    }
  });

  return (
    <main
      id="main-content"
      className="scroll-container min-h-[150vh] md:min-h-[200vh] w-full overflow-hidden bg-white dark:bg-black"
    >
      <div
        className="container fixed inset-x-0 top-0 md:top-10 min-h-0 pl-4 md:pl-20 py-12 md:py-24 flex overflow-hidden z-0"
        aria-hidden="true"
      >
        <span className="bg-[#ef233c] block blur-3xl filter h-48 w-48 md:h-72 md:w-72 lg:h-96 lg:w-96 mix-blend-multiply opacity-10 rounded-full"></span>
        <span className="-ml-10 md:-ml-20 bg-[#04868b] block blur-3xl filter h-48 w-48 md:h-72 md:w-72 lg:h-96 lg:w-96 mix-blend-multiply mt-20 md:mt-40 nc-animation-delay-2000 opacity-10 rounded-full"></span>
      </div>

      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4 flex flex-col items-center text-center z-10"
        role="region"
        aria-label="Hero section"
      >
        <div ref={typewriter}>
          <h1 className="text-2xl sm:text-5xl md:text-[3.66em] font-semibold leading-[1.1] tracking-tight pb-6 text-[#1e1e1e] dark:text-[#e6e6e6] min-h-[90px] sm:min-h-[120px] md:min-h-[180px] text-center">
            <TypeAnimation
              sequence={[
                "Discover, Buy, and Sell\nDigital Products",
                2000,
                "Buy Once, Download\nAnytime, Keep Forever",
                2000,
                "Discover, Buy, and\nSell Digital Products",
                2000,
                "Sell for Free, Pay\nOnly When You Earn",
                2000,
                "Instant Payouts,\nFull Control, No Limits",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ whiteSpace: "pre-line" }}
              repeat={Infinity}
              cursor={true}
            />
          </h1>
        </div>

        <div ref={parameter}>
          <p className="text-[10px] sm:text-lg px-5 md:px-0 font-medium leading-[1.4] text-[#0000008a] dark:text-neutral-400 max-w-3xl mx-auto mb-8 md:mb-16">
            Your one-stop digital platform for 3D models and digital creations.
            <br className="hidden md:block" />
            Join our community of creators and collectors today.
          </p>
        </div>

        <div className="flex justify-center relative" ref={exploreButton}>
          <a
            href="/search?page=1"
            className="btn btn-shine absolute inline-flex items-center justify-center rounded-full transition-colors text-[10px] sm:text-base font-medium py-[0.514rem] px-3.75 sm:py-3.5 sm:px-6 bg-[rgb(2,132,199)] hover:bg-[hsl(201,96.3%,32.2%)] text-neutral-50 dark:bg-transparent dark:border whitespace-nowrap dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 w-[156px] sm:w-60 overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Explore all digital products and 3D models"
          >
            Explore all products
          </a>

          <nav
            aria-label="Platform features"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            {/* Model */}
            <div
              ref={addBubbleRef}
              className="item_bubble absolute left-1/2 top-1/2 -translate-x-[180px] -translate-y-[300px] sm:-translate-x-[280px] sm:-translate-y-[380px] md:-translate-x-[450px] md:-translate-y-[480px] lg:-translate-x-[650px] lg:-translate-y-[480px] z-50"
            >
              <AnimatedIconTooltip
                icon={<Box className="h-4 w-4 sm:h-6 sm:w-6 text-indigo-600" />}
                tooltipIcon={<Box className="h-4 w-4 text-indigo-600" />}
                tooltipTitle="3D Models"
                tooltipDescription="Browse thousands of high-quality 3D models for your projects. Filter by category, style, format, and more."
                tooltipPosition="bottom"
                tooltipContent={
                  <div className="mt-3 overflow-hidden rounded-md border border-indigo-50 dark:border-neutral-700">
                    <img
                      alt="3D Models"
                      loading="lazy"
                      width="400"
                      height="240"
                      className="h-24 w-full object-cover"
                      src="/car-model.40128753.avif"
                    />
                  </div>
                }
              />
            </div>

            {/* Checkout */}
            <div
              ref={addBubbleRef}
              className="item_bubble absolute left-1/2 top-1/2 translate-x-40 -translate-y-[250px] sm:translate-x-[260px] sm:-translate-y-[270px] md:translate-x-[380px] md:-translate-y-[350px] lg:translate-x-[560px] lg:-translate-y-[450px] hover:z-50"
            >
              <AnimatedIconTooltip
                icon={
                  <ShoppingCart className="h-4 w-4 sm:h-6 sm:w-6 text-emerald-600" />
                }
                tooltipIcon={
                  <ShoppingCart className="h-4 w-4 text-emerald-600" />
                }
                tooltipTitle="Checkout"
                tooltipDescription="Fast and secure payments for your 3D model purchases."
                tooltipPosition="bottom"
              />
            </div>

            {/* Pricing */}
            <div
              ref={addBubbleRef}
              className="item_bubble absolute left-1/2 top-1/2  -translate-x-[470px] -translate-y-[350px] hover:z-50"
            >
              <AnimatedIconTooltip
                icon={<Tag className="h-4 w-4 sm:h-6 sm:w-6 text-amber-600" />}
                tooltipIcon={<Tag className="h-4 w-4 text-amber-600" />}
                tooltipTitle="Pricing"
                tooltipDescription="Flexible pricing options for creators and businesses."
                tooltipPosition="bottom"
              />
            </div>

            {/* Search */}
            <div
              ref={addBubbleRef}
              className="item_bubble absolute left-1/2 top-1/2 translate-x-[410px] -translate-y-[250px] hover:z-50"
            >
              <AnimatedIconTooltip
                icon={
                  <Search className="h-4 w-4 sm:h-6 sm:w-6 text-blue-600" />
                }
                tooltipIcon={<Search className="h-4 w-4 text-blue-600" />}
                tooltipTitle="Search"
                tooltipDescription="Find exactly what you need with our powerful search tools."
                tooltipPosition="bottom"
              />
            </div>

            {/* Community */}
            <div
              ref={addBubbleRef}
              className="item_bubble absolute left-1/2 top-1/2 -translate-x-[690px] translate-y-60 hover:z-50"
            >
              <AnimatedIconTooltip
                icon={
                  <Users className="h-4 w-4 sm:h-6 sm:w-6 text-purple-600" />
                }
                tooltipIcon={<Users className="h-4 w-4 text-purple-600" />}
                tooltipTitle="Community"
                tooltipDescription="Join thousands of 3D artists and designers."
                tooltipPosition="bottom"
              />
            </div>

            {/* Upload */}
            <div
              ref={addBubbleRef}
              className="item_bubble absolute left-1/2 top-1/2 translate-x-[600px] -translate-y-[90px] hover:z-50"
            >
              <AnimatedIconTooltip
                icon={
                  <Upload className="h-4 w-4 sm:h-6 sm:w-6 text-teal-600" />
                }
                tooltipIcon={<Upload className="h-4 w-4 text-teal-600" />}
                tooltipTitle="Upload Models"
                tooltipDescription="Share your creations with our community. Upload your 3D models and reach thousands of potential buyers."
                tooltipPosition="left"
                tooltipContent={
                  <div className="mt-3 overflow-hidden rounded-md border border-indigo-50 dark:border-neutral-700">
                    <img
                      alt="Upload Models"
                      loading="lazy"
                      width="400"
                      height="240"
                      className="h-24 w-full object-cover"
                      src="/car-model.40128753.avif"
                    />
                  </div>
                }
              />
            </div>

            {/* Downloads */}
            <div
              ref={addBubbleRef}
              className="item_bubble absolute left-1/2 top-1/2 -translate-x-[480px] -translate-y-[120px] hover:z-50"
            >
              <AnimatedIconTooltip
                icon={
                  <Download className="h-4 w-4 sm:h-6 sm:w-6 text-cyan-600" />
                }
                tooltipIcon={<Download className="h-4 w-4 text-cyan-600" />}
                tooltipTitle="Downloads"
                tooltipDescription="Access your purchased models anywhere, anytime."
                tooltipPosition="bottom"
              />
            </div>

            {/* Categories */}
            <div
              ref={addBubbleRef}
              className="item_bubble absolute left-1/2 top-1/2 translate-x-[100px] translate-y-[60px] sm:translate-x-[180px] sm:translate-y-14 md:translate-x-[260px] md:translate-y-[45px] lg:translate-x-[350px] lg:translate-y-[50px] hover:z-50"
            >
              <AnimatedIconTooltip
                icon={
                  <LayoutGrid className="h-4 w-4 sm:h-6 sm:w-6 text-orange-600" />
                }
                tooltipIcon={<LayoutGrid className="h-4 w-4 text-orange-600" />}
                tooltipTitle="Categories"
                tooltipDescription="Explore our organized collection by categories."
                tooltipPosition="left"
              />
            </div>

            {/* Featured */}
            <div
              ref={addBubbleRef}
              className="item_bubble absolute left-1/2 top-1/2 -translate-x-[360px] translate-y-20 z-50"
            >
              <AnimatedIconTooltip
                icon={
                  <Star className="h-4 w-4 sm:h-6 sm:w-6 text-yellow-600" />
                }
                tooltipIcon={<Star className="h-4 w-4 text-yellow-600" />}
                tooltipTitle="Featured Models"
                tooltipDescription="Discover our handpicked selection of premium 3D models and assets from top creators."
                tooltipPosition="right"
                tooltipContent={
                  <div
                    key={"Creator"}
                    className="mt-3 flex items-center gap-2 rounded-md bg-indigo-50/50 p-2"
                  >
                    <span className="relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full border-2 border-white shadow-sm dark:border-neutral-700">
                      <img
                        alt="Creator"
                        loading="lazy"
                        width="400"
                        height="240"
                        className="object-cover"
                        src="/api/placeholder/400/320"
                      />
                    </span>
                    <div className="flex flex-col">
                      <span className="text-xs font-medium">Creator</span>
                      <Badge>Premium</Badge>
                    </div>
                  </div>
                }
              />
            </div>

            {/* Collections */}
            <div
              ref={addBubbleRef}
              className="item_bubble absolute left-1/2 top-1/2 translate-x-[30px] translate-y-[150px] sm:translate-x-[60px] sm:translate-y-[140px] md:translate-x-[75px] md:translate-y-[165px] lg:translate-x-[90px] lg:translate-y-[190px] hover:z-50"
            >
              <AnimatedIconTooltip
                icon={
                  <Layers className="h-4 w-4 sm:h-6 sm:w-6 text-pink-600" />
                }
                tooltipIcon={<Layers className="h-4 w-4 text-pink-600" />}
                tooltipTitle="Collections"
                tooltipDescription="Curated sets of models for specific projects and needs."
                tooltipPosition="top"
              />
            </div>

            {/* Favorites */}
            <div
              ref={addBubbleRef}
              className="item_bubble absolute left-1/2 top-1/2 -translate-x-[480px] translate-y-[25px] lg:-translate-x-[650px] lg:translate-y-[30px] hover:z-50"
            >
              <AnimatedIconTooltip
                icon={<Heart className="h-4 w-4 sm:h-6 sm:w-6 text-red-600" />}
                tooltipIcon={<Heart className="h-4 w-4 text-red-600" />}
                tooltipTitle="Favorites"
                tooltipDescription="Save models you love for quick access later."
                tooltipPosition="right"
              />
            </div>

            {/* Support */}
            <div
              ref={addBubbleRef}
              className="item_bubble absolute left-1/2 top-1/2 -translate-x-[100px] translate-y-16 sm:-translate-x-20 sm:translate-y-14 md:-translate-x-[100px] md:translate-y-16 lg:-translate-x-[120px] lg:translate-y-20 hover:z-50"
            >
              <AnimatedIconTooltip
                icon={
                  <Headphones className="h-4 w-4 sm:h-6 sm:w-6 text-gray-600" />
                }
                tooltipIcon={<Headphones className="h-4 w-4 text-gray-600" />}
                tooltipTitle="Support"
                tooltipDescription="Get help when you need it from our friendly support team."
                tooltipPosition="right"
              />
            </div>
          </nav>
        </div>
      </div>
    </main>
  );
}
