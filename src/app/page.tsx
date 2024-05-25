"use client";
import Image from "next/image";
import Component from "./ui/herosection";
import PricingSection from "./ui/pricing";
import { AccordionDemo } from "@/app/ui/faq";
import HeroSection from "./ui/herosection";
import PricingSections from "@/app/ui/pricing";

import TextTovideo from "./ui/text_to_video";

export default function Home() {
  return (
    <>
      <TextTovideo />
      <HeroSection />
      <PricingSections />
    </>
  );
}
