import Image from "next/image";

export default function Footer() {
  return (
    <div className="pt-20 pb-20">
      <hr className="h-[2px] border-0 bg-gradient-to-r from-black via-teal-300 to-black" />

      <div className="flex flex-col items-center pb-10">

        {/* Logo */}
        <div className="flex justify-center pt-20">
          <Image
            src="/Logo.svg"
            alt="Logo"
            width={400}
            height={400}
            priority
          />
        </div>

        {/* Navigation */}
        <div className="pt-10 flex flex-wrap justify-center gap-10">
          <span className="text-gray-200 font-bold text-2xl hover:text-teal-300 cursor-pointer">
            Home
          </span>

          <span className="text-gray-200 font-bold text-2xl hover:text-teal-300 cursor-pointer">
            Features
          </span>

          <span className="text-gray-200 font-bold text-2xl hover:text-teal-300 cursor-pointer">
            Service
          </span>

          <span className="text-gray-200 font-bold text-2xl hover:text-teal-300 cursor-pointer">
            About
          </span>
        </div>

        {/* Social Icons */}
        <div className="pt-15 flex justify-center gap-10">
          <img
            src="/github.svg"
            alt="github"
            className="w-10 h-10 bg-white rounded-full transition-transform duration-300 hover:scale-105 cursor-pointer"
          />

          <img
            src="/Linkedin.svg"
            alt="Linkedin"
            className="w-10 h-10 bg-white rounded-full transition-transform duration-300 hover:scale-105 cursor-pointer"
          />

          <img
            src="/twitter.svg"
            alt="twitter"
            className="w-10 h-10 bg-white rounded-full transition-transform duration-300 hover:scale-105 cursor-pointer"
          />
        </div>

      </div>

      <hr className="h-[2px] border-0 bg-gradient-to-r from-black via-teal-300 to-black" />

      {/* Copyright */}
      <div className="flex justify-center gap-2 pt-6 text-center">
        <span className="text-gray-400">© 2026</span>

        <span className="text-teal-300 font-semibold">
          AWASTHI.
        </span>

        <span className="text-gray-400">
          All rights reserved.
        </span>
      </div>
    </div>
  );
}