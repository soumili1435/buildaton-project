"use client";

const services = [
  {
    title: "Hair Styling",
    price: "499",
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600",
  },
  {
    title: "Facial",
    price: "799",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600",
  },
  {
    title: "Manicure",
    price: "599",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600",
  },
  {
    title: "Bridal Makeup",
    price: "4999",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600",
  },
];

export default function Services() {
  return (
    <section className="py-16 bg-[#02103a]">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-4xl font-bold text-white mb-10">
          Popular Services ✨
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#162445] rounded-2xl overflow-hidden shadow-lg"
            >

              <img
                src={service.image}
                alt={service.title}
                className="w-full h-[180px] object-cover"
              />

              <div className="p-4">

                <h3 className="text-white text-xl font-semibold">
                  {service.title}
                </h3>

                <p className="text-pink-400 mt-2 text-lg">
                  ₹{service.price}
                </p>

                <button className="w-full mt-4 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white">
                  Book Now
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}