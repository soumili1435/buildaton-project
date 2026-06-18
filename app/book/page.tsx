"use client";

import { useState } from "react";

export default function BookingPage() {

  const [name,setName] = useState("");
  const [service,setService] = useState("");
  const [date,setDate] = useState("");

  async function bookSalon() {

    const res = await fetch(
      "/api/book",
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          name,
          service,
          date
        })
      }
    );

    const data = await res.json();

    alert(data.message);
  }

  return (

    <div
      style={{
        padding:"50px"
      }}
    >
      <h1>Book Appointment</h1>

      <input
        placeholder="Your Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />

      <br/><br/>

      <input
        placeholder="Service"
        value={service}
        onChange={(e)=>setService(e.target.value)}
      />

      <br/><br/>

      <input
        type="date"
        value={date}
        onChange={(e)=>setDate(e.target.value)}
      />

      <br/><br/>

      <button onClick={bookSalon}>
        Confirm Booking
      </button>

    </div>

  );
}