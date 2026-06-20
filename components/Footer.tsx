export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">

      <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-4 gap-8">

        <div>
          <h2 className="text-2xl font-bold text-pink-400">
            GlamBook AI
          </h2>

          <p className="mt-4 text-gray-400">
            AI Powered Beauty Marketplace.
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-3">Company</h3>
          <p>About</p>
          <p>Careers</p>
          <p>Contact</p>
        </div>

        <div>
          <h3 className="font-bold mb-3">Services</h3>
          <p>Salon Booking</p>
          <p>Bridal Makeup</p>
          <p>Home Service</p>
        </div>

        <div>
          <h3 className="font-bold mb-3">Social</h3>
          <p>Instagram</p>
          <p>LinkedIn</p>
          <p>Twitter</p>
        </div>

      </div>

      <p className="text-center mt-12 text-gray-400">
        © 2026 GlamBook AI
      </p>
    </footer>
  );
}