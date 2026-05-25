import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 fixed top-0 w-full z-50">
      
      {/* Logo */}
    <Image
      src="/Logo.svg"
      alt="Logo"
      width={150}
      height={150}
      priority
      className="object-contain"
    />

      {/* Center Menu */}
      <div className="border border-white/10 rounded-full bg-black/70 backdrop-blur-md px-6 py-3 flex gap-6 items-center">
        <span className="text-white hover:underline cursor-pointer">
          Home
        </span>

        <span className="text-white hover:underline cursor-pointer">
          Pricing
        </span>

        <span className="text-white hover:underline cursor-pointer">
          Features
        </span>

        <span className="text-white hover:underline cursor-pointer">
          Contact
        </span>

        <span className="text-white hover:underline cursor-pointer">
          About
        </span>
      </div>

      {/* Right Side */}
      <div className="flex gap-4 items-center">
        <span className="cursor-pointer text-white hover:underline">
          Learn More
        </span>

        <button className="rounded-2xl p-3 bg-teal-400 text-white font-medium transition-transform duration-300 hover:scale-105">
          Get Started
        </button>
      </div>
    </nav>
  );
}