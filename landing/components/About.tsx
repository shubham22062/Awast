export default function About(){
    return (
        <div className="justify-center text-center items-center pt-30">
            <span className="text-white text-7xl">Loved by</span>
            <br></br>
            <span className="text-teal-300 text-7xl">people everywhere</span>
            <p className="text-gray-400 text-xl pt-6">Join thousands of satisfied users who have transformed their workflow</p>

            <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 px-20">

                {/* Card 1 */}
                <div className="border border-teal-300 rounded-md w-full min-h-[200px] p-4 transition-transform duration-300 hover:scale-105 bg-transparent">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-11 text-white border border-teal-300 rounded-md p-2 transition-transform duration-300 hover:scale-105">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                    <span className="text-2xl text-gray-100 font-bold block pt-5">Easy to use</span>
                    <p className="text-gray-400 text-sm mt-1">It's as easy as using an Apple, but not as expensive as buying one.</p>
                </div>

                {/* Card 2 */}
                <div className="border border-teal-300 rounded-md w-full min-h-[200px] p-4 transition-transform duration-300 hover:scale-105 bg-transparent">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-11 text-white border border-teal-300 rounded-md p-2 transition-transform duration-300 hover:scale-105">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span className="text-2xl text-gray-100 font-bold block pt-5">100% uptime</span>
                    <p className="text-gray-400 text-sm mt-1">We can't be taken down by anyone</p>
                </div>

                {/* Card 3 */}
                <div className="border border-teal-300 rounded-md w-full min-h-[200px] p-4 transition-transform duration-300 hover:scale-105 bg-transparent">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-11 text-white border border-teal-300 rounded-md p-2 transition-transform duration-300 hover:scale-105">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                    </svg>
                    <span className="text-2xl text-gray-100 font-bold block pt-5">The Fastest</span>
                    <p className="text-gray-400 text-sm mt-1">We will connect you to your tutors in limited time</p>
                </div>

               

                {/* Card 5 */}
                <div className="border border-teal-300 rounded-md w-full min-h-[200px] p-4 transition-transform duration-300 hover:scale-105 bg-transparent">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-11 text-white border border-teal-300 rounded-md p-2 transition-transform duration-300 hover:scale-105">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                    </svg>
                    <span className="text-2xl text-gray-100 font-bold block pt-5">Money back</span>
                    <p className="text-gray-400 text-sm mt-1">If we can't serve you. You need not to pay.</p>
                </div>

                {/* Card 6 */}
                <div className="border border-teal-300 rounded-md w-full min-h-[200px] p-4 transition-transform duration-300 hover:scale-105 bg-transparent">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-11 text-white border border-teal-300 rounded-md p-2 transition-transform duration-300 hover:scale-105">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span className="text-2xl text-gray-100 font-bold block pt-5">Best Pricing</span>
                    <p className="text-gray-400 text-sm mt-1">Lowest learning prices. We don't overcharge.</p>
                </div>

                {/* Card 7 */}
                <div className="border border-teal-300 rounded-md w-full min-h-[200px] p-4 transition-transform duration-300 hover:scale-105 bg-transparent">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-11 text-white border border-teal-300 rounded-md p-2 transition-transform duration-300 hover:scale-105">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>
                    <span className="text-2xl text-gray-100 font-bold block pt-5">Enhanced Documentation</span>
                    <p className="text-gray-400 text-sm mt-1">Everything is documented for your ease of use.</p>
                </div>

               

            </div>

            <div className="pt-20 px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
                <div className="border-2 border-teal-300 rounded-xl w-[250px] h-[100px] text-center items-center justify-center py-3 px-2">
                        <span className="text-white font-bold text-4xl">10K+</span>
                        <span className="block text-gray-400">Active Users</span>
                </div>
                 <div className="border-2 border-teal-300 rounded-xl w-[250px] h-[100px] text-center items-center justify-center py-3 px-2">
                        <span className="text-white font-bold text-4xl">50K+</span>
                        <span className="block text-gray-400">Tasks Completed</span>
                </div>
                 <div className="border-2 border-teal-300 rounded-xl w-[250px] h-[100px] text-center items-center justify-center py-3 px-2">
                        <span className="text-white font-bold text-4xl">4.8/5</span>
                        <span className="block text-gray-400">User Rating</span>
                </div>
                 <div className="border-2 border-teal-300 rounded-xl w-[250px] h-[100px] text-center items-center justify-center py-3 px-2">
                        <span className="text-white font-bold text-4xl">24/7</span>
                        <span className="block text-gray-400">Support</span>
                </div>
            </div>
        </div>
    )
}