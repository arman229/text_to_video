import Image from "next/image";
import Component from "./ui/herosection";
import PricingSection from "./ui/pricing";
import {AccordionDemo} from "@/app/ui/faq";
 

export default function Home() {
  return (
    <>
   
    <Component/>
    <PricingSection
/>   

<AccordionDemo/>
{/* <PricingSections/> */}
</>
  );
}
