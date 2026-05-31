import Image from "next/image"


export default function Footer(){
    return(
        <div className="pt-40">
                <hr className="h-[2px] border-0 bg-gradient-to-r from-black via-teal-300 to-black" />
                <Image
                      src="/Logo.svg"
                      alt="Logo"
                      width={400}
                      height={400}
                      priority
                      className="pt-20 "
                    />
        </div>
    )
}