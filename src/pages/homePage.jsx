export default function HomePage() {
  return (
    <div className="relative w-full h-screen flex">
      
      {/* Background Image */}
      <img 
        src="face.jpg" 
        alt="Hero" 
        className="w-full h-full object-cover" 
      />

      {/* Website Name */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 text-black text-5xl font-bold font-sans z-20">
        Evara Cosmetics
      </div>
    </div>
  )
}
