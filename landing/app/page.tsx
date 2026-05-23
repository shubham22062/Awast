import Navbar from "@/components/Navbar";


export default function Home() {
  return (
  <div>
    <video className="w-full h-full"
    autoPlay
    muted
    loop
    playsInline
    >
      <source src="/landing.mp4" type="video/mp4"/>
    </video>
    <Navbar/>
  </div>
  );
}
