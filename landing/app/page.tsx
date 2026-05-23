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
      <source src="https://res.cloudinary.com/dbdvicxun/video/upload/v1779534486/11353720-uhd_3840_2160_60fps_1_jpb5vo.mp4" type="video/mp4"/>
    </video>
    <Navbar/>
  </div>
  );
}
