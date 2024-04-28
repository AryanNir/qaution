"use client"
import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import Footer from "@/components/Footer";

const SafeSurfing = () => {
  const [animationData1, setAnimationData1] = useState(null);
  const [animationData2, setAnimationData2] = useState(null);
  const [animationData3, setAnimationData3] = useState(null);
  const [animationData4, setAnimationData4] = useState(null);
  const [isAnimationOnLeft, setIsAnimationOnLeft] = useState(true);

  useEffect(() => {
    const fetchAnimationData1 = async () => {
      try {
        const response = await fetch(
          "https://lottie.host/b05dc957-cf18-4d09-a573-0ceb914ebacc/NeRXb8I0HJ.json"
        );
        const data = await response.json();
        setAnimationData1(data);
      } catch (error) {
        console.error("Error fetching animation data:", error);
      }
    };

    const fetchAnimationData2 = async () => {
      try {
        const response = await fetch(
          "https://lottie.host/2ebbdb3b-117d-4f6d-be3f-44ffae1a5238/dPy8AqyrKf.json"
        );
        const data = await response.json();
        setAnimationData2(data);
      } catch (error) {
        console.error("Error fetching animation data:", error);
      }
    };
    const fetchAnimationData3 = async () => {
      try {
        const response = await fetch(
          "https://lottie.host/0b03ecb1-9329-4643-bf4b-60b3ab2c6f52/Z1VJ7EybIz.json"
        );
        const data = await response.json();
        setAnimationData3(data);
      } catch (error) {
        console.error("Error fetching animation data:", error);
      }
    };
    const fetchAnimationData4 = async () => {
      try {
        const response = await fetch(
          "https://lottie.host/0f45ae54-9723-4f3a-9242-094b2fef193b/8DMie1TTfn.json"
        );
        const data = await response.json();
        setAnimationData4(data);
      } catch (error) {
        console.error("Error fetching animation data:", error);
      }
    };
    fetchAnimationData1();
    fetchAnimationData2();
    fetchAnimationData3();
    fetchAnimationData4();
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
              {animationData1 && (
                <div className="lottie-container" style={{ backgroundColor: "transparent" }}>
                  <Lottie
                    options={{
                      loop: true,
                      autoplay: true,
                      animationData: animationData1,
                      rendererSettings: {
                        preserveAspectRatio: "xMidYMid slice",
                      },
                    }}
                    height={350}
                    width={350}
                  />
                </div>
              )}
            </div>
            <div className={`text-white w-full md:w-1/2 px-6 md:px-0 order-${isAnimationOnLeft ? 2 : 1}`}>
              <h2 className="text-2xl text-white font-semibold mb-4">For General Users:</h2>
              <ul className="list-disc ml-8 mb-6">
                <li>Make sure to use strong and complex passwords for your accounts. Try not to use personal information in the password.</li>
                <li>Always enable two-factor authentication for each and every account possible.</li>
                <li>Update your software, applications on a regular basis to fix and prevent exploits.</li>
                <li>Be careful of unrecognised emails and messages which ask for your personal information.</li>
                <li>Always check for https and a lock symbol in the address bar while on a website.</li>
                <li>Make sure to be careful while using open and public Wi-Fi networks. Limit the amount of personal information you share while using these networks.</li>
                <li>Only download files from recognised and verified websites.</li>
                <li>Always report any suspicious emails, messages, or other activites.</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Second Section with Different GIF */}
        <section className="w-full mt-12">
          <div className="flex flex-wrap items-center justify-center md:justify-between">
            <div className={`text-white w-full md:w-1/2 px-6 md:px-0 order-${isAnimationOnLeft ? 1 : 2}`}>
              <h2 className="text-2xl text-white font-semibold mb-4">For Developers:</h2>
              <ul className="list-disc ml-8 mb-6">
                <li>API keys are sensitive information and should be avoided hardcoding them directly into the codebase or sharing them publicly.</li>
                <li>Store API keys as environment variables to mitigate risks of unauthorized access.</li>
                <li>Use security headers such as CSP, X-Frame-Options, and X-XSS-Protection to protect against common web vulnerabilities like XSS and clickjacking.</li>
                <li>Sanitize user inputs to prevent injection attacks such as SQL injection, cross-site scripting (XSS), and command injection.</li>
                <li>Always use HTTPS to encrypt data transmitted between the client and server. Obtain SSL/TLS certificates to enable secure communication.</li>
                <li>Regularly update dependencies to their latest secure versions to patch vulnerabilities.</li>
              </ul>
            </div>
            <div className={`w-full md:w-1/2 order-${isAnimationOnLeft ? 2 : 1}`}>
              {animationData2 && (
                <div className="lottie-container" style={{ backgroundColor: "transparent" }}>
                  <Lottie
                    options={{
                      loop: true,
                      autoplay: true,
                      animationData: animationData2,
                      rendererSettings: {
                        preserveAspectRatio: "xMidYMid slice",
                      },
                    }}
                    height={450}
                    width={450}
                  />
                </div>
              )}
            </div>
          </div>
        </section>
        {/* End of Second Section */}

        <section className="w-full mt-12">
          <div className="flex flex-wrap items-center justify-center md:justify-between">
            <div className={`w-full md:w-1/2 order-${isAnimationOnLeft ? 1 : 2}`}>
              {animationData1 && (
                <div className="lottie-container" style={{ backgroundColor: "transparent" }}>
                  <Lottie
                    options={{
                      loop: true,
                      autoplay: true,
                      animationData: animationData3,
                      rendererSettings: {
                        preserveAspectRatio: "xMidYMid slice",
                      },
                    }}
                    height={450}
                    width={450}
                  />
                </div>
              )}
            </div>
            <div className={`text-white w-full md:w-1/2 px-6 md:px-0 order-${isAnimationOnLeft ? 2 : 1}`}>
              <h2 className="text-2xl text-white font-semibold mb-4">Practices for Redirection:</h2>
              <ul className="list-disc ml-8 mb-6">
                <li>Verify links to block malicious sites, protecting against phishing and malware threats.</li>
                <li>Assess URL handling to minimize exploitation risks and strengthen defenses.</li>
                <li>Maintain data integrity by tracking redirection to prevent tampering.</li>
                <li>Monitor redirects for unauthorized access attempts, enhancing security.</li>
                <li>Stay vigilant for security incidents to respond swiftly to breaches or unauthorized redirects.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="w-full mt-12">
          <div className="flex flex-wrap items-center justify-center md:justify-between">
            <div className={`text-white w-full md:w-1/2 px-6 md:px-0 order-${isAnimationOnLeft ? 1 : 2}`}>
              <h2 className="text-2xl text-white font-semibold mb-4">Practices for validation:</h2>
              <ul className="list-disc ml-8 mb-6">
                <li>SSL cert validation encrypts data, ensuring secure communication between clients and servers.</li>
                <li>It verifies server identity, preventing impersonation and ensuring data integrity during transmission.</li>
                <li>SSL builds trust, protects against phishing, and aids compliance with industry regulations.</li>
                <li>SSL validation shields sensitive information and boosts website credibility, enhancing user trust and SEO ranking.</li>
                <li>It's essential for data security, regulatory compliance, and safeguarding against cyber threats.</li>
              </ul>
            </div>
            <div className={`w-full md:w-1/2 order-${isAnimationOnLeft ? 2 : 1}`}>
              {animationData1 && (
                <div className="lottie-container" style={{ backgroundColor: "transparent" }}>
                  <Lottie
                    options={{
                      loop: true,
                      autoplay: true,
                      animationData: animationData4,
                      rendererSettings: {
                        preserveAspectRatio: "xMidYMid slice",
                      },
                    }}
                    height={450}
                    width={450}
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SafeSurfing;
