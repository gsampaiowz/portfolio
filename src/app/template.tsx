"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();

  const notHomePage = pathName !== "/";

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  return (
    <div
      onMouseMove={(e) => {
        const { left, top } = e.currentTarget.getBoundingClientRect();

        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
      }}
      className="w-full overflow-hidden"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-100 transition duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(200px circle at ${mouseX}px ${mouseY}px, rgba(100, 100, 100, 0.25), transparent 70%)
            `,
        }}
      />
        <Header />
      <motion.main
        className={notHomePage ? "relative" : ""}
        initial={ notHomePage && { opacity: 0, y: 50 }}
        animate={ notHomePage && { opacity: 1, y: 0 }}
        transition={ notHomePage ? { duration: 0.5, ease: "easeInOut" } : {}}
        >
        {children}
      </motion.main>
        <Footer />
    </div>
  );
}
