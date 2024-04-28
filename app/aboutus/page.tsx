import React from "react";
import Card from "@/components/card";

const features = [
  {
    title: "Mehul Pathak",
    description: "E22CSEU1253",
    large: false,
    link: "https://github.com/m3hu1",
  },
  {
    title: "Aryan Niranjan",
    description: "E22CSEU1250",
    link: "https://github.com/Aryannir",
  },
  {
    title: "Varun Pathak",
    description: "E22CSEU1257",
    link: "https://github.com/varunpathak1257",
  }
];

const aboutus = () => {
  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col -mt-40">
      <section className="nav-padding w-full">
        <div className="flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-cover bg-center text-center">
          <h1 className="smXheading1 heading2 mb-6 text-center text-gradient_blue-purple">
            About Qaution
          </h1>
          <p className="text-white-800">
            Welcome to Qaution, your go-to solution for comprehensive and
            efficient cybersecurity services. Qaution is a centralized
            cybersecurity tool created to make online security easier and more
            effective for both businesses and individuals. It offers vital
            services like redirect tracking, IP reputation checking, SSL
            verification, and others, etc.
          </p>
        </div>
        <div className="text-center">
          <h1 className="smXheading1 heading2 mb-6 text-center text-gradient_blue-purple">
            Our Mission
          </h1>
          <p className="text-white-800">
            At Qaution, we're on a mission to simplify and strengthen online
            security for businesses and individuals alike. Our centralized
            cybersecurity tool offers essential services like redirect tracking,
            IP reputation checking, and SSL verification, empowering users to
            navigate the digital landscape with confidence.
          </p>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div>
          <h1 className="smXheading1 heading2 mb-6 text-gradient_blue-purple text-center">
            What does it do?
          </h1>
          <h2 className="smXheading1 heading4 text-white-800 !font-bold text-center">
            Our website, Qaution, is a centralized cybersecurity platform that:
          </h2>
          <br></br>
          <p className="text-white-800 text-center">
            •Offers vital services like redirect tracking, IP reputation
            checking, SSL verification, and others.<br></br>
            •Has a user-friendly interface and a full range of tools.
          </p>
          <br></br>
          <br></br>
          <h2 className="smXheading1 heading4 text-white-800 !font-bold text-center">
            Our future plans include:
          </h2>
          <br></br>
          <p className="text-white-800 text-center">
            •Add more services to the platform.<br></br>
            •Add a cybersecurity newsletter that provides latest news in the
            cybersecurity field.
          </p>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="hidden sm:block">
          <div>
            <h1 className="smXheading1 heading2 mb-6 text-center text-gradient_blue-purple">
              Our Team
            </h1>
          </div>
          <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-20 px-5 md:grid-cols-3 xl:px-0">
            {features.map(({ title, description, large, link }) => (
              <Card
                key={title}
                title={title}
                description={description}
                large={large}
                link={link as string}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default aboutus;
