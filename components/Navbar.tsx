'use client';
import React, { useState } from "react";
import Link from "next/link";
import Sidebar from "./Sidebar";
import { AlignLeft, Home, ExternalLink, Link2, ShieldCheck } from "lucide-react";
import Lottie from "react-lottie";
import cubeAnimation from "../cube.json";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div>
      <nav className="flex-center sticky top-0 z-50 w-full border-b-2 border-black-200 bg-black-100 py-7 text-white">
        <div className="flex-center px-10 cursor-pointer" onClick={() => setShowSidebar(!showSidebar)}>
          {showSidebar ? <AlignLeft /> : <AlignLeft />}
        </div>
        <div className="flex-center mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16">
          <div style={{ width: "50px", marginRight: "10px" }}>
            <Lottie options={{ loop: true, autoplay: true, animationData: cubeAnimation }} />
          </div>
          <Link href="/">
            <div className="text-gradient_purple-blue !font-bold text-3xl glow-effect-animate">
              Qaution
            </div>
          </Link>
        </div>
        <div className="flex-center gap-x-3 hidden md:flex md:gap-x-10 px-10">
          <ul>
            <li className="text-xl text-gradient_blue-purple !font-bold glow-effect style={{ whiteSpace: 'nowrap' }}">
              <Link href="/aboutus">About Us</Link>
            </li>
          </ul>
        </div>
      </nav>
      {showSidebar && (
        <Sidebar>
          <ul className="flex gap-x-3 hidden md:flex md:gap-x-10">
            {/* <img src="/favicon.ico"></img> */}
            <Home color="#fdfcfc" />
            <li className="text-xl text-white-800 glow-effect">
              <Link href="/">Home</Link>
            </li>
          </ul>
          <br></br>
          <ul className="flex-center gap-x-3 hidden md:flex md:gap-x-10">
            <ExternalLink size={36} color="#fdfcfc" />
            <li className="text-xl text-white-800 glow-effect">
              <Link href="/redirect">Redirect Tracker</Link>
            </li>
          </ul>
          <br></br>
          <ul className="flex-center gap-x-3 hidden md:flex md:gap-x-10">
            <Link2 size={50} color="#fdfcfc" />
            <li className="text-xl text-white-800 glow-effect">
              <Link href="/iprep">IP Reputation Checker</Link>
            </li>
          </ul>
          <br></br>
          <ul className="flex-center gap-x-3 hidden md:flex md:gap-x-10">
            <ShieldCheck size={28} color="#ffffff" />
            <li className="text-xl text-white-800 glow-effect">
              <Link href="/sslcheck">SSL Checker</Link>
            </li>
          </ul>
        </Sidebar>
      )}
    </div>
  );
};

export default Navbar;
