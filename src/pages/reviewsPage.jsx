import { useState } from "react";

export default function ReviewsPage() {
  // Initial reviews
  const [reviews, setReviews] = useState([
    {
      name: "Sophia Williams",
      rating: 5,
      comment: "Amazing products! The quality is top-notch and delivery was super fast.",
    },
    {
      name: "Liam Johnson",
      rating: 4,
      comment: "Really good service. Packaging was neat. Would love to see more offers!",
    },
  ]);

  // Form state
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !rating || !comment) {
      alert("Please fill all fields");
      return;
    }

    // Add new review
    setReviews([...reviews, { name, rating: parseInt(rating), comment }]);

    // Clear form
    setName("");
    setRating("");
    setComment("");
  };

  return (
    <div className="w-full min-h-screen relative flex flex-col items-center justify-center">
      {/* Full Background Image */}
      <img
        src="deli.webp" // replace with your image path
        alt="Reviews Background"
        className="w-full h-full object-cover absolute top-0 left-0 z-0"
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <div className="relative z-10 w-full flex flex-col items-center py-12 px-4">
        {/* Title */}
        <h1 className="text-3xl font-bold text-white mb-8">Customer Reviews</h1>

        {/* Reviews */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl mb-12">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="shadow-lg rounded-2xl p-6 text-white transition hover:scale-105 bg-[#ff8fab]/90"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">{review.name}</h2>
                <div className="flex text-yellow-300">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
              </div>
              <p>{review.comment}</p>
            </div>
          ))}
        </div>

        {/* Leave a Review Form */}
        <div className="w-full max-w-lg bg-white/90 shadow-md rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Leave a Review</h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded-lg p-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <select
              className="border border-gray-300 rounded-lg p-2"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <option value="">Select Rating</option>
              <option value="5">⭐⭐⭐⭐⭐</option>
              <option value="4">⭐⭐⭐⭐</option>
              <option value="3">⭐⭐⭐</option>
              <option value="2">⭐⭐</option>
              <option value="1">⭐</option>
            </select>
            <textarea
              placeholder="Write your review..."
              className="border border-gray-300 rounded-lg p-2"
              rows="4"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className="bg-[#ff8fab] text-white rounded-lg py-2 hover:bg-[#fb6f92] transition"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
