export default function Hero() {
  return (
    <section className="hero">
      <div>

        <h1>
          Book India's Best
          <br />
          <span>Beauty Salons</span>
        </h1>

        <p
          style={{
            marginTop: "20px",
            color: "#94A3B8",
            fontSize: "18px"
          }}
        >
          AI powered salon marketplace
        </p>

        <div style={{ marginTop: "30px" }}>
          <input placeholder="Search salons..." />
        </div>

        <button>
          Book Appointment →
        </button>

      </div>
    </section>
  );
}