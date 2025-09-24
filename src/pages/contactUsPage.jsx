export default function ContactUsPage() {
  return (
    <div className="w-full min-h-screen relative bg-gradient-to-b from-pink-200 to-pink-400 flex flex-col items-center pt-20 px-4 md:px-0">
      
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Contact Evara</h1>
        <p className="text-white/90 md:text-lg">We’d love to hear from you. Send us a message!</p>
      </div>

      {/* Contact Form Card */}
      <div className="w-full md:w-[500px] lg:w-[600px] bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12">
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="text"
            placeholder="Subject"
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <textarea
            rows="5"
            placeholder="Message"
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
          ></textarea>
          <button
            type="submit"
            className="bg-pink-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-pink-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Optional Contact Info */}
      <div className="mt-12 text-center text-white space-y-2">
        <p>📍 123 Evara Street, Colombo, Sri Lanka</p>
        <p>📞 +94 71 123 4567</p>
        <p>✉️ info@evara.com</p>
      </div>

    </div>
  );
}
