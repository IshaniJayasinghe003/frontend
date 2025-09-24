export default function ContactUsPage() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-pink-200 to-pink-400 flex flex-col items-center justify-center px-4">
      
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Contact Evara</h1>
        <p className="text-white/90 md:text-lg">
          You can contact us through <span className="font-semibold">WhatsApp</span>, 
          <span className="font-semibold"> Phone Call</span>, or send us an <span className="font-semibold">Email</span>.
        </p>
      </div>

      {/* Contact Options */}
      <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 text-center space-y-6">
        
        {/* Phone */}
        <p className="text-gray-700 text-lg">
          📞 <a href="tel:+94711234567" className="text-pink-600 font-semibold hover:underline">
            +94 71 123 4567
          </a>
        </p>
        <p className="text-gray-700 text-lg">
          📞 <a href="tel:+94769876543" className="text-pink-600 font-semibold hover:underline">
            +94 76 987 6543
          </a>
        </p>

        {/* WhatsApp */}
        <p className="text-gray-700 text-lg">
          💬 <a 
            href="https://wa.me/94711234567" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-green-600 font-semibold hover:underline"
          >
            Chat with us on WhatsApp
          </a>
        </p>

        {/* Email */}
        <p className="text-gray-700 text-lg">
          ✉️ <a 
            href="mailto:info@evara.com" 
            className="text-blue-600 font-semibold hover:underline"
          >
            info@evara.com
          </a>
        </p>
      </div>
    </div>
  );
}
