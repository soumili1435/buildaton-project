import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Portfolio from "@/models/Portfolio";

export async function GET() {
  await connectDB();

  const data = await Portfolio.find();

  return NextResponse.json(data);
}