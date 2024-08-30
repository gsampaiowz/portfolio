import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function LangSwitcher() {
  return (
    <ToggleGroup
      defaultValue="en"
      className="[&>*]:text-xs [&>*]:h-auto [&>*]:py-2"
      type="single"
    >
      <ToggleGroupItem value="pt">PT</ToggleGroupItem>
      <ToggleGroupItem value="en">EN</ToggleGroupItem>
    </ToggleGroup>
  );
}
