import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-4">
      
      {/* Logo */}
      <Image
        src="/Logo.svg"
        alt="Logo"
        width={150}
        height={150}
        priority
        className="object-contain h-auto"
      />

      {/* Center Menu */}
      <div className="hidden md:flex border border-white/10 rounded-full bg-black/70 backdrop-blur-md px-6 py-3 gap-6 items-center">
        <span className="text-white cursor-pointer transition-all duration-300 hover:text-teal-300 ">
          Home
        </span>

        <span className="text-white cursor-pointer transition-all duration-300 hover:text-teal-300">
          Services
        </span>

        <span className="text-white cursor-pointer transition-all duration-300 hover:text-teal-300">
          Features
        </span>

        <span className="text-white cursor-pointer transition-all duration-300 hover:text-teal-300">
          Contact
        </span>

        <span className="text-white cursor-pointer transition-all duration-300 hover:text-teal-300">
          About
        </span>
      </div>

      {/* Right Side */}
      <div className="flex gap-4 items-center">
        <span className="hidden md:block cursor-pointer text-white transition-all duration-300 hover:text-teal-300">
          Learn More
        </span>

        <button className="rounded-2xl px-5 py-3 bg-teal-400 text-white font-medium transition-all duration-300 hover:scale-105 hover:bg-teal-500">
          Get Started
        </button>
      </div>
    </nav>
  );
}