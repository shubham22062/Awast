export default function Navbar(){
    return(
        <nav className="flex justify-between">
            <h1 className="font-bold text-2xl">Awast</h1>
          <div className="border rounded-full bg-black/40 backdrop-blur-md p-2 flex gap-3 items-center">
            <span className="text-white hover:underline">Home</span>
          <span className="text-white hover:underline">Pricing</span>
          <span className="text-white hover:underline">Features</span>
          <span className="text-white hover:underline">Conatct</span>
          <span className="text-white hover:underline">About</span>  
            
          </div>
          <span>Learn More</span>
          <button className="border rounded-md p-3 bg-black text-white">Get Started</button>
        </nav>
    )
}