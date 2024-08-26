import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import internalLinks from "@/data/internal-links";

export default function Nav() {
  const pathname = usePathname();

  return (
    <div className={"relative flex flex-wrap items-center justify-center"}>
      <ul className="flex flex-row items-center _underline-hover ">
        {internalLinks.map((tab) => (
          <li
            key={tab.title}
            className={cn("group relative z-[1] rounded-full px-4 py-2", {
              "z-0": pathname.slice(1) == tab.page,
            })}
          >
            {pathname.slice(1) == tab.page && (
              <motion.div
                layoutId="clicked-button"
                transition={{ duration: 0.2 }}
                className={"absolute inset-0 rounded-full bg-primary"}
              />
            )}

            <Link
              href={`/${tab.title !== "Home" ? tab.page : ""}`}
              className={cn(
                "relative block font-medium duration-300",
                pathname.slice(1) == tab.page
                  ? "text-background delay-100"
                  : "text-primary hover:text-muted-foreground "
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
