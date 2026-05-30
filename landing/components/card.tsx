export default function Card() {
  return (
    <div className="flex justify-center items-center mt-20 px-4">
      <div className="border-2 border-teal-300 w-full max-w-[800px] min-h-[600px] rounded-xl p-8">
        
        <div className="flex flex-wrap justify-center gap-3 pt-15">
          <span className="text-4xl md:text-6xl font-bold text-white">
            Ready to
          </span>

          <span className="text-4xl md:text-6xl font-bold text-teal-300">
            Transform
          </span>
        </div>

        <span className="text-4xl md:text-6xl font-bold text-white block text-center mt-2">
          Your Workflow?
        </span>

        <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto text-center mt-6">
          Join thousands of users who are already experiencing the future of AI
          assistance.
        </p>

        <div className="flex justify-center mt-9">
            <button className="flex justify-center gap-2 border rounded-2xl bg-teal-300 transition-transform duration-300 hover:scale-105 p-4 text-white font-bold text-xl border-teal-400 items-center w-[220px]">
                Get started now
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
            </button>
            </div>

        <div className="flex gap-8 pt-15 justify-center">
            <div className="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 bg-teal-300 border-teal-400 rounded-full">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span className="text-gray-400">No credit card required</span>
            </div>

            <div className="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 bg-teal-300 border-teal-400 rounded-full">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span className="text-gray-400">Free trail available</span>
            </div>

            <div className="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 bg-teal-300 border-teal-400 rounded-full">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span className="text-gray-400">Cancel anytime</span>
            </div>
        </div>

      </div>
    </div>
  );
}