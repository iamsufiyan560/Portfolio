"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";

const navItems = {
  "/": { name: "Home" },
  "/projects": { name: "Projects" },
  "/work": { name: "Experience" },

  "/contact": { name: "Contact" },
};

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (!mounted) {
    return null;
  }

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 ">
            {Object.entries(navItems).map(([path, { name }]) => (
              <Link
                key={path}
                href={path}
                className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2"
              >
                {name}
              </Link>
            ))}
          </div>
          <button
            onClick={toggleTheme}
            aria-label="themeToggle"
            className="ml-auto p-2"
          >
            {theme === "light" ? (
              <IoMoonOutline size={24} />
            ) : (
              <MdOutlineLightMode size={24} />
            )}
          </button>
        </nav>
      </div>
    </aside>
  );
}
