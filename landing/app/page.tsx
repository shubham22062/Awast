import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
  <div className="relative w-full h-screen overflow-hidden">
    <video className="wabsolute top-0 left-0 w-full h-full object-cover"
    autoPlay
    muted
    loop
    playsInline
    >
      <source src="https://res.cloudinary.com/dbdvicxun/video/upload/v1779534486/11353720-uhd_3840_2160_60fps_1_jpb5vo.mp4" type="video/mp4"/>
    </video>
    <Navbar/>
    <Hero/>
  </div>
  );
}
