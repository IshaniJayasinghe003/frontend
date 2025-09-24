import { FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function ContactUsPage() {
  return (
    <div className="w-full min-h-screen relative">
      
      {/* Full Background Image */}
      <img
        src="cos.webp" 
        alt="Contact Us Cover"
        className="w-full h-full object-cover absolute top-0 left-0 z-0"
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/70 z-0"></div>

      {/* Contact Card */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-6">
        <div className="max-w-3xl w-full bg-[#ffe5ec]/90 shadow-lg rounded-2xl p-10 text-center">
          
          {/* Heading */}
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h1>
          <p className="text-gray-600 mb-8">
            You can contact us through WhatsApp, phone, or email.
          </p>

          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* WhatsApp */}
            <a
              href="https://wa.me/94711234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-green-50 rounded-xl shadow hover:shadow-md transition"
            >
              <FaWhatsapp className="w-10 h-10 text-green-600 mb-3" />
              <h2 className="text-lg font-bold text-gray-800">WhatsApp</h2>
              <p className="text-gray-600 text-sm">Chat with us directly</p>
            </a>

            {/* Phone */}
            <a
              href="tel:+94711234567"
              className="flex flex-col items-center p-6 bg-blue-50 rounded-xl shadow hover:shadow-md transition"
            >
              <FaPhone className="w-10 h-10 text-blue-600 mb-3" />
              <h2 className="text-lg font-bold text-gray-800">Call Us</h2>
              <p className="text-gray-600 text-sm">+94 71 123 4567</p>
            </a>

            {/* Email */}
            <a
              href="mailto:info@evara.com"
              className="flex flex-col items-center p-6 bg-pink-50 rounded-xl shadow hover:shadow-md transition"
            >
              <FaEnvelope className="w-10 h-10 text-pink-600 mb-3" />
              <h2 className="text-lg font-bold text-gray-800">Email</h2>
              <p className="text-gray-600 text-sm">info@evara.com</p>
            </a>
          </div>

          {/* Extra Note */}
          <p className="mt-10 text-gray-700 text-sm">
            Available daily from <span className="font-bold">9 AM - 6 PM</span>
          </p>
        </div>
      </div>
    </div>
  );
}
