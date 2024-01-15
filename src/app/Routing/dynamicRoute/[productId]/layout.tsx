export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <h1 className="text-2xl">Featured layout product</h1>
    </>
  );
}
