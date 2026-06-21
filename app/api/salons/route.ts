import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Salon from "@/models/Salon";

export async function GET() {
  await connectDB();

  const salons = await Salon.find();

  return NextResponse.json(salons);
}