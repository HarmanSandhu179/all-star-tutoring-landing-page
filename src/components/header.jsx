import { useState } from "react";
import Typewriter from "../animations/Typewriter";
import { ContactUs } from "./Contact";

export function Header() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className="main-header">
        <header className="top-header">
          <div className="logo">
            <img
              src="/public/logo-no-background.png"
              alt="All-Star Tutoring Logo"
              className="logo"
            />
          </div>

          <div className="header-links">
            <ul className="list-links">
              <li>
                <a className="links" href="#">
                  ⭐ - About
                </a>
              </li>
              <li>
                <a href="prices.html" className="links">
                  💰 - Prices
                </a>
              </li>
              <li>
                <a href="#" className="links">
                  ❓ - FAQ
                </a>
              </li>
            </ul>
          </div>
        </header>
        <div className="main-header-content">
          <div className="left-main-content">
            <h1>All-Star Tutoring</h1>
            <p className="text-animation">
              {/* Welcome to All-Star Tutoring, where academic excellence meets
              personalized learning! We are a premier tutoring company committed
              to helping students unlock their full potential and achieve their
              educational goals. Our mission is to empower students, boost their
              confidence, and foster a love for learning in a supportive and
              engaging environment. Join us at All Star Tutoring and discover
              the path to success through personalized instruction and
              outstanding academic support. */}
              <Typewriter
                text="Welcome to our page. Sign up today!"
                delay={150}
              />
            </p>

            <button onClick={() => setShowForm((show) => !show)}>
              {showForm ? "Close" : "Sign up"}
            </button>
          </div>

          <div className="right-main-image">
            <img
              src="/public/cover.png"
              alt="kids studying"
              className="main-picture"
            />
          </div>
        </div>
        {/* {showForm ? <SignUpForm setShowForm={setShowForm} /> : null} */}
        {showForm ? <ContactUs setShowForm={setShowForm} /> : null}
      </div>
    </>
  );
}
