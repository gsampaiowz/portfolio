"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { truncateSync } from "fs";

type AnimatedTabsProps = {
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
};

export default function Nav({
  containerClassName,
  activeTabClassName,
  tabClassName,
}: AnimatedTabsProps) {
  const pathname = usePathname();

  const tabs = [
    {
      title: "Home",
      page: ""
    },
    {
      title: "Projects",
      page: "projects"
    },
    {
      title: "Contact",
      page: "contact"
    },
    {
      title: "Skills",
      page: "skills"
    }
  ];

  return (
    <div
      className={cn(
        "relative flex flex-wrap items-center justify-center",
        containerClassName
      )}
    >
      <ul className="flex flex-row items-center _underline-hover ">
        {tabs.map((tab) => (
            <li
              key={tab.title}
              className={cn(
                "group relative z-[1] rounded-full px-4 py-2",
                { "z-0": pathname.slice(1) === tab.page },
                tabClassName
              )}
            >
              {pathname.slice(1) === tab.page && (
                <motion.div
                  layoutId="clicked-button"
                  transition={{ duration: 0.2 }}
                  className={cn(
                    "absolute inset-0 rounded-full bg-[hsl(var(--primary))]",
                    activeTabClassName
                  )}
                />
              )}

              <Link
                href={`/${tab.title !== "Home" ? tab.page : ""}`}
                className={cn(
                  "relative block font-medium duration-200",
                  pathname.slice(1) === tab.page
                    ? "text-[hsl(var(--background))] delay-100"
                    : "text-[hsl(var(--primary))] hover:text-[hsl(var(--muted-foreground))] ",
                )}
              >
                {tab.title}
              </Link>
            </li>
        ))}
      </ul>
    </div>
  );
}
