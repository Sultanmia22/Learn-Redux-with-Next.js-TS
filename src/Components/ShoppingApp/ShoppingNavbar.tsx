// components/ShoppingNavbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ShoppingBag } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/shopingapp" },
  { label: "Products", href: "/shopingapp/products" },
];

const ShoppingNavbar = () => {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Left: Logo */}
        <Link href="/shopingapp" className="flex items-center gap-2 font-bold text-lg">
          <ShoppingBag size={22} />
          <span>ShoppingApp</span>
        </Link>

        {/* Right: Nav Links + Profile */}
        <div className="flex items-center gap-6">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors hover:text-foreground/80 ${
                pathname === href
                  ? "text-foreground"
                  : "text-foreground/50"
              }`}
            >
              {label}
            </Link>
          ))}

          {/* Profile Image */}
          <Image
            src="https://github.com/shadcn.png"
            alt="profile"
            width={32}
            height={32}
            className="rounded-full cursor-pointer ring-2 ring-border hover:ring-foreground/30 transition"
          />
        </div>

      </div>
    </nav>
  );
};

export default ShoppingNavbar;