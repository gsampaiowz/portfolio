export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col z-20 w-full max-w-3xl mx-auto min-h-[calc(100vh-140px)]">{children}</div>;
};
