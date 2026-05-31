import Image from "next/image"


export default function Footer(){
    return(
        <div className="pt-20 pb-20">
                <hr className="h-[2px] border-0 bg-gradient-to-r from-black via-teal-300 to-black" />
               <div className="grid justify-center pb-10">
                 <Image
                      src="/Logo.svg"
                      alt="Logo"
                      width={400}
                      height={400}
                      priority
                      className="pt-20 pl-[100px]"
                    />

                    <div className="pt-10 flex gap-20">
                        <span className="text-gray-300 font-bold text-2xl hover:underline">Home</span>
                        <span className="text-gray-300 font-bold text-2xl hover:underline">Features</span>
                        <span className="text-gray-300 font-bold text-2xl hover:underline">Service</span>
                        <span className="text-gray-300 font-bold text-2xl hover:underline">About</span>
                    </div>

                    <div className="pt-15 flex gap-20 pl-[150px]">
                        <img src="/github.svg" alt="github" className="w-10 h-10 text-white bg-white rounded-full transition-transform duration-300 hover:scale-105"/>
                        <img src="/Linkedin.svg" alt="Linkedin" className="w-10 h-10 text-white bg-white rounded-full transition-transform duration-300 hover:scale-105"/>
                        <img src="/twitter.svg" alt="twitter" className="w-10 h-10 text-white bg-white rounded-full transition-transform duration-300 hover:scale-105"/>
                    </div>

               </div>
               <hr className="h-[2px] border-0 bg-gradient-to-r from-black via-teal-300 to-black"/>

               <div className="flex justify-center">
                <span className="text-gray-400">© 2026</span>
                <span className="text-teal-300">AWASTAI.</span>
                <span className="text-gray-400">All rights reserved</span>
               </div>
        </div>
    )
}