import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { Services } from "@/components/sections/services";
import { Work } from "@/components/sections/work";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Work />
      <Process />
      <Testimonials />
      <CtaBanner />
      <Contact />
    </>
  );
}
