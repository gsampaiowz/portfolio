import { cn } from "@/lib/utils";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col w-full max-w-3xl mx-auto min-h-[calc(100vh-152px)]",
        className
      )}
    >
      {children}
    </div>
  );
}
