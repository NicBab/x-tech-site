'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from '@/style';

type ButtonProps = {
  type?: 'button' | 'submit';
  title: string;
  icon?: string;
  variant?: string; // this will be a full Tailwind class string
  href?: string;
};

const Button = ({ type = 'button', title, icon, variant = '', href }: ButtonProps) => {
  const baseClasses = `${styles.flexCenter} gap-3 rounded-full border ${variant}`;

  const content = (
    <>
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <span className="bold-16 whitespace-nowrap">{title}</span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={baseClasses}>
      {content}
    </button>
  );
};

export default Button;