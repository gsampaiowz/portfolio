export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col w-full max-w-3xl mx-auto min-h-[calc(100vh-140px)]">{children}</div>;
};
