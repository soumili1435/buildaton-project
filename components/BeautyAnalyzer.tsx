"use client";

import { useState } from "react";

export default function BeautyAnalyzer() {

  const [faceShape,setFaceShape] =
  useState("");

  const [result,setResult] =
  useState("");

  const analyze = () => {

    switch(faceShape){

      case "Oval":
        setResult(`
Recommended Hairstyles:
• Layer Cut
• Curtain Bangs
• Long Waves

Recommended Services:
• Hair Spa
• Smoothening

Skin Tip:
• Hydrating Facial
        `);
        break;

      case "Round":
        setResult(`
Recommended Hairstyles:
• Wolf Cut
• Long Layers
• Side Part

Recommended Services:
• Keratin Treatment
• Hair Spa

Skin Tip:
• Vitamin-C Facial
        `);
        break;

      case "Square":
        setResult(`
Recommended Hairstyles:
• Soft Layers
• Feather Cut
• Side Swept Bangs

Recommended Services:
• Hair Glossing
• Smoothening

Skin Tip:
• Brightening Facial
        `);
        break;

      default:
        setResult(
          "Please select a face shape."
        );
    }
  };

  return (

    <section
      style={{
        padding:"50px",
        textAlign:"center"
      }}
    >

      <h2>
        ✨ AI Beauty Analyzer
      </h2>

      <br/>

      <select
        value={faceShape}
        onChange={(e)=>
          setFaceShape(e.target.value)
        }
        style={{
          padding:"10px"
        }}
      >

        <option value="">
          Select Face Shape
        </option>

        <option value="Oval">
          Oval
        </option>

        <option value="Round">
          Round
        </option>

        <option value="Square">
          Square
        </option>

      </select>

      <br/>
      <br/>

      <button
        onClick={analyze}
        style={{
          padding:"10px 20px"
        }}
      >
        Analyze
      </button>

      <br/>
      <br/>

      <pre
        style={{
          whiteSpace:"pre-wrap"
        }}
      >
        {result}
      </pre>

    </section>
  );
}