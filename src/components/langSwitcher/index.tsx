import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Languages } from "lucide-react";

export default function LangSwitcher() {
  return (
    <Select defaultValue="en">
      <SelectTrigger value="en" className="!cursor-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 border-none w-auto">
        <Languages size={20} />
      </SelectTrigger>
      <SelectContent className="border-2 rounded-lg border-primary">
        <SelectItem value="pt">Portuguese</SelectItem>
        <SelectItem value="en">English</SelectItem>
      </SelectContent>
    </Select>
  );
}
