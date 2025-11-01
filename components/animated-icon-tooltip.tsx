"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import React, { useState, type FC, HTMLAttributes } from "react";

const ANIM_DURATION = 0.3;
const ICON_HOVER = {
  hover: { scale: 1.05, background: "white", opacity: 0.8 },
  tap: { scale: 0.95 },
  transition: { duration: 0.2 },
};

type TooltipPosition = "top" | "bottom" | "left" | "right";

interface AnimatedIconTooltipProps extends HTMLAttributes<HTMLDivElement> {
  icon: React.ReactElement;
  tooltipIcon: React.ReactElement;
  tooltipTitle: string;
  tooltipDescription: string;
  tooltipPosition?: TooltipPosition;
  tooltipContent?: React.ReactNode;
}

interface TooltipConfig {
  positionClass: string;
  animation: {
    initial: Record<string, number>;
    animate: Record<string, number>;
    exit: Record<string, number>;
  };
}

const getTooltipPosition = (position: TooltipPosition): TooltipConfig => {
  const configs: Record<TooltipPosition, TooltipConfig> = {
    top: {
      positionClass: "bottom-full left-1/2 -translate-x-1/2 mb-2",
      animation: { initial: { y: 10 }, animate: { y: 0 }, exit: { y: 10 } },
    },
    bottom: {
      positionClass: "top-full left-1/2 -translate-x-1/2 mt-2",
      animation: { initial: { y: -10 }, animate: { y: 0 }, exit: { y: -10 } },
    },
    left: {
      positionClass: "right-full top-1/2 -translate-y-1/2 mr-2",
      animation: { initial: { x: 10 }, animate: { x: 0 }, exit: { x: 10 } },
    },
    right: {
      positionClass: "left-full top-1/2 -translate-y-1/2 ml-2",
      animation: { initial: { x: -10 }, animate: { x: 0 }, exit: { x: -10 } },
    },
  };
  return configs[position];
};

export const AnimatedIconTooltip: FC<AnimatedIconTooltipProps> = ({
  icon,
  tooltipIcon,
  tooltipTitle,
  tooltipDescription,
  tooltipPosition = "bottom",
  tooltipContent,
  className,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const config = getTooltipPosition(tooltipPosition);
  
  const variants: Variants = {
    initial: { opacity: 0, scale: 0.95, ...config.animation.initial },
    animate: { opacity: 1, scale: 1, ...config.animation.animate },
    exit: { opacity: 0, scale: 0.95, ...config.animation.exit },
  };

  return (
    <div
      className={cn("relative text-center text-base leading-6", className)}
      {...props}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      role="group"
      aria-label={tooltipTitle}
    >
      <IconButton icon={icon} title={tooltipTitle} />

      <AnimatePresence>
        {isHovered && (
          <TooltipContent
            icon={tooltipIcon}
            title={tooltipTitle}
            description={tooltipDescription}
            content={tooltipContent}
            config={config}
            variants={variants}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export function IconButton({ icon, title }: { icon: React.ReactElement; title?: string }) {
  return (
    <motion.button
      type="button"
      aria-label={title}
      style={{ opacity: 1, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
      className="relative flex items-center justify-center rounded-full border border-gray-300 bg-linear-to-r from-gray-100 to-gray-200 p-2 sm:p-3 md:p-3.5 shadow-lg backdrop-blur-lg dark:border-white/10 dark:bg-white/10 dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.1),rgba(0,0,0))] dark:shadow-md cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      whileHover={ICON_HOVER.hover}
      whileTap={ICON_HOVER.tap}
      transition={ICON_HOVER.transition}
    >
      <motion.div
        className="flex h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 items-center justify-center"
        whileHover={{ scale: 1.1 }}
        transition={ICON_HOVER.transition}
        aria-hidden="true"
      >
        {icon}
      </motion.div>
    </motion.button>
  );
}

export function TooltipContent({
  icon,
  title,
  description,
  content,
  config,
  variants,
}: {
  icon: React.ReactElement;
  title: string;
  description: string;
  content?: React.ReactNode;
  variants: Variants;
  config: TooltipConfig;
}) {
  return (
    <motion.div
      role="tooltip"
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: ANIM_DURATION, ease: "easeOut" }}
      className={`${config.positionClass}`}
      style={{ position: "absolute", zIndex: 60 }}
    >
      <div className="w-56 sm:w-60 md:w-64 rounded-lg border border-dashed border-indigo-400 bg-white/95 text-card-foreground shadow-xl dark:border-neutral-600 dark:bg-neutral-900 dark:text-neutral-100">
        <div className="flex flex-col space-y-1.5 p-4 sm:p-5 md:p-6 pb-1 md:pb-2">
          <h3 className="flex items-center gap-2 text-xs font-medium tracking-tight md:text-sm">
            <span className="rounded-full bg-indigo-50 p-1 dark:bg-indigo-950" aria-hidden="true">
              {icon}
            </span>
            {title}
          </h3>
        </div>
        <div className="p-4 sm:p-5 md:p-6 pt-0" suppressHydrationWarning>
          <p className="text-[10px] sm:text-xs leading-relaxed text-[#0000008a] dark:text-neutral-400">
            {description}
          </p>
          {content}
        </div>
      </div>
    </motion.div>
  );
}
