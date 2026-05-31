import About from "@/components/About";
import Card from "@/components/card";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">

      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://res.cloudinary.com/dbdvicxun/video/upload/v1779534486/11353720-uhd_3840_2160_60fps_1_jpb5vo.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content Layer */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Services/>
        <Features/>
        <About/>
        <Card/>
        <Footer/>
      </div>

    </div>
  );
}