import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { CapabilityStrip } from "@/components/sections/capability-strip";
import { FeaturedCaseStudy } from "@/components/sections/featured-case-study";
import { FinalCta } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { Insights } from "@/components/sections/insights";
import { Philosophy } from "@/components/sections/philosophy";
import { Process } from "@/components/sections/process";
import { SelectedProjects } from "@/components/sections/selected-projects";
import { Services } from "@/components/sections/services";
import { TechnologyStrip } from "@/components/sections/technology-strip";
import { WhyHadesBoard } from "@/components/sections/why-hadesboard";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <CapabilityStrip />
        <SelectedProjects />
        <Services />
        <Philosophy />
        <Process />
        <FeaturedCaseStudy />
        <WhyHadesBoard />
        <TechnologyStrip />
        <Insights />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
