"use client";

export default function OwnerDashboard() {
  return (
    <section className="py-20">

      <div className="section-container">

        <h2 className="text-center text-white text-4xl font-bold mb-12">
          Salon Owner Dashboard
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-[#162445] p-6 rounded-2xl">
            <p className="text-gray-300">Bookings</p>
            <h3 className="text-3xl text-pink-400 font-bold">
              245
            </h3>
          </div>

          <div className="bg-[#162445] p-6 rounded-2xl">
            <p className="text-gray-300">Revenue</p>
            <h3 className="text-3xl text-pink-400 font-bold">
              ₹52K
            </h3>
          </div>

          <div className="bg-[#162445] p-6 rounded-2xl">
            <p className="text-gray-300">Customers</p>
            <h3 className="text-3xl text-pink-400 font-bold">
              320
            </h3>
          </div>

          <div className="bg-[#162445] p-6 rounded-2xl">
            <p className="text-gray-300">Rating</p>
            <h3 className="text-3xl text-pink-400 font-bold">
              ⭐4.9
            </h3>
          </div>

        </div>

      </div>

    </section>
  );
}