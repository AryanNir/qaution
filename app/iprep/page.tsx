"use client";
import React, { useState } from "react";
import IpRepData from "@/components/IpRepData";
import SearchForm2 from "@/components/SearchForm2";
import Footer from "@/components/Footer";

export default function Home() {
  const [ipRepData, setIpRepData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearchFormSubmit = async (ip: string) => {
    if (!ip.trim()) {
      setError("Please enter an IP address.");
      setIpRepData(null);
      return;
    }
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://redirect-tracker-api.onrender.com/check-ip-reputation?ip=${ip}`,
        {
          headers: {
            "Key": "44537bf504d736ece21c79b60c23a8bb2254d1508e255501d29139194b0fd4774074afed10c5192e",
            "Accept": "application/json"
          }
        }
      );
      const data = await response.json();
      // console.log(data);
      if (data && data.data && data.data.ipAddress) {
        setIpRepData(data);
        setError("");
      } else {
        setError("Please enter a valid IP address.");
        setIpRepData(null);
      }
      // setIpRepData(data);
      // setError("");
    } catch (error) {
      console.error(error);
      setIpRepData(null);
      setError("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col flex-grow">
        <section className="nav-padding w-full">
          <div className="glow-effect flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center">
            <h1 className="smXheading1 heading2 mb-6 text-center text-white">
              <span className="hidden sm:inline">Qaution - IP Reputation Checker</span>
            </h1>
            <h1 className="smXheading1 heading2 mb-6 text-center text-white">
              <span className="sm:hidden">Qaution</span>
            </h1>
          </div>
          <SearchForm2 onSubmit={handleSearchFormSubmit} />
          {error && <p className="text-red-500 text-center">{error}</p>}
          <IpRepData ipRepData={ipRepData} isLoading={isLoading}/>
        </section>
      </main>
      <Footer />
    </div>
  );
}
