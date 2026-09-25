// components/ConditionalNavbar.tsx
"use client";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

const ConditionalNavbar = () => {
  const pathname = usePathname();
  const hideNavbar = pathname.startsWith("/shopingapp");

  if (hideNavbar) return null;

  return <Navbar />;
};

export default ConditionalNavbar;