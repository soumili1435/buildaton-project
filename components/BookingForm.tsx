"use client";

import { useState } from "react";

export default function BookingForm({
  salon,
  onClose
}:{
  salon:string;
  onClose:()=>void;
}){

  const [name,setName] = useState("");
  const [phone,setPhone] = useState("");
  const [service,setService] = useState("");

  const saveBooking = ()=>{

    const booking = {
      salon,
      name,
      phone,
      service
    };

    const oldBookings =
      JSON.parse(
        localStorage.getItem("bookings") || "[]"
      );

    oldBookings.push(booking);

    localStorage.setItem(
      "bookings",
      JSON.stringify(oldBookings)
    );

    alert("Booking Successful 🎉");

    onClose();
  };

  return(
    <div
      style={{
        position:"fixed",
        top:0,
        left:0,
        width:"100%",
        height:"100%",
        background:"rgba(0,0,0,0.7)",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
      }}
    >
      <div
        style={{
          background:"#1E293B",
          padding:"30px",
          borderRadius:"20px",
          width:"400px"
        }}
      >

        <h2>
          Book {salon}
        </h2>

        <input
          placeholder="Name"
          value={name}
          onChange={(e)=>
            setName(e.target.value)
          }
        />

        <br/><br/>

        <input
          placeholder="Phone"
          value={phone}
          onChange={(e)=>
            setPhone(e.target.value)
          }
        />

        <br/><br/>

        <input
          placeholder="Service"
          value={service}
          onChange={(e)=>
            setService(e.target.value)
          }
        />

        <br/><br/>

        <button onClick={saveBooking}>
          Confirm Booking
        </button>

        <button
          onClick={onClose}
          style={{
            marginLeft:"10px"
          }}
        >
          Cancel
        </button>

      </div>
    </div>
  );
}