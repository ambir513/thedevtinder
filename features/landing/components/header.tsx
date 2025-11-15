"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./theme-toggle";

const navLinks = [
  { name: "Resume Builder", href: "/resume-build", id: 1 },
  { name: "Subscription", href: "/subscribe", id: 3 },
  { name: "About", href: "/about", id: 2 },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 45) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="mx-auto z-40 max-w-6xl flex md:justify-center items-center h-[79px] sticky top-0">
      <div
        className={cn(
          "flex lg:justify-center justify-between lg:gap-48 py-2 px-5 mx-2 rounded-lg items-center",
          scrolled
            ? "bg-background border backdrop-blur-2xl lg:w-fit w-full "
            : "w-full"
        )}
      >
        <Link href={"/"}>
          <Image
            className="active:scale-98"
            draggable={false}
            src={"/favicon.svg"}
            alt="The DevTinder"
            width={40}
            height={40}
            priority={true}
          />
        </Link>
        <nav className="lg:block hidden">
          <ul className="flex gap-11">
            {navLinks.map((links) => (
              <li key={links.id}>
                <Link
                  href={links.href}
                  className="block w-full text-sm hover:text-muted-foreground"
                >
                  {links.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle className="lg:block hidden" />
          <div className="flex gap-2 lg:border-l-2 lg:pl-4">
            <Button variant={"secondary"} size={"sm"} asChild>
              <Link href={"/auth/login"}>Login</Link>
            </Button>
            <Button size={"sm"} asChild>
              <Link href={"/auth/register"}>Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
