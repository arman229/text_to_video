"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { subscriptionTiers,subscriptiontypes } from "@/app/utils/pricing";
export default function PricingSection(): JSX.Element {
  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = () => {
    setIsYearly(!isYearly);
  };

  return (
    <>
      <section className="bg-gray-100  ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900  ">
              Pricing Plans Designed for Your Business
            </h2>
            <p className="mb-5 font-light text-gray-500 sm:text-xl  ">
              Our pricing is designed to fit the needs of businesses like yours.
              Choose from flexible options that provide value and efficiency for
              startups, small businesses, and enterprises alike.
            </p>
          </div>
          <div className="flex items-center justify-center my-8">
            <span
              className={`mr-2 text-lg font-semibold ${
                !isYearly ? "text-gray-900" : "text-gray-400"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={handleToggle}
              className="relative inline-flex items-center h-6 w-11 rounded-full transition-colors duration-300 focus:outline-none bg-primary-600"
            >
              <span
                className={`transform transition-transform duration-300 ease-in-out inline-block w-5 h-5 rounded-full bg-white ${
                  isYearly ? "translate-x-5" : "translate-x-1"
                }`}
              />
            </button>
            <span
              className={`ml-2 text-lg font-semibold ${
                isYearly ? "text-gray-900" : "text-gray-400"
              }`}
            >
              Yearly <span className="font-bold">· 20% off</span>
            </span>
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            {subscriptionTiers.map((tier:subscriptiontypes ) => (
              <div
                key={tier.id}
                className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow "
              >
                <h3 className="mb-4 text-2xl font-semibold">{tier.name}</h3>
                <p className="font-light text-gray-500 sm:text-lg  ">
                  {tier.description}
                </p>
                <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-5xl font-extrabold">
                    {isYearly
                      ? `$${tier.yearlyPrice}`
                      : `$${tier.monthlyPrice}`}
                  </span>
                  <span className="text-gray-500  ">
                    {isYearly ? "/Yearly" : "/Monthly"}
                  </span>
                </div>
                <ul role="list" className="mb-8 space-y-4 text-left">
                  {tier.features.map((feature:string, index:number) => (
                    <li key={index} className="flex items-center space-x-3">
                      <FaCheck className="flex-shrink-0 w-5 h-5 text-green-500  " />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="#"
                  className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
                >
                  Get started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
