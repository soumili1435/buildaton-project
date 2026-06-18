"use client";

import { useEffect,useState }
from "react";

export default function AdminPage(){

  const [bookings,
  setBookings] = useState([]);

  useEffect(()=>{

    fetch("/api/bookings")
      .then(res=>res.json())
      .then(data=>
        setBookings(data)
      );

  },[]);

  return(

    <div
      style={{
        padding:"40px"
      }}
    >

      <h1>
        Salon Bookings
      </h1>

      {bookings.map(
        (booking:any)=>(
          <div
            key={booking._id}
            style={{
              marginBottom:"20px",
              padding:"15px",
              border:"1px solid gray"
            }}
          >
            <p>
              Name:
              {booking.name}
            </p>

            <p>
              Service:
              {booking.service}
            </p>

            <p>
              Date:
              {booking.date}
            </p>

          </div>
        )
      )}

    </div>

  );

}