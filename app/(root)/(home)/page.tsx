"use client";
import React, { useState } from "react";
import Lottie from "react-lottie";
import Footer from "@/components/Footer";
import homeAnimation from "./homepage.json";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-up paddings mx-auto w-full max-w-screen-2xl flex-col flex-grow">
        <section className="nav-padding w-full">
          <div
            className="glow-effect flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center "
            style={{ marginTop: "-150px" }}
          >
            <h1 className="smXheading1 heading2 mb-6 text-center text-white">
              <span className="hidden sm:inline">
                Qaution - Cybersecurity Services
              </span>
            </h1>
            <h1 className="smXheading1 heading2 mb-6 text-center text-white">
              <span className="sm:hidden">Qaution</span>
            </h1>
          </div>
          <div className="flex justify-center items-center mt-8">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <p className="text-white-800">
                Qaution is a centralized cybersecurity platform designed to
                provide a comprehensive set of cybersecurity services. The
                platform integrates various tools and resources, including
                redirect tracking, malicious file checking, IP reputation
                checking, SSL certificate validation, and detailed information
                on cybersecurity norms and regulations. Our goal is to empower
                users, both businesses and individuals, to enhance their
                cybersecurity posture, mitigate risks, and ensure compliance
                with industry standards.
              </p>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: homeAnimation,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                }}
                height={350}
                width={350}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
