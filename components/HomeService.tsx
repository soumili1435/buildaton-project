"use client";

export default function HomeService() {
  return (
    <section className="py-16 bg-[#081730]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-[#162445] rounded-2xl overflow-hidden grid md:grid-cols-2">

          <img
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800"
            alt="Home Service"
            className="w-full h-[220px] md:h-[320px] object-cover"
          />

          <div className="p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Beauty At Home
            </h2>

            <p className="text-gray-300 mb-6">
              Professional salon services delivered directly to your doorstep.
            </p>

            <button className="w-fit px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white">
              Book Home Service
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}