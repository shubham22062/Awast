import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 pt-24">

      {/* Heading */}
      <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent max-w-4xl leading-tight">
        Empower Your Future With Intelligent Automation
      </h1>

      {/* Paragraph */}
      <p className="text-gray-400 pt-6 text-xl max-w-2xl">
        Revolutionize your daily tasks and streamline communication with AI-driven automation built for efficiency
      </p>

      {/* Buttons */}
      <div className="flex gap-6 mt-8 flex-wrap justify-center">
        <button className="rounded-md px-8 py-3 bg-gradient-to-r from-white via-gray-200 to-white font-bold transition-transform duration-300 hover:scale-105">
          Try Now
        </button>

        <button className="rounded-md px-8 py-3 bg-gradient-to-r from-teal-300 via-teal-400 to-teal-300 font-bold transition-transform duration-300 hover:scale-105 text-white">
          Learn More
        </button>
      </div>

      {/* Image */}
      <div className="mt-16 w-full max-w-5xl">
        <Image
          src="/chatUI.svg"
          alt="chatUI"
          width={1200}
          height={700}
          priority
          className="w-full h-auto object-contain border-2 border-teal-200 rounded-md"
        />
      </div>

    </div>
  );
}