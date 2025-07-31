"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "@/style";

type ButtonProps = {
  type?: "button" | "submit";
  title: string;
  icon?: string;
  variant?: "buttonPrimary" | "buttonSecondary";
  href?: string;
};

const Button = ({
  type = "button",
  title,
  icon,
  variant = "buttonPrimary",
  href,
}: ButtonProps) => {
  const appliedStyles = styles[variant] || "";

  const content = (
    <div className={`flex items-center justify-center gap-3 ${appliedStyles}`}>
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <span className="bold-16 whitespace-nowrap">{title}</span>
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return <button type={type}>{content}</button>;
};

export default Button;
