import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Product from "@/components/Products";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";
import Solution from "@/components/Solutions";

export const metadata: Metadata = {
  title: "智慧能源物联网基础设施",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Product />
      <Features />
      {/* <Video /> */}
      <AboutSectionOne />
      <AboutSectionTwo />
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      {/* <Solution /> */}
      {/* <Brands /> */}
      {/* <Contact /> */}
    </>
  );
}
