export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center h-[600px] text-center px-4">
      
      <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent max-w-4xl">
        Empower Your Future With Intelligent Automation
      </h1>
      <span className="text-gray-400 py-6 text-xl max-w-xl">Revolutionize your daily tasks and streamline communication with AI-driven automation built for effiency</span>

      <div className="flex gap-8" >
        <button className="rounded-md px-8 py-3 bg-gradient-to-r from-white via-gray-200 to-white font-bold transition-transform duration-300 hover:scale-105">Try Now</button>
        <button className="rounded-md px-8 py-3 bg-gradient-to-r from-teal-300 via-teal-400 to-teal-300 font-bold transition-transform duration-300 hover:scale-105 text-white">Learn More</button>
      </div>
    </div>
    
  );
}