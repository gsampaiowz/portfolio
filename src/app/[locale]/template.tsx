"use client";

import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();

  const notHomePage = pathName !== "/";

  return (
    <>
      <motion.main
        className={notHomePage ? "relative" : ""}
        initial={notHomePage && { opacity: 0, y: 50 }}
        animate={notHomePage && { opacity: 1, y: 0 }}
        transition={notHomePage ? { duration: 0.5, ease: "easeInOut" } : {}}
      >
        {children}
      </motion.main>

      <Footer />
    </>
  );
}
