import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { CgClose, CgMenu } from "react-icons/cg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Nav from "../nav";
import { useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger>
        <CgMenu className="duration-300 hover:opacity-50" size={25} />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="justify-between items-center flex flex-row">
          <DrawerTitle className="font-normal">Navigation</DrawerTitle>
          <DrawerDescription />
          <DrawerClose>
            <CgClose className="duration-300 hover:opacity-50" size={25} />
          </DrawerClose>
        </DrawerHeader>
        <div onClick={() => setOpen(false)}>
          <Nav />
        </div>
        <DrawerFooter className="flex-row justify-center">
          <FaLinkedin
            onClick={() =>
              window.open("https://www.linkedin.com/in/gsampaiowz/")
            }
            size={40}
            className="duration-300 text-primary bg-muted py-1 flex-1 rounded-md hover:opacity-50 "
          />
          <FaGithub
            onClick={() => window.open("https://github.com/gsampaiowz")}
            size={40}
            className="duration-300 text-primary bg-muted py-1 flex-1 rounded-md hover:opacity-50 "
          />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
