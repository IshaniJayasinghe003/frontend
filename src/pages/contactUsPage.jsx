import { Phone, Mail, MessageCircle } from "lucide-react";

export default function ContactUsPage() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-2xl p-10 text-center">
        
        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h1>
        <p className="text-gray-600 mb-8">
          We’re here to help! Reach us easily through WhatsApp, phone, or email.
        </p>

        {/* Contact Options */}
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* WhatsApp */}
          <a
            href="https://wa.me/94771234567"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-green-50 rounded-xl shadow hover:shadow-md transition"
          >
            <MessageCircle className="w-10 h-10 text-green-600 mb-3" />
            <h2 className="text-lg font-semibold text-gray-800">WhatsApp</h2>
            <p className="text-gray-600 text-sm">Chat with us directly</p>
          </a>

          {/* Phone */}
          <a
            href="tel:+94771234567"
            className="flex flex-col items-center p-6 bg-blue-50 rounded-xl shadow hover:shadow-md transition"
          >
            <Phone className="w-10 h-10 text-blue-600 mb-3" />
            <h2 className="text-lg font-semibold text-gray-800">Call Us</h2>
            <p className="text-gray-600 text-sm">+94 77 123 4567</p>
          </a>

          {/* Email */}
          <a
            href="mailto:info@yourcompany.com"
            className="flex flex-col items-center p-6 bg-pink-50 rounded-xl shadow hover:shadow-md transition"
          >
            <Mail className="w-10 h-10 text-pink-600 mb-3" />
            <h2 className="text-lg font-semibold text-gray-800">Email</h2>
            <p className="text-gray-600 text-sm">info@yourcompany.com</p>
          </a>
        </div>

        {/* Extra Note */}
        <p className="mt-10 text-gray-500 text-sm">
          Available daily from <span className="font-semibold">9 AM - 6 PM</span>
        </p>
      </div>
    </div>
  );
}
