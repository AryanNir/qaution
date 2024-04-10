import Link from "next/link";


const Services = () => {
  return (
    <footer className="text-white-800 flex-between body-text w-full gap-y-10 border-t border-black-400 bg-black-100 px-20 py-12 max-md:flex-col glow-effect" style={{ position: 'relative', zIndex: 1 }}>
      <div className="flex gap-x-9">
        <Link href="/redirect" className="hidden sm:inline">
          Redirect Tracker
        </Link>
        <Link href="/ip" className="hidden sm:inline">
            IP Rep
        </Link>
        <Link href="/privacypolicy" className="hidden sm:inline">
          Latest CyberSec News
        </Link>
        <Link href="/privacypolicy" className="hidden sm:inline">
          Malicious File Checker
        </Link>
        <Link href="/privacypolicy" className="hidden sm:inline">
          SSL Certificate
        </Link><Link href="/privacypolicy" className="hidden sm:inline">
          Python Package Checker
        </Link>
      </div>
    </footer>
  );
};

export default Services;