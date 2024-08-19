"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();

  const shouldAnimate = pathName !== "/";

  return shouldAnimate ? (
    <motion.main
      className="relative"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
    >
      {children}
    </motion.main>
  ) : (
    <>{children}</>
  );
}
