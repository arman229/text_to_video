'use client '


import React, { useState } from 'react';
 
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { DrawerTrigger, DrawerContent, Drawer } from "@/components/ui/drawer"

function DrawerComponents() {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen(isOpen);
  };

  return (

    <div className="relative">
    <Button onClick={handleToggleDrawer} className="fixed top-4 left-4 z-50">
      {open ? "" : "☰"}
    </Button>
    <Drawer open={isOpen} onOpenChange={setIsOpen} direction='left' modal={false}>
     
      <DrawerContent side="left" >
        <div className="flex h-[60px] items-center border-b">
          <h2 className="text-lg font-semibold">Video Creator</h2>
          <DrawerTrigger asChild>
        <Button onClick={handleToggle} className="rounded-full  first-line:" size="icon" variant="outline">
          <MenuIcon isOpen={isOpen} className="h-6 w-6" ></MenuIcon>
    
        </Button>
      </DrawerTrigger>
        </div>
        <div className="flex-1 overflow-auto p-4">
          <div className="grid gap-4">
            <div>
              <h3 className="mb-2 text-sm font-medium">Dimensions</h3>
              <div className="grid grid-cols-2 gap-2">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1920x1080">1920x1080</SelectItem>
                    <SelectItem value="1280x720">1280x720</SelectItem>
                    <SelectItem value="640x360">640x360</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="landscape">Landscape</SelectItem>
                    <SelectItem value="portrait">Portrait</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-medium">Background Music</h3>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="upbeat">Upbeat</SelectItem>
                  <SelectItem value="relaxing">Relaxing</SelectItem>
                  <SelectItem value="none">None</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-medium">Voice</h3>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="none">None</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-medium">Language</h3>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-medium">Scene Type</h3>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="office">Office</SelectItem>
                  <SelectItem value="nature">Nature</SelectItem>
                  <SelectItem value="city">City</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
    </div>
  );
}


function MenuIcon({ isOpen }:any) {
  return isOpen ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" x2="6" y1="6" y2="18" />
      <line x1="6" x2="18" y1="6" y2="18" />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}


export default DrawerComponents;
























// /**
//  * v0 by Vercel.
//  * @see https://v0.dev/t/kMjQRn3S4zC
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
//  */
// import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
// import { Textarea } from "@/components/ui/textarea"
// import { Button } from "@/components/ui/button"

// export default function Component() {
//   return (
//     <div className="grid min-h-screen w-full lg:grid-cols-[300px_1fr]">
//       <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
//         <div className="flex h-full max-h-screen flex-col gap-2 p-4">
//           <div className="flex h-[60px] items-center border-b">
//             <h2 className="text-lg font-semibold">Video Creator</h2>
//           </div>
//           <div className="flex-1 overflow-auto">
//             <div className="grid gap-4">
//               <div>
//                 <h3 className="mb-2 text-sm font-medium">Dimensions</h3>
//                 <div className="grid grid-cols-2 gap-2">
//                   <Select>
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="1920x1080">1920x1080</SelectItem>
//                       <SelectItem value="1280x720">1280x720</SelectItem>
//                       <SelectItem value="640x360">640x360</SelectItem>
//                     </SelectContent>
//                   </Select>
//                   <Select>
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="landscape">Landscape</SelectItem>
//                       <SelectItem value="portrait">Portrait</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>
//               </div>
//               <div>
//                 <h3 className="mb-2 text-sm font-medium">Background Music</h3>
//                 <Select>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="upbeat">Upbeat</SelectItem>
//                     <SelectItem value="relaxing">Relaxing</SelectItem>
//                     <SelectItem value="none">None</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//               <div>
//                 <h3 className="mb-2 text-sm font-medium">Voice</h3>
//                 <Select>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="male">Male</SelectItem>
//                     <SelectItem value="female">Female</SelectItem>
//                     <SelectItem value="none">None</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//               <div>
//                 <h3 className="mb-2 text-sm font-medium">Language</h3>
//                 <Select>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="en">English</SelectItem>
//                     <SelectItem value="es">Spanish</SelectItem>
//                     <SelectItem value="fr">French</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//               <div>
//                 <h3 className="mb-2 text-sm font-medium">Scene Type</h3>
//                 <Select>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="office">Office</SelectItem>
//                     <SelectItem value="nature">Nature</SelectItem>
//                     <SelectItem value="city">City</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="flex flex-col">
//         <main className="flex-1 p-4 md:p-6">
//           <div className="mx-auto max-w-2xl">
//             <div className="mb-6">
//               <Textarea
//                 className="h-[300px] w-full resize-none rounded-lg border border-gray-300 p-4 text-sm dark:border-gray-700"
//                 placeholder="Write your video script here..."
//               />
//             </div>
//             <div className="flex justify-end gap-2">
//               <Button variant="outline">Preview</Button>
//               <Button>Create Video</Button>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   )
// }
// 'use client'
// import React, { useState } from 'react';
// import { Toggle } from "@/components/ui/toggle";
// import { Button } from "@/components/ui/button";
// import { FaCheck } from "react-icons/fa";
// const PricingToggle = () => {
//   const [isYearly, setIsYearly] = useState(false);

//   const handleToggle = () => {
//     setIsYearly(!isYearly);
//   };

//   return (
//     <div className="flex items-center justify-center my-8">


// <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
//         <div className="container px-4 md:px-6">
//           <div className="flex flex-col items-center justify-center space-y-4 text-center">
//             <div className="space-y-2">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
//                 Pricing
//               </h2>
//               <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
//                 Choose the plan that fits your needs.
//               </p>
//             </div>
//             <div className="flex items-center gap-4">
//               <span className="text-sm font-medium">Monthly</span>
//               <Toggle
//                 aria-label="Toggle monthly/yearly"
//                 className="w-14 h-7 rounded-full relative bg-primary dark:bg-gray-700 transition-colors duration-300 before:absolute before:top-1 before:left-1 before:h-5 before:w-5 before:rounded-full before:bg-white before:transition-transform before:duration-300 data-[state=checked]:bg-primary data-[state=checked]:before:translate-x-7"
//                 defaultChecked
//               >
//                 <span className="sr-only">Toggle monthly/yearly</span>
//               </Toggle>
//               <span className="text-sm font-medium">Yearly</span>
//             </div>
//           </div>
//           <div className="mx-auto grid gap-6 py-12 md:grid-cols-3 md:gap-8">
//             <div className="flex flex-col rounded-lg bg-white p-6 shadow-md dark:bg-gray-950">
//               <div className="space-y-4">
//                 <h3 className="text-2xl font-bold">Free</h3>
//                 <p className="text-gray-500 dark:text-gray-400">
//                   Get started with our free plan.
//                 </p>
//                 <div className="space-y-2">
//                   <div className="flex items-center gap-2">
//                     <FaCheck className="h-4 w-4 text-primary" />
//                     <span>10 mins/wk of AI generation</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <FaCheck className="h-4 w-4 text-primary" />
//                     <span>10 GB storage</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <FaCheck className="h-4 w-4 text-primary" />
//                     <span>4 exports/wk</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <FaCheck className="h-4 w-4 text-primary" />
//                     <span>In-video logo</span>
//                   </div>
//                 </div>
//               </div>
//               <div className="mt-auto">
//                 <Button className="w-full" variant="outline">
//                   Get Started
//                 </Button>
//               </div>
//             </div>
//             <div className="flex flex-col rounded-lg bg-white p-6 shadow-md dark:bg-gray-950">
//               <div className="space-y-4">
//                 <h3 className="text-2xl font-bold">Plus</h3>
//                 <p className="text-gray-500 dark:text-gray-400">
//                   Unlock more features with our Plus plan.
//                 </p>
//                 <div className="space-y-2">
//                   <div className="flex items-center gap-2">
//                     <FaCheck className="h-4 w-4 text-primary" />
//                     <span>450 mins/mo of AI generation</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <FaCheck className="h-4 w-4 text-primary" />
//                     <span>720/mo iStock</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <FaCheck className="h-4 w-4 text-primary" />
//                     <span>900 GB storage</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <FaCheck className="h-4 w-4 text-primary" />
//                     <span>Unlimited exports</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <FaCheck className="h-4 w-4 text-primary" />
//                     <span>18 voice clones for up to 9 users</span>
//                   </div>
//                 </div>
//               </div>
//               <div className="mt-auto">
//                 <Button className="w-full" variant="outline">
//                   Upgrade to Plus -
//                   <span className="pricing-amount">$225/mo</span>*
//                   {"\n                      "}
//                 </Button>
//               </div>
//             </div>
//             <div className="flex flex-col rounded-lg bg-white p-6 shadow-md dark:bg-gray-950">
//               <div className="space-y-4">
//                 <h3 className="text-2xl font-bold">Max</h3>
//                 <p className="text-gray-500 dark:text-gray-400">
//                   Get the most out of our platform with the Max plan.
//                 </p>
//                 <div className="space-y-2">
//                   <div className="flex items-center gap-2">
//                     <FaCheck className="h-4 w-4 text-primary" />
//                     <span>200 mins/mo of AI generation</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <FaCheck className="h-4 w-4 text-primary" />
//                     <span>320/mo iStock</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <FaCheck className="h-4 w-4 text-primary" />
//                     <span>400 GB storage</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <FaCheck className="h-4 w-4 text-primary" />
//                     <span>Unlimited exports</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <FaCheck className="h-4 w-4 text-primary" />
//                     <span>5 voice clones for up to 1 user</span>
//                   </div>
//                 </div>
//               </div>
//               <div className="mt-auto">
//                 <Button className="w-full" variant="outline">
//                   Upgrade to Max -
//                   <span className="pricing-amount">$225/mo</span>*
//                   {"\n                      "}
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
//         <div className="container px-4 mx-auto">
//           <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-50">
//             Your AI Co-pilot for Video Creation
//           </h2>
//           <p className="mt-2 text-center text-gray-600 dark:text-gray-400">
//             Monthly <span className="font-semibold">Yearly · 20% off</span>
//           </p>
//           <div className="grid gap-6 mt-12 lg:grid-cols-3 lg:gap-12">
//             {/* Free Plan */}
//             <div className="p-6 bg-white border rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
//               <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50">
//                 Free
//               </h3>
//               <p className="mt-2 text-gray-600 dark:text-gray-400">
//                 For anyone who wishes to try AI video creation
//               </p>
//               <p className="mt-4 text-2xl font-bold text-gray-900 dark:text-gray-50">
//                 $0/mo*
//               </p>
//               <p className="text-gray-500 dark:text-gray-400">Try for free</p>
//               <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-400">
//                 <li>10 mins/wk of AI generation</li>
//                 <li>10 GB storage</li>
//                 <li>4 exports/wk with invideo logo</li>
//                 <li>2.5M+ standard media</li>
//                 <li>Voice clones</li>
//               </ul>
//             </div>

//             {/* Plus Plan */}
//             <div className="p-6 bg-white border rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
//               <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50">
//                 Plus
//               </h3>
//               <p className="mt-2 text-gray-600 dark:text-gray-400">
//                 For creators starting their journey
//               </p>
//               <p className="mt-4 text-2xl font-bold text-gray-900 dark:text-gray-50">
//                 $40/mo*
//               </p>
//               <p className="text-gray-500 dark:text-gray-400">
//                 *Billed $480 yearly
//               </p>
//               <button className="mt-4 inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-md dark:bg-gray-50 dark:text-gray-900 hover:bg-gray-900/90 dark:hover:bg-gray-50/90">
//                 Get Plus
//               </button>
//               <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-400">
//                 <li>100 mins/mo of AI generation</li>
//                 <li>160/mo iStock</li>
//                 <li>200 GB storage</li>
//                 <li>Unlimited exports</li>
//                 <li>4 voice clones</li>
//                 <li>Upto 2 users</li>
//               </ul>
//             </div>

//             {/* Max Plan */}
//             <div className="p-6 bg-white border rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
//               <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50">
//                 Max
//               </h3>
//               <p className="mt-2 text-gray-600 dark:text-gray-400">
//                 For growing & established creators
//               </p>
//               <p className="mt-4 text-2xl font-bold text-gray-900 dark:text-gray-50">
//                 $48/mo*
//               </p>
//               <p className="text-gray-500 dark:text-gray-400">
//                 *Billed $576 yearly
//               </p>
//               <button className="mt-4 inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-md dark:bg-gray-50 dark:text-gray-900 hover:bg-gray-900/90 dark:hover:bg-gray-50/90">
//                 Get Max
//               </button>
//               <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-400">
//                 <li>200 mins/mo of AI generation</li>
//                 <li>320/mo iStock</li>
//                 <li>400 GB storage</li>
//                 <li>Unlimited exports</li>
//                 <li>5 voice clones</li>
//                 <li>Upto 1 user</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>
     
//     </div>
//   );
// };

// export default PricingToggle;

// function MenuIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <line x1="4" x2="20" y1="12" y2="12" />
//       <line x1="4" x2="20" y1="6" y2="6" />
//       <line x1="4" x2="20" y1="18" y2="18" />
//     </svg>
//   )
// }