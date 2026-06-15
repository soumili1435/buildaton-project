const express = require("express");

const app = express();

app.use(express.json());

// ------------------ Salon Data ------------------

const salons = [
  {
    id: 1,
    name: "Glam Studio",
    location: "Kolkata",
    service: "Bridal Makeup",
    price: 4500
  },
  {
    id: 2,
    name: "Beauty Hub",
    location: "Bhubaneswar",
    service: "Hair Styling",
    price: 2000
  }
];

// ------------------ Stylist Data ------------------

const stylists = [
  {
    id: 1,
    name: "Priya Sharma",
    specialization: "Bridal Makeup",
    experience: 5
  },
  {
    id: 2,
    name: "Riya Das",
    specialization: "Hair Styling",
    experience: 3
  },
  {
    id: 3,
    name: "Anjali Singh",
    specialization: "Bridal Makeup",
    experience: 7
  }
];

// ------------------ Booking Data ------------------

let bookings = [];

// ------------------ Routes ------------------

// Home Route
app.get("/", (req, res) => {
  res.send("Beauty Marketplace Backend Running");
});

// Get All Salons
app.get("/salons", (req, res) => {
  res.json(salons);
});

// Get All Stylists
app.get("/stylists", (req, res) => {
  res.json(stylists);
});

// Specialist Matching
app.get("/match/:service", (req, res) => {
  const service = req.params.service;

  const matches = stylists.filter(
    stylist =>
      stylist.specialization.toLowerCase() ===
      service.toLowerCase()
  );

  res.json(matches);
});

// Create Booking
app.post("/book", (req, res) => {
  const { user, stylistId, date, time } = req.body;

  const booking = {
    id: bookings.length + 1,
    user,
    stylistId,
    date,
    time
  };

  bookings.push(booking);

  res.json({
    message: "Booking successful",
    booking
  });
});

// View All Bookings
app.get("/bookings", (req, res) => {
  res.json(bookings);
});

// Mock AI Recommendation Endpoint
app.get("/recommendations", (req, res) => {
  res.json({
    faceShape: "Oval",
    hairType: "Curly",
    skinTone: "Medium",
    recommendations: [
      "Layered Cut",
      "Soft Waves",
      "Bridal Glow Makeup"
    ]
  });
});

// Beauty Passport
const beautyPassports = [];

app.post("/passport", (req, res) => {
  beautyPassports.push(req.body);

  res.json({
    message: "Beauty Passport Saved",
    data: req.body
  });
});

app.get("/passport", (req, res) => {
  res.json(beautyPassports);
});

// ------------------ Server ------------------

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});