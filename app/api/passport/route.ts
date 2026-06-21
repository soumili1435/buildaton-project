import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import BeautyPassport from "@/models/BeautyPassport";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const passport = await BeautyPassport.create(body);

    return NextResponse.json(passport);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create passport" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();

    const passports = await BeautyPassport.find();

    return NextResponse.json(passports);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch passports" },
      { status: 500 }
    );
  }
}