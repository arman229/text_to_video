"use client";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { appname, Services, Support, ServiceTypes } from "@/app/utils/footer";
const Footer: React.FC = () => {
  const customstyle = {
    borderRadius: "10px",
    cursor: " pointer",
    padding: "10px 12px",
    backgroundColor: "#2563eb",
    color: "white",
  };
  return (
    <div>
      <footer className=" pt-8  bg-gray-100   px-4  ">
        <div className=" ">
          <div className="grid grid-cols-12 justify-between gap-y-8 ">
            <div className=" col-span-12  sm:col-span-5 lg:col-span-4 ">
              <div className="  flex   gap-4 flex-col justify-around h-full  ">
                <Link href={"/"}>
                  <Image
                    src={"/images/next.svg"}
                    width={10}
                    height={20}
                    className=" lg:h-30 md:h-24 lg:w-auto  h-16  w-32 h-full w-auto"
                    alt="not shows"
                  />
                </Link>
                <p
                  className={
                    "leading-7 text-lg my-4 [&:not(:first-child)]:mt-6"
                  }
                >
                  {appname} is the #1 AI Video Creation Platform. Our AI Video
                  Generator enables everyone to create professional videos
                  without mics, cameras, actors or studios
                </p>
                <div className={"flex gap-2 my-2"}>
                  <div style={customstyle}>
                    <FaTwitter />
                  </div>
                  <div style={customstyle}>
                    <FaFacebookF />
                  </div>
                  <div style={customstyle}>
                    <FaLinkedinIn />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-3  sm:col-span-7 lg:col-span-7  col-span-12 lg:col-start-7">
              <div>
                <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase ">
                  Services
                </h2>
                <ul className="text-gray-600 ">
                  {Services.map((ser: ServiceTypes, index: number) => (
                    <li key={index} className="mb-4">
                      <Link href={ser.href} className="hover:underline">
                        {ser.name}
                      </Link>
                    </li>
                  ))}

                  
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase  ">
                  Support
                </h2>
                <ul className="text-gray-600  ">
                {Support.map((sup: ServiceTypes, index: number) => (
                    <li key={index} className="mb-4">
                      <Link href={sup.href} className="hover:underline">
                        {sup.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white">
                  Contact Us
                </h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="mb-4">
                    <Link href="/#" className="hover:underline">
                      Whatsapp{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="  border-gray-400 sm:mx-auto  " />
          <div className={"flex  justify-between gap-3 flex-wrap p-3  "}>
            <p>Copyright © 2024 text to video</p>
            <p>
              Developed by <span className={"font-bold"}>{appname}</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
