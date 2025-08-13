import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export interface SocialItem {
  title: string;
  href: string;
  Icon: React.ElementType;          // store the *component type*
  className: string              // Tailwind color classes live here
}

export const SOCIALS_ICONS = [
  {
    title: "linkedin",
    href: "https://www.linkedin.com/company/xtechnology-and-consulting-llc/",
    Icon: LinkedInIcon,
    color: "rgba(255, 255, 255, 0.7)", // Tailwind blue-500 hex
  },
  {
    title: "instagram",
    href: "https://www.instagram.com/xtechnologyusa/",
    Icon: InstagramIcon,
    color: "rgba(255, 255, 255, 0.7)", // Tailwind pink-500 hex
  },
] as const;
