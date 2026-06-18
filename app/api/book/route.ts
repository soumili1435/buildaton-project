import { NextResponse } from "next/server";
import {connectDB} from "@/lib/mongodb";
import Booking from "@/models/Booking";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("BOOKING DATA:", body);

    await connectDB();

    const booking = await Booking.create({
      name: body.name,
      service: body.service,
      date: body.date,
      salon: body.salon,
    });

    console.log("BOOKING SAVED:", booking);

    return NextResponse.json({
      success: true,
      message: "Booking Confirmed 🎉",
      booking,
    });
  } catch (error: any) {
    console.error("BOOKING ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}