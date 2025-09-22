export default function AboutUsPage() {
  return (
    <div className="w-full h-screen relative flex">
      {/* Cover Image */}
      <img 
        src="usp.webp" 
        alt="Evara Cosmetics Cover" 
        className="w-full h-full object-cover"
      />

      {/* Overlay Text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
      About Us
    </h1>
    <p className="text-lg md:text-xl text-white mb-6">
      We are dedicated to bringing you a curated selection of premium skincare, makeup, haircare, and wellness products.
    </p>
    <p>
      Our mission is simple: to empower your natural beauty with trusted  brands that are safe, sustainable, and effective. At Evara, we  believe in self-care, confidence, and conscious beauty. 
    </p>
    </div>
    </div>
  )
}