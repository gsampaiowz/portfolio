"use client";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function Button({
  text,
  icon,
  additionalClass,
  link,
}: {
  text: string;
  icon?: React.ReactNode;
  additionalClass?: string;
  link?: string;
}) {
  const router = useRouter();

  return (
    <button
      onClick={() => link && router.push(link)}
      className={cn(
        "text-background justify-center bg-primary rounded-md flex transition-all items-center gap-2 py-2 px-3 btn-hover hover:bg-primary/90",
        additionalClass
      )}
    >
      {text}
      {icon && (
        <span className="transition-transform group-hover:translate-x-3">
          {icon}
        </span>
      )}
    </button>
  );
}
