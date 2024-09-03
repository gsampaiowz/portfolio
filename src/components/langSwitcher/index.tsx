"use client";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";
import { useTransition } from "react";

export default function LangSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [isPending, startTransition] = useTransition();

  return (
    <ToggleGroup
      disabled={isPending}
      onValueChange={(value) =>
        startTransition(() => {
          router.replace(pathname, { locale: value as "pt" | "en" });
        })
      }
      defaultValue={params.locale as string}
      className="[&>*]:text-xs [&>*]:h-auto [&>*]:py-2"
      type="single"
    >
      <ToggleGroupItem value="pt">PT</ToggleGroupItem>
      <ToggleGroupItem value="en">EN</ToggleGroupItem>
    </ToggleGroup>
  );
}
