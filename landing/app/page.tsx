import About from "@/components/About";
import Card from "@/components/card";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="bg-black overflow-x-hidden">

      {/* Hero Section with Video */}
      <section className="relative h-screen">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://res.cloudinary.com/dbdvicxun/video/upload/v1780222539/11353720-uhd_3840_2160_60fps_2_gx22i2.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10">
          <Navbar />
          <Hero />
        </div>
      </section>

      {/* Rest of the website */}
      <Services />
      <Features />
      <About />
      <Card />
      <Footer />

    </div>
  );
}