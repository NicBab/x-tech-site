import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";

export interface SocialItem {
  title: string;
  href: string;
  Icon: React.ElementType; // store the component type
  className: string; // Tailwind color classes
}

export const SOCIALS_ICONS = [
  {
    title: "linkedin",
    href: "https://www.linkedin.com/company/xtechnology-and-consulting-llc/",
    Icon: LinkedInIcon,
    color: "rgba(255, 255, 255, 0.7)",
  },
  {
    title: "instagram",
    href: "https://www.instagram.com/xtechnologyusa/",
    Icon: InstagramIcon,
    color: "rgba(255, 255, 255, 0.7)",
  },
  {
    title: "facebook",
    href: "",
    Icon: FacebookIcon,
    color: "rgba(255, 255, 255, 0.7)",
  },
  {
    title: "X",
    href: "",
    Icon: XIcon,
    color: "rgba(255, 255, 255, 0.7)",
  },
] as const;
