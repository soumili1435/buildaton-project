"use client";

import { useRouter } from "next/navigation";

const salons = [
  {
    id: 1,
    name: "Aarav Luxe Studio",
    city: "Mumbai",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f",
    services: ["Haircut", "Facial", "Makeup"]
  },
  {
    id: 2,
    name: "Elara Beauty Lounge",
    city: "Bengaluru",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035",
    services: ["Hair Spa", "Bridal Makeup", "Manicure"]
  },
  {
    id: 3,
    name: "Velvet & Glow",
    city: "Delhi",
    rating: "4.7",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
    services: ["Hair Styling", "Skin Care", "Pedicure"]
  }
];

export default function SalonCards() {

  const router = useRouter();

  return (
    <section
      style={{
        padding: "80px 40px",
        background: "#0F172A",
        color: "white"
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "42px",
          marginBottom: "50px"
        }}
      >
        Featured Salons ✨
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(300px,1fr))",
          gap: "30px"
        }}
      >
        {salons.map((salon) => (
          <div
            key={salon.id}
            style={{
              background: "#1E293B",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow:
                "0 10px 25px rgba(0,0,0,0.3)"
            }}
          >
            <img
              src={salon.image}
              alt={salon.name}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover"
              }}
            />

            <div
              style={{
                padding: "20px"
              }}
            >
              <h3
                style={{
                  fontSize: "24px",
                  marginBottom: "10px"
                }}
              >
                {salon.name}
              </h3>

              <p>
                📍 {salon.city}
              </p>

              <p
                style={{
                  marginTop: "10px"
                }}
              >
                ⭐ {salon.rating}
              </p>

              <div
                style={{
                  marginTop: "15px",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px"
                }}
              >
                {salon.services.map((service) => (
                  <span
                    key={service}
                    style={{
                      background: "#334155",
                      padding: "6px 12px",
                      borderRadius: "20px",
                      fontSize: "12px"
                    }}
                  >
                    {service}
                  </span>
                ))}
              </div>

              <button
                onClick={() =>
                  router.push(
                    `/book?salon=${encodeURIComponent(
                      salon.name
                    )}`
                  )
                }
                style={{
                  marginTop: "20px",
                  width: "100%",
                  padding: "12px",
                  border: "none",
                  borderRadius: "12px",
                  background: "#EC4899",
                  color: "white",
                  fontWeight: "bold",
                  cursor: "pointer"
                }}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}