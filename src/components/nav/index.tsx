import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import internalLinks from "@/data/internal-links";
import { FaArrowLeft } from "react-icons/fa";

export default function Nav() {
  const pathname = usePathname();

  return (
    <div
      className={"relative flex flex-wrap items-center justify-center md:mx-4"}
    >
      <ul className="flex md:flex-col w-full items-center">
        {internalLinks.map((tab) => (
          <li
            key={tab.title}
            className={cn(
              "group relative z-[1] md:w-full rounded-full md:rounded-none px-4 py-2 md:border-b-2",
              {
                "z-0": pathname.slice(1) == tab.page,
              }
            )}
          >
            {pathname.slice(1) == tab.page && (
              <motion.div
                layoutId="clicked-button"
                transition={{ duration: 0.2 }}
                className={
                  "absolute inset-0 rounded-full md:rounded-md bg-primary md:bg-transparent"
                }
              />
            )}

            <Link
              href={`/${tab.title !== "Home" ? tab.page : ""}`}
              className={cn(
                "relative flex items-center justify-between duration-300 md:py-2 hover:text-muted-foreground",
                pathname.slice(1) == tab.page
                  ? "text-background md:text-primary delay-100"
                  : "text-primary"
              )}
            >
              {tab.title}
              <FaArrowLeft
                className={cn(
                  "hidden text-primary",
                  pathname.slice(1) == tab.page && "md:block"
                )}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
