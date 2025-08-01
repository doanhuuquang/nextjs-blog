"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const navLinks = [
  { name: "Trang chủ", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Về tôi", href: "/about-me" },
  { name: "Liên hệ", href: "/contact" },
  { name: "Carton Sport", href: "/shop" },
];

export default function AppNav({ className }: { className?: string }) {
  const pathName = usePathname();

  return (
    <nav className={cn("flex gap-5 uppercase", className)}>
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={cn(
            "text-sm",
            link.href === pathName
              ? "text-primary font-semibold"
              : "text-muted-foreground hover:text-primary ease-in-out duration-300"
          )}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
