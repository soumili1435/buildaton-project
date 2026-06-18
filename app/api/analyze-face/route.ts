import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {

    const body = await req.json();

    const genAI = new GoogleGenerativeAI(
      process.env.GEMINI_API_KEY!
    );

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash"
    });

    const result = await model.generateContent([
      {
        inlineData: {
          data: body.image,
          mimeType: "image/jpeg"
        }
      },
      `
Analyze this face.

Return:

1. Face Shape
2. Skin Type
3. Recommended Hairstyles
4. Recommended Salon Services
5. Makeup Suggestions

Keep response short.
      `
    ]);

    const text =
      result.response.text();

    return NextResponse.json({
      result: text
    });

  } catch (error:any) {

    console.error(error);

    return NextResponse.json(
      {
        result:"Analysis Failed"
      },
      {
        status:500
      }
    );
  }
}