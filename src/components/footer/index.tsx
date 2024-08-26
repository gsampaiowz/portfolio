"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CommandMenu } from "../commandMenu";
import LangSwitcher from "../langSwitcher";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

export default function Footer() {
  let OS;

  useEffect(() => {
    if (navigator) {
      OS = navigator.userAgent.match(/(Windows|Mac|Linux)/)![0];
    }
  }, []);

  const [openDialog, setOpenDialog] = useState(false);

  return (
    <motion.footer
      transition={{ duration: 1 }}
      variants={container}
      initial="hidden"
      animate="visible"
      className="w-full mt-8 pb-4 max-w-3xl mx-auto px-6"
    >
      <div className="w-full h-full flex justify-between items-center [&>*]:duration-300">
        <div className="w-20 h-6 flex">
          <span
            onClick={() => setOpenDialog(true)}
            className="transition-[background] relative duration-300 w-[56px] h-full rounded-md hover:bg-primary/10 overflow-hidden"
          >
            <span className="flex gap-1 items-center transition-transform duration-500 hover:-translate-x-[52px] w-auto absolute left-0 h-full px-2 font-semibold text-xs [&>*]:w-12">
              <span className="dark:font-normal">search</span>
              <span>
                {OS == "Mac" ? <kbd>⌘</kbd> : <kbd>Ctrl</kbd>}+<kbd>K</kbd>
              </span>
            </span>
          </span>
        </div>
        <small className="text-sm">© 2024 Gabriel Sampaio</small>

        <div className="w-20 flex justify-end rounded-lg">
          <LangSwitcher />
        </div>
      </div>
      <CommandMenu open={openDialog} setOpen={setOpenDialog} />
    </motion.footer>
  );
}
