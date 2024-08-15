"use client"
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaRegMoon, FaSun } from "react-icons/fa";

export default function ThemeSwitch() {
    
  const { setTheme, theme } = useTheme();

  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])

  return !isClient ? null : theme == "dark" ? (
    <FaRegMoon
    className="hover:size-7 size-5 cursor-pointer duration-500"
      onClick={() => setTheme("light")}
      color="white"
    />
  ) : (
    <FaSun
    className="hover:size-7 size-5 cursor-pointer text-[hsl(var(--primary))] duration-500"
      onClick={() => setTheme("dark")}
    />
  );
};
