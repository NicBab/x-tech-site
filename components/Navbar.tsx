"use client"; // required for state in App Router

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import { Socials } from "@/components/index";
import menuIcon from "@/public/menu.svg";
import closeIcon from "@/public/close.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-2 justify-between items-center navbar relative z-50">
      <Link href="/">
        <Image
          src="/X_icon.png"
          alt="icon"
          width={100}
          height={100}
          className="w-[70px] h-[50px]"
        />
      </Link>

      <Socials className="" />

      {/* Desktop nav */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {NAV_LINKS.map((link, index) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className={`font-poppins font-normal cursor-pointer text-[18px] text-dimWhite hover:text-orange ${
                index === NAV_LINKS.length - 1 ? "mr-0" : "mr-10"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile menu icon */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <Image
          src={toggle ? closeIcon : menuIcon}
          alt="menu"
          width={28}
          height={28}
          className="object-contain cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>

      {/* Mobile sidebar menu */}
      <div
        className={`${
          toggle ? "flex" : "hidden"
        } p-6 glass-card absolute top-20 right-4 mx-4 my-4 min-w-[140px] rounded-xl flex-col`}
      >
        <ul className="list-none flex flex-col items-start">
          {NAV_LINKS.map((link, index) => (
            <li
              key={link.label}
              className={`z-50 font-poppins font-normal cursor-pointer text-[16px] text-white ${
                index !== NAV_LINKS.length - 1 ? "mb-4" : ""
              }`}
            >
              <Link href={link.href}>
                <span className="hover-orange-text-gradient transition-all duration-200">
                  {link.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
