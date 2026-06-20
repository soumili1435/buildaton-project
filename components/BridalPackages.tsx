"use client";

export default function BridalPackages() {
  return (
    <section className="py-16 bg-[#081730]">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-3xl text-white font-bold mb-10">
          Bridal Packages 👰
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-[#162445] rounded-xl p-5">
            <h3 className="text-white text-xl font-bold">
              Silver
            </h3>

            <p className="text-pink-400 text-2xl mt-2">
              ₹9,999
            </p>

            <ul className="text-gray-300 mt-4 space-y-2 text-sm">
              <li>✔ Makeup</li>
              <li>✔ Hairstyle</li>
              <li>✔ Saree Draping</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl p-5">
            <h3 className="text-white text-xl font-bold">
              Gold
            </h3>

            <p className="text-white text-2xl mt-2">
              ₹14,999
            </p>

            <ul className="text-white mt-4 space-y-2 text-sm">
              <li>✔ HD Makeup</li>
              <li>✔ Premium Styling</li>
              <li>✔ Trial Session</li>
            </ul>
          </div>

          <div className="bg-[#162445] rounded-xl p-5">
            <h3 className="text-white text-xl font-bold">
              Platinum
            </h3>

            <p className="text-pink-400 text-2xl mt-2">
              ₹24,999
            </p>

            <ul className="text-gray-300 mt-4 space-y-2 text-sm">
              <li>✔ Airbrush Makeup</li>
              <li>✔ Premium Styling</li>
              <li>✔ Home Service</li>
            </ul>
          </div>

        </div>

      </div>

    </section>
  );
}