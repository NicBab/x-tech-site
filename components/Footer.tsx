import { FOOTER_CONTACT_INFO, FOOTER_LINKS } from "@/constants";
import { PhoneNumber, Socials } from "@/components/index";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flexCenter text-dimWhite p-5">
        <PhoneNumber/>
      <div className="relative z-2 flex flex-col items-center sm:px-10">
        <div className="flex items-center justify-center m-2 max-w-xs text-white font-poppins font-semibold text-[18px] ss:text-[30px] max-h-[300px]">
          <span className="block text-center leading-snug mb-5">
            X Technology
            <br />
            202 Magnate Dr.
            <br />
            Suite B
            <br />
            Lafayette, La. 70508
          </span>
        </div>
      </div>
      <div className="border bg-gray-20 mb-5" />
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image src="/X_icon.png" alt="X_icon" width={74} height={29} />
          </Link>
          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1 text-white">
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn title={columns.title}>
                <ul className="regular-14 flex flex-col gap-4 text-dimWhite">
                  {columns.links.map((link) => (
                    <Link href="/" key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}
            <div className="flex flex-col gap-5 text-white">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    href="/"
                    key={link.label}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p className="whitespace-nowrap text-dimWhite">
                      {link.label}:
                    </p>
                    <p className="medium-14 whitespace-nowrap text-dimWhite">
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>
            <div className="flex flex-col gap-5">
              <FooterColumn title="Find Us:">
                <Socials />
              </FooterColumn>
            </div>
          </div>
        </div>
        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-30">
          2025 | XTechnology | All rights reserved
        </p>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
