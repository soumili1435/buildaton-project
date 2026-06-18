"use client";

import { useState } from "react";

export default function FaceAnalyzer(){

  const [image,setImage] =
  useState<File|null>(null);

  const [result,setResult] =
  useState("");

  const [loading,setLoading] =
  useState(false);

  async function analyzeFace(){

    if(!image) return;

    setLoading(true);

    const reader =
      new FileReader();

    reader.readAsDataURL(image);

    reader.onloadend =
    async ()=>{

      const base64 =
      reader.result
      ?.toString()
      .split(",")[1];

      const res = await fetch(
        "/api/analyze-face",
        {
          method:"POST",
          headers:{
            "Content-Type":
            "application/json"
          },
          body:JSON.stringify({
            image:base64
          })
        }
      );

      const data =
      await res.json();

      setResult(
        data.result
      );

      setLoading(false);

    };
  }

  return(

    <section
      style={{
        padding:"50px",
        textAlign:"center"
      }}
    >

      <h2>
        📸 AI Face Analyzer
      </h2>

      <br/>

      <input
        type="file"
        accept="image/*"
        onChange={(e)=>{

          if(
            e.target.files?.[0]
          ){

            setImage(
              e.target.files[0]
            );

          }

        }}
      />

      <br/>
      <br/>

      <button
        onClick={analyzeFace}
      >
        Analyze Face
      </button>

      <br/>
      <br/>

      {
        loading &&
        <p>
          Analyzing...
        </p>
      }

      <pre
        style={{
          whiteSpace:
          "pre-wrap"
        }}
      >
        {result}
      </pre>

    </section>

  );
}