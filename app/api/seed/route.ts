import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Stylist from "@/models/Stylist";

export async function GET() {
  await connectDB();

  await Stylist.deleteMany({});

  await Stylist.insertMany([
    {
      name: "Priya Sharma",
      specialization: "Bridal Makeup",
      city: "Durgapur",
      price: 4500,
      rating: 4.9,
    },
    {
      name: "Ananya Roy",
      specialization: "Bridal Makeup",
      city: "Durgapur",
      price: 4000,
      rating: 4.8,
    },
    {
      name: "Sneha Das",
      specialization: "Hair Styling",
      city: "Durgapur",
      price: 2500,
      rating: 4.7,
    },
  ]);

  return NextResponse.json({
    message: "Data Seeded",
  });
}