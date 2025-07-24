import {
  Hero,
  Stats,
  AboutX,
  Stats2,
  ServicesX,
  WhyX,
  CTA,
  Form
} from "@/components/index";

import Contact from "@/app/contact/page"

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutX />
      <Stats2 />
      <ServicesX />
      <WhyX />
      <CTA/>
      <Form/>
    </>
  );
}
