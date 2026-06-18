import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("MESSAGE:", body.message);

    const apiKey = process.env.GEMINI_API_KEY;

    console.log(
      "API KEY LENGTH:",
      apiKey ? apiKey.length : 0
    );

    const genAI = new GoogleGenerativeAI(apiKey!);

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const result = await model.generateContent(
      body.message
    );

    const response = await result.response;

    const text = response.text();

    console.log("AI RESPONSE:", text);

    return NextResponse.json({
      reply: text,
    });

  } catch (error: any) {
    console.error("ERROR DETAILS:");
    console.error(error);

    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}