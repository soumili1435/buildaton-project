const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());

const SECRET = "beauty-secret";

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
    experience: 5,
    rating: 4.8
  },
  {
    id: 2,
    name: "Riya Das",
    specialization: "Hair Styling",
    experience: 3,
    rating: 4.7
  },
  {
    id: 3,
    name: "Anjali Singh",
    specialization: "Bridal Makeup",
    experience: 7,
    rating: 4.9
  }
];

// ------------------ Storage ------------------

let bookings = [];
let beautyPassports = [];
let users = [];

// ------------------ Home ------------------

app.get("/", (req, res) => {
  res.send("Beauty Marketplace Backend Running");
});

// ------------------ Authentication ------------------

// Register
app.post("/auth/register", (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = users.find(
    user => user.email === email
  );

  if (existingUser) {
    return res.status(400).json({
      message: "User already exists"
    });
  }

  const user = {
    id: users.length + 1,
    name,
    email,
    password
  };

  users.push(user);

  res.json({
    message: "User registered successfully",
    user
  });
});

// Login
app.post("/auth/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    u => u.email === email && u.password === password
  );

  if (!user) {
    return res.status(401).json({
      message: "Invalid credentials"
    });
  }

  const token = jwt.sign(
    {
      id: user.id,
      email: user.email
    },
    SECRET,
    { expiresIn: "1d" }
  );

  res.json({
    message: "Login successful",
    token
  });
});

// ------------------ Salon APIs ------------------

app.get("/salons", (req, res) => {
  const { location } = req.query;

  let result = salons;

  if (location) {
    result = salons.filter(
      salon =>
        salon.location.toLowerCase() ===
        location.toLowerCase()
    );
  }

  res.json(result);
});

// ------------------ Stylist APIs ------------------

app.get("/stylists", (req, res) => {
  res.json(stylists);
});

app.get("/stylists/:id", (req, res) => {
  const stylist = stylists.find(
    s => s.id === Number(req.params.id)
  );

  if (!stylist) {
    return res.status(404).json({
      message: "Stylist not found"
    });
  }

  res.json(stylist);
});

// ------------------ Specialist Matching ------------------

app.get("/match/:service", (req, res) => {
  const service = req.params.service;

  const matches = stylists.filter(
    stylist =>
      stylist.specialization.toLowerCase() ===
      service.toLowerCase()
  );

  res.json(matches);
});

// ------------------ Booking APIs ------------------

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

app.get("/bookings", (req, res) => {
  res.json(bookings);
});

// ------------------ AI Recommendations ------------------

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

// ------------------ Beauty Passport APIs ------------------

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