"use client"
import React, { useState } from "react";
import RedirectTracker from "@/components/RedirectTracker";
import SearchForm from "@/components/SearchForm";
import Footer from "@/components/Footer";

const Home = () => {
  const [redirectData, setRedirectData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearchFormSubmit = async (url: string) => {
    if (!url.trim()) {
      setError("Please enter an URL.");
      setRedirectData(null);
      return;
    }
    setIsLoading(true);
    try {
      const normalizedUrl = url.startsWith("http") ? url : `https://${url}`;
      const response = await fetch(
        `https://redirect-tracker-api.onrender.com/check-redirects?url=${normalizedUrl}`
      );
      const data = await response.json();
      setRedirectData(data);
      setError("");
    } catch (error) {
      console.error(error);
      setRedirectData(null);
      setError("Please enter a valid URL.");
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
              <span className="hidden sm:inline">
                Qaution - Redirect Tracker
              </span>
            </h1>
            <h1 className="smXheading1 heading2 mb-6 text-center text-white">
              <span className="sm:hidden">Qaution</span>
            </h1>
          </div>
          <SearchForm onSubmit={handleSearchFormSubmit} />
          {error && <p className="text-red-500 text-center">{error}</p>}
          <RedirectTracker redirectData={redirectData} isLoading={isLoading} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
