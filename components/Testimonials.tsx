"use client";

const reviews = [
  {
    name: "Priya Sharma",
    review: "Amazing salon booking experience.",
  },
  {
    name: "Riya Das",
    review: "Loved the AI recommendations.",
  },
  {
    name: "Ananya Gupta",
    review: "Found my bridal artist within minutes.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-[#02103a]">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-center text-white text-3xl font-bold mb-10">
          Happy Customers
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {reviews.map((item, index) => (
            <div
              key={index}
              className="bg-[#162445] rounded-xl p-5"
            >
              <p className="text-gray-300 text-sm leading-6">
                "{item.review}"
              </p>

              <h3 className="mt-4 text-pink-400 font-semibold">
                {item.name}
              </h3>

              <p className="text-yellow-400 mt-2">
                ★★★★★
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}