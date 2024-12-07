"use client";
import "./meet.css";

export const runtime = 'edge';
const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <>{children}</>;
};

export default Layout;
