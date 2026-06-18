"use client";

import { useState } from "react";

export default function ChatBot() {

  const [open,setOpen]=useState(false);

  const [message,setMessage]=useState("");

  const [messages,setMessages]=useState([
    {
      sender:"ai",
      text:"Hi 👋 I am Glamour AI"
    }
  ]);

  async function sendMessage(){

    if(!message) return;

    const userMessage = message;

    setMessages(prev=>[
      ...prev,
      {
        sender:"user",
        text:userMessage
      }
    ]);

    setMessage("");

    const res = await fetch(
      "/api/chat",
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          message:userMessage
        })
      }
    );

    const data = await res.json();

    setMessages(prev=>[
      ...prev,
      {
        sender:"ai",
        text:data.reply
      }
    ]);

  }

  return (

    <div
      style={{
        position:"fixed",
        right:"20px",
        bottom:"20px"
      }}
    >

      {open && (

        <div
          style={{
            width:"350px",
            height:"450px",
            background:"#1E293B",
            borderRadius:"20px",
            padding:"20px",
            overflow:"hidden"
          }}
        >

          <h3>
            ✨ Glamour AI
          </h3>

          <div
            style={{
              height:"300px",
              overflowY:"auto",
              marginTop:"15px"
            }}
          >

            {messages.map((msg,index)=>(

              <div
                key={index}
                style={{
                  marginBottom:"10px"
                }}
              >
                <b>
                  {msg.sender==="ai"
                    ? "AI"
                    : "You"}
                  :
                </b>

                {" "}

                {msg.text}

              </div>

            ))}

          </div>

          <input
            value={message}
            onChange={(e)=>
              setMessage(e.target.value)
            }
            placeholder="Ask me..."
            style={{
              width:"100%",
              padding:"10px",
              marginTop:"10px"
            }}
          />

          <button
            onClick={sendMessage}
            style={{
              marginTop:"10px"
            }}
          >
            Send
          </button>

        </div>

      )}

      <button
        onClick={()=>
          setOpen(!open)
        }
      >
        ✨
      </button>

    </div>

  );

}