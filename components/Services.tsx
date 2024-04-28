import Link from "next/link";

const Services = () => {
  return (
    <footer className="text-white-800 body-text w-full border-t border-black-400 bg-black-100 px-20 py-12">
      <div className="flex justify-between underline">
        <Link href="/redirect" className="block ">
          Redirect Tracker
        </Link>
        <Link href="/iprep" className="block">
          IP Reputation Checker
        </Link>
        <Link href="/sslcheck" className="block">
          SSL Certificate Checker
        </Link>
        <Link href="/norms" className="block">
          CyberSecurity Norms
        </Link>
      </div>
    </footer>
  );
};

export default Services;
