"use client";
import React, { useState } from "react";
import IpRepData from "@/components/IpRepData";
import SearchForm from "@/components/SearchForm";
import Footer from "@/components/Footer";

export default function Home() {
  const [ipRepData, setIpRepData] = useState(null);

  const handleSearchFormSubmit = async (ip: string) => {
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
      console.log(data);
      setIpRepData(data);
    } catch (error) {
      console.error(error);
      setIpRepData(null);
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
          <SearchForm onSubmit={handleSearchFormSubmit} />
          <IpRepData ipRepData={ipRepData} />
        </section>
      </main>
      <Footer />
    </div>
  );
}
