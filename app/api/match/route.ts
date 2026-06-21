import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Stylist from "@/models/Stylist";

export async function POST(req: Request) {
  try {
    await connectDB();

    const { service, budget } = await req.json();

    const stylists = await Stylist.find({
      specialization: service,
      price: { $lte: budget },
    }).sort({ rating: -1 });

    return NextResponse.json(stylists);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Error finding stylists" },
      { status: 500 }
    );
  }
}