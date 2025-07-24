import {
  Hero,
  Section1,
  Section2,
  Section3,
  CTA,
  ContactForm
} from "@/components/index";

import Contact from "@/app/contact/page"

export default function Home() {
  return (
    <>
      <Hero />
      <Section1 />
      <Section2 />
      <Section3/>
      <CTA/>
      <ContactForm/>
    </>
  );
}
