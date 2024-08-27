import { useEffect } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import internalLinks from "@/data/internal-links";
import Link from "next/link";
import { CgFileDocument } from "react-icons/cg";
import { TbLanguage } from "react-icons/tb";
import { Mail, MoonIcon, SunIcon } from "lucide-react";
import socialMedias from "@/data/social-medias";

export function CommandMenu({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Pages">
          {internalLinks.map((tab) => (
            <CommandItem key={tab.title}>
              <Link
                href={tab.page}
                onClick={() => {
                  setOpen(false);
                }}
                className={"items-center flex gap-2"}
              >
                <CgFileDocument />
                {tab.title}
              </Link>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Options">
          <CommandItem>
            <TbLanguage />
            Portuguese
          </CommandItem>
          <CommandItem>
            <TbLanguage />
            English
          </CommandItem>
          <CommandItem>
            <MoonIcon />
            Dark Theme
          </CommandItem>
          <CommandItem>
            <SunIcon />
            Light Theme
          </CommandItem>
        </CommandGroup>
        <CommandGroup heading="Social">
          {socialMedias.map((item, index) => (
            <CommandItem onClick={() => window.open(item.url)} key={index}>
              <item.icon size={30} /> {item.label}
            </CommandItem>
          ))}
          <CommandItem
            onClick={() => window.open("mailto:gabrielsampaio1216@gmail.com")}
          >
            <Mail />
            E-mail
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
