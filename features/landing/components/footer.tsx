import { Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const footerList = [
  { name: "About", href: "/about", id: 1 },
  { name: "Features", href: "/features", id: 2 },
  { name: "Resume Build", href: "/resume-build", id: 3 },
  { name: "Contact Us", href: "/contact-us", id: 4 },
];

const importantList = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & conditions", href: "/terms-conditions" },
];

const socialList = [
  { icon: Linkedin, href: "https://linkedin.com/in/ambir513" },
  { icon: Twitter, href: "https://x.com/ambir513" },
  { icon: Instagram, href: "https://instagram.com/ambir513" },
];

export function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-4 my-10 ">
      <div className="flex flex-col gap-y-8 my-10">
        <div className="flex flex-col lg:flex-row lg:justify-around gap-6 lg:gap-4 items-center lg:items-center">
          <div className="flex items-center gap-x-3">
            <Image
              src={"/favicon.svg"}
              alt="Footer Image of TheDevtinder"
              width={45}
              height={45}
            />
            <p className="text-lg font-semibold tracking-tighter">
              The Devtinder
            </p>
          </div>
          <div className="flex flex-wrap gap-4 lg:gap-x-6 items-center justify-center">
            {footerList.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="hover:text-muted-foreground"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex gap-x-3">
            {socialList.map((item) => (
              <Link href={item.href} target="_blank" key={item.href}>
                <item.icon />
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:mx-20 text-center sm:text-left">
          <div className="text-sm">
            {"©2025 The DevTinder, Made with ❤️ for Developers."}
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            {importantList.map((item) => (
              <Link href={item.href} key={item.name} className="text-sm">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
