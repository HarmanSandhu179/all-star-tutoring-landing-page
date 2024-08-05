import React from "react";
import Picture from "../images/logo-no-background.png";
import { Link } from "react-router-dom";

function PricesPage() {
  return (
    <>
      <body style={{ display: "flex", flexDirection: "column" }}>
        {/* <div className="main-header">
        <header className="top-header">
          <div className="logo">
            <img src={Picture} alt="All-Star Tutoring Logo" className="logo" />
          </div>
          <div className="header-links">
            <ul>
              <li>
                <a href="index.html">⭐ - Home </a>
              </li>
              <li>
                <a href="#">💰 - Prices </a>
              </li>
              <li>
                <a href="#">❓ - FAQ</a>
              </li>
            </ul>
          </div>
        </header>
      </div> */}
        <div
          className="logo"
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-evenly",
          }}
        >
          <img
            src={Picture}
            alt="All-Star Tutoring Logo"
            className="logo"
            style={{ paddingTop: "10px" }}
          />
          <Link to="/" className="links">
            {" "}
            Home{" "}
          </Link>
        </div>
        <div className="middle-section">
          <h2>Our Pricing</h2>
          <div className="pricing-plans">
            <div className="pricing-plan">
              <h3>Basic Plan</h3>
              <p>Includes 2 hours of tutoring.</p>
              <p>Price: $60</p>
            </div>

            <div className="pricing-plan">
              <h3>Standard Plan</h3>
              <p>Includes 6 hours of tutoring.</p>
              <p>Price: $160</p>
            </div>

            <div className="pricing-plan">
              <h3>Premium Plan</h3>
              <p>Includes 20 hours of tutoring.</p>
              <p>Price: $500</p>
            </div>
          </div>
        </div>

        <div className="footer">
          <p>Copyright © All-Star Tutoring 2023</p>
        </div>
      </body>
    </>
  );
}

export default PricesPage;
