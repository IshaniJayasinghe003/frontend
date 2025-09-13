export default function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="relative w-full h-screen bg-cover bg-center flex items-center px-12"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1400&q=80')",
        }}
      >
        {/* Overlay for dimming background */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Text Content with semi-transparent box */}
        <div className="relative z-10 max-w-2xl bg-white bg-opacity-20 backdrop-blur-md p-8 rounded-lg text-left">
          <h1 className="text-6xl font-extrabold mb-6 text-pink-600">
            Welcome to Evara Beauty
          </h1>
          <p className="text-2xl mb-4 text-white">
            A Full Beauty & Co Experience
          </p>
          <p className="text-lg text-white leading-relaxed">
            At <span className="font-semibold text-pink-600">Evara Beauty</span>, we
            believe beauty is about confidence, elegance, and self-expression. 
            We are proud to bring you a premium collection of <span className="font-medium text-pink-600">trusted branded items</span> – 
            from luxurious skincare to professional makeup essentials – all carefully selected to match your lifestyle. 
            Whether you’re preparing for a special occasion or refreshing your daily look, 
            we’re here to provide you with the best products and services that help you glow inside and out.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-10 bg-white">
        {/* Service cards go here */}
      </div>
    </div>
  );
}
