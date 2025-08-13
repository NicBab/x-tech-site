// components/Socials.tsx
"use client";
import React from "react";
import { SOCIALS_ICONS } from "@/constants/socials";

type Props = { className?: string };

export default function Socials({ className = "" }: Props) {
  return (
    <div className={`flex flex-row md:mt-0 ml-5 ${className}`}>
      {SOCIALS_ICONS.map(({ title, href, Icon, color }, i) => (
        <a
          key={title}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={title}
          className={`inline-flex items-center ${i !== SOCIALS_ICONS.length - 1 ? "mr-6" : "mr-0"}`}
        >
          {/* Size via font-size, hard color via htmlColor so navbar styles can't override */}
          <span className="inline-flex text-[24px] leading-none">
            <Icon fontSize="inherit" htmlColor={color} />
          </span>
        </a>
      ))}
    </div>
  );
}
