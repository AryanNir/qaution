"use client"
import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import Footer from "@/components/Footer";

const SafeSurfing = () => {
  const [animationData, setAnimationData] = useState(null);
  const [isAnimationOnLeft, setIsAnimationOnLeft] = useState(true);

  useEffect(() => {
    const fetchAnimationData = async () => {
      try {
        const response = await fetch(
          "https://lottie.host/5a16ce28-b373-4fd0-a371-64701b446c93/Cu7BUJWwG8.json"
        );
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        console.error("Error fetching animation data:", error);
      }
    };

    fetchAnimationData();
  }, []);

  const toggleLayout = () => {
    setIsAnimationOnLeft(prevState => !prevState);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="paddings mx-auto w-full max-w-screen-2xl flex-grow">
        <section className="w-full">
          <div className="flex flex-wrap items-center justify-center md:justify-between">
            <div className={`w-full md:w-1/2 order-${isAnimationOnLeft ? 1 : 2}`}>
              {animationData && (
                <div className="lottie-container" style={{ backgroundColor: "transparent" }}>
                  <Lottie
                    options={{
                      loop: true,
                      autoplay: true,
                      animationData: animationData,
                      rendererSettings: {
                        preserveAspectRatio: "xMidYMid slice",
                      },
                    }}
                    height={300}
                    width={300}
                  />
                </div>
              )}
            </div>
            <div className={`text-white w-full md:w-1/2 px-6 md:px-0 order-${isAnimationOnLeft ? 2 : 1}`}>
              <h2 className="text-2xl text-white font-semibold mb-4">For General Users:</h2>
              <ul className="list-disc ml-8 mb-6">
                <li>Keep your software, including your browser, up to date.</li>
                <li>Use strong, unique passwords for each of your accounts.</li>
                <li>Be cautious when clicking on links or downloading files from unknown sources.</li>
                <li>Enable two-factor authentication whenever possible.</li>
                <li>Regularly back up your important data.</li>
                <li>Use a reputable antivirus program and keep it updated.</li>
                <li>Be wary of public Wi-Fi networks, as they can be insecure.</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Temporary Text and GIF for Reference */}
        <section className="w-full mt-12">
          <div className="flex flex-wrap items-center justify-center md:justify-between">
            <div className={`text-white w-full md:w-1/2 px-6 md:px-0 order-${isAnimationOnLeft ? 2 : 1}`}>
              <h2 className="text-2xl text-white font-semibold mb-4">Temporary Text:</h2>
              <p className="text-white mb-6">
                This is a temporary text section for reference purposes. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at feugiat odio. Vivamus ultrices, dui vitae ultrices dapibus, velit mi mattis turpis, vel luctus metus libero sit amet dolor.
              </p>
            </div>
            <div className={`w-full md:w-1/2 order-${isAnimationOnLeft ? 1 : 2}`}>
              {animationData && (
                <div className="lottie-container" style={{ backgroundColor: "transparent" }}>
                  <Lottie
                    options={{
                      loop: true,
                      autoplay: true,
                      animationData: animationData,
                      rendererSettings: {
                        preserveAspectRatio: "xMidYMid slice",
                      },
                    }}
                    height={300}
                    width={300}
                  />
                </div>
              )}
            </div>
          </div>
        </section>
        {/* End of Temporary Text and GIF for Reference */}

      </main>
      <Footer />
    </div>
  );
};

export default SafeSurfing;
