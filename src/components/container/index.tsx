export const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col relative z-20 w-full max-w-5xl mx-auto min-h-[calc(100vh-160px)]">{children}</div>;
};
