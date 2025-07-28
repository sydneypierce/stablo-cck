"use client";

import Link from "next/link";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import Container from "@/components/container";

export default function Navbar({ logoUrl }) {
  const menu = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Archive", href: "/archive" },
    { label: "Recipes", href: "/recipe" }
  ];

  return (
    <Container>
      <nav>
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex items-center justify-between py-4">
                {/* Logo */}
                <Link href="/">
                  {logoUrl ? (
                    <Image
                      src={logoUrl}
                      alt="Logo"
                      width={112}
                      height={32}
                      priority
                    />
                  ) : (
                    <span className="text-xl font-bold">Crimson & Clover Kitchen</span>
                  )}
                </Link>

                {/* Desktop Nav */}
                <div className="hidden space-x-6 md:flex">
                  {menu.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                {/* Mobile toggle */}
                <Disclosure.Button className="md:hidden">
                  <svg
                    className="h-6 w-6 text-gray-600 dark:text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {open ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </Disclosure.Button>
              </div>

              {/* Mobile Nav */}
              <Disclosure.Panel className="md:hidden">
                <div className="space-y-2 pb-4">
                  {menu.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-500 dark:text-gray-400"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </nav>
    </Container>
  );
}
