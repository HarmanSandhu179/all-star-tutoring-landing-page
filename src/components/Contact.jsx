import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ContactUs = ({ setShowForm }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const emailInput = form.current.elements["from_email"];

    if (emailInput.checkValidity()) {
      setShowForm(false);

      emailjs
        .sendForm(
          "service_lyvntcr",
          "template_um1u6y2",
          form.current,
          "knIYz_k1JA0LBkSB3"
        )
        .then(
          (result) => {
            console.log(result.text);
            showSuccessNotification();
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      toast.error("Please enter a valid email.");
    }
  };

  const showSuccessNotification = () => {
    // Display a success notification
    toast.success("Form submitted successfully!");
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="sign-up-form">
      <p>
        Let us know your name, email, and grade and what subject you need help
        with and we will get back to you as soon as possible!
      </p>
      <input type="text" name="from_name" placeholder="Name" required />
      <input
        type="email"
        name="from_email"
        placeholder="Email"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        required
      />
      <input name="message" placeholder="Message" required />
      {/* <input type="submit" value="Send" /> */}
      <button type="submit">Submit</button>
    </form>
  );
};
