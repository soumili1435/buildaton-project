export default function Navbar() {
  return (
    <nav className="nav">
      <h2 className="logo">GlamBook AI</h2>

      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <span>Salons</span>
        <span>Services</span>
        <span>Bridal</span>
        <span>Owners</span>

        <button>Get App</button>
      </div>
    </nav>
  );
}