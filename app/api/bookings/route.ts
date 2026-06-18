import Booking from "@/models/Booking";
import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {

  try {

    await connectDB();

    const bookings =
      await Booking.find();

    return NextResponse.json(
      bookings
    );

  } catch(error:any) {

    console.log(error);

    return NextResponse.json(
      {
        error:error.message
      },
      {
        status:500
      }
    );

  }

}