import { StarIcon } from "@heroicons/react/24/solid";

export default function About(){
    return (
        <div className="justify-center text-center items-center pt-30">
            <span className="text-white text-7xl">Loved by</span>
            <br></br>
            <span className="text-teal-300 text-7xl">people everywhere</span>
            <p className="text-gray-400 text-xl pt-6">Join thousands of satisfied users who have transformed their workflow</p>

            <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 px-20">

                {/* Card 1 */}
                <div className="border border-teal-300 rounded-md w-full min-h-[200px] p-4 bg-transparent transition-transform duration-300 hover:scale-105">
                
                <div className="flex items-start justify-between">
                    
                    <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center rounded-full bg-teal-300 text-white text-xl font-bold w-12 h-12">
                        S
                    </span>

                    <div>
                        <h3 className="text-lg font-bold text-white">
                        Sarah Johnson
                        </h3>
                        <p className="text-sm text-gray-400">
                        Content Creator
                        </p>
                    </div>
                    </div>

                    <div className="flex gap-1">
                    {[...Array(5)].map((_, index) => (
                        <StarIcon
                        key={index}
                        className="h-5 w-5 text-yellow-400"
                        />
                    ))}
                    </div>
                </div>

                
                <div className="mt-6">
                <p className="mt-2  text-gray-400 leading-relaxed">
                    “RiffinityAI has transformed how I work. The AI is incredibly intuitive and saves me hours every day!”
                    </p>
                </div>
                </div>

                {/* Card 2 */}
                 <div className="border border-teal-300 rounded-md w-full min-h-[200px] p-4 bg-transparent transition-transform duration-300 hover:scale-105">
                
                <div className="flex items-start justify-between">
                    
                    <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center rounded-full bg-teal-300 text-white text-xl font-bold w-12 h-12">
                        P
                    </span>

                    <div>
                        <h3 className="text-lg font-bold text-white">
                        Priya Sharma
                        </h3>
                        <p className="text-sm text-gray-400">
                        Marketing Manager
                        </p>
                    </div>
                    </div>

                    <div className="flex gap-1">
                    {[...Array(5)].map((_, index) => (
                        <StarIcon
                        key={index}
                        className="h-5 w-5 text-yellow-400"
                        />
                    ))}
                    </div>
                </div>

                
                <div className="mt-6">
                <p className="mt-2  text-gray-400 leading-relaxed">
                    “I use it for brainstorming campaigns and writing copy. It has significantly improved my team's productivity."
                    </p>
                </div>
                </div>


                {/* Card 3 */}
                 <div className="border border-teal-300 rounded-md w-full min-h-[200px] p-4 bg-transparent transition-transform duration-300 hover:scale-105">
                
                <div className="flex items-start justify-between">
                    
                    <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center rounded-full bg-teal-300 text-white text-xl font-bold w-12 h-12">
                        M
                    </span>

                    <div>
                        <h3 className="text-lg font-bold text-white">
                        Michael Chen
                        </h3>
                        <p className="text-sm text-gray-400">
                        Content Creator
                        </p>
                    </div>
                    </div>

                    <div className="flex gap-1">
                    {[...Array(5)].map((_, index) => (
                        <StarIcon
                        key={index}
                        className="h-5 w-5 text-yellow-400"
                        />
                    ))}
                    </div>
                </div>

                
                <div className="mt-6">
                <p className="mt-2  text-gray-400 leading-relaxed">
                    "Whether it's drafting emails or researching topics, this chatbot handles tasks that used to take me hours."
                    </p>
                </div>
                </div>


               

                {/* Card 5 */}
                 <div className="border border-teal-300 rounded-md w-full min-h-[200px] p-4 bg-transparent transition-transform duration-300 hover:scale-105">
                
                <div className="flex items-start justify-between">
                    
                    <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center rounded-full bg-teal-300 text-white text-xl font-bold w-12 h-12">
                        E
                    </span>

                    <div>
                        <h3 className="text-lg font-bold text-white">
                        Emma Wilson
                        </h3>
                        <p className="text-sm text-gray-400">
                        Content Creator
                        </p>
                    </div>
                    </div>

                    <div className="flex gap-1">
                    {[...Array(5)].map((_, index) => (
                        <StarIcon
                        key={index}
                        className="h-5 w-5 text-yellow-400"
                        />
                    ))}
                    </div>
                </div>

                
                <div className="mt-6">
                <p className="mt-2  text-gray-400 leading-relaxed">
                    "It explains complex topics in a simple way and helps me prepare for exams much faster."
                    
                    </p>
                </div>
                </div>


                {/* Card 6 */}
                 <div className="border border-teal-300 rounded-md w-full min-h-[200px] p-4 bg-transparent transition-transform duration-300 hover:scale-105">
                
                <div className="flex items-start justify-between">
                    
                    <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center rounded-full bg-teal-300 text-white text-xl font-bold w-12 h-12">
                        S
                    </span>

                    <div>
                        <h3 className="text-lg font-bold text-white">
                        Sarah Johnson
                        </h3>
                        <p className="text-sm text-gray-400">
                        Content Creator
                        </p>
                    </div>
                    </div>

                    <div className="flex gap-1">
                    {[...Array(5)].map((_, index) => (
                        <StarIcon
                        key={index}
                        className="h-5 w-5 text-yellow-400"
                        />
                    ))}
                    </div>
                </div>

                
                <div className="mt-6">
                <p className="mt-2  text-gray-400 leading-relaxed">
                    “RiffinityAI has transformed how I work. The AI is incredibly intuitive and saves me hours every day!”
                    </p>
                </div>
                </div>


                {/* Card 7 */}
                 <div className="border border-teal-300 rounded-md w-full min-h-[200px] p-4 bg-transparent transition-transform duration-300 hover:scale-105">
                
                <div className="flex items-start justify-between">
                    
                    <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center rounded-full bg-teal-300 text-white text-xl font-bold w-12 h-12">
                        S
                    </span>

                    <div>
                        <h3 className="text-lg font-bold text-white">
                        Sarah Johnson
                        </h3>
                        <p className="text-sm text-gray-400">
                        Content Creator
                        </p>
                    </div>
                    </div>

                    <div className="flex gap-1">
                    {[...Array(5)].map((_, index) => (
                        <StarIcon
                        key={index}
                        className="h-5 w-5 text-yellow-400"
                        />
                    ))}
                    </div>
                </div>

                
                <div className="mt-6">
                <p className="mt-2  text-gray-400 leading-relaxed">
                    “RiffinityAI has transformed how I work. The AI is incredibly intuitive and saves me hours every day!”
                    </p>
                </div>
                </div>


               

            </div>

            <div className="pt-20 px-20 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-7">
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