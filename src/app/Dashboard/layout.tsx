export default function Layout({
  children,
  analytics,
  notification,
  sidebar,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  notification: React.ReactNode;
  sidebar: React.ReactNode;
}) {
  return (
    <>
      <h1 className="text-2xl">Dashboard</h1>
      {children}
      {analytics}
      {notification}
      {sidebar}
    </>
  );
}
