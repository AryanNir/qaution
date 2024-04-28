// SSLCheckerPage.tsx
"use client";
import React, { useState } from "react";
import SSLChecker from "@/components/SSLChecker";
import Footer from "@/components/Footer";

const SSLCheckerPage = () => {
  const [sslInfo, setSSLInfo] = useState(null);
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSSLCheck = async () => {
    if (!url.trim()) {
      setError("Please enter an URL.");
      setSSLInfo(null);
      return;
    }
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://redirect-tracker-api.onrender.com/check-ssl?url=${url}`
      );
      const data = await response.json();
      setSSLInfo(data);
      setError("");
    } catch (error) {
      console.error(error);
      setSSLInfo(null);
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
              Qaution - SSL Checker
            </h1>
          </div>
          <div className="flex flex-col items-center mt-10">
            <input
              type="text"
              className="rounded-lg border border-gray-400 px-4 py-2 w-80 mb-4"
              placeholder="Enter URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleSSLCheck}
            >
              Check SSL
            </button>
          </div>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <SSLChecker sslInfo={sslInfo} isLoading={isLoading} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SSLCheckerPage;
