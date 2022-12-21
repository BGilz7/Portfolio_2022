import React from "react";
import "./contact.scss";
import { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [message, setMessage] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);

    emailjs
      .sendForm(
        "service_xiw9f0a",
        "template_j6qajt6",
        form.current,
        "YH2HiugeX1R5mSIDy"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/fuji.jpeg" alt="Mount Fuji" />
      </div>
      <div className="right">
        <form ref={form} onSubmit={handleSubmit}>
          <h2>Contact</h2>
          <input type="text" placeholder="Name" name="from_name" />
          <input type="text" placeholder="Email" name="email" />
          <textarea placeholder="Message" name="message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Message sent.</span>}
        </form>
      </div>
    </div>
  );
}
