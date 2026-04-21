// Home page — SSG (static site generation, default in Next.js App Router)
// Content is fully static and built at deploy time.
import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { ProjectsPreview } from "@/components/home/ProjectsPreview";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { AboutSnippet } from "@/components/home/AboutSnippet";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";
import { getAllServices } from "@/lib/data/services";
import { getAllProcessSteps } from "@/lib/data/process";
import { getAllFAQs } from "@/lib/data/faqs";
import { getAllWhyUsItems } from "@/lib/data/whyus";
import { getAllTestimonials } from "@/lib/data/testimonials";

export const metadata: Metadata = createMetadata({
  title: "MMB — Premium Web Development & Digital Systems",
  description:
    "We design and develop premium websites, dashboards, and custom web solutions that help businesses grow with clarity, speed, and performance.",
  openGraph: {
    title: "MMB — Premium Web Development & Digital Systems",
    url: "/",
  },
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <ProjectsPreview />
      <ProcessSection />
      <WhyUsSection />
      <AboutSnippet />
      <FAQSection />
      <CTASection />
    </>
  );
}
