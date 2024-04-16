export default function BackCardLayout({
  children,
}: {
  children: JSX.Element;
}) {
  return (
    <div className="overflow-y-auto w-full h-full bg-gray-100 p-8 flex flex-col items-center gap-3">
      {children}
    </div>
  );
}
