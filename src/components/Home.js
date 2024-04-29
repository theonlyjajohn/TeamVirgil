import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

//import { firestore } from "../firebase";
//import { addDoc, collection} from "@firebase/firestore";
// import { addDoc, collection } from "firebase/firestore";

import downArrow from "../images/down-arrow.png";
import leftMacbook from "../images/left.png";
import rightMacbook from "../images/right.png";
import grouped from "../images/grouped.png";
import bigElipse from "../images/big-ellipse.png";

import "./Home.css"; // Assume you have corresponding CSS for styling

function Home() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const goToDemo = () => {
    navigate("/demo");
  };

  const goToHome = () => {
    navigate("/home");
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // access email like the line below
    console.log(email);
    /*
    let data = {
      message: email
    } 

    try {
      addDoc(ref, data)
    } catch (event) {
      console.log(event)
    }*/

    alert(`An email was submitted: ${email}`);
  };

  return (
    <div className="homepage">
      <header className="header">
        <nav className="navbar">
          <ul className="nav-list">
            <button
              onClick={goToHome}
              style={{
                fontFamily: "Palatino Linotype, serif",
                fontWeight: "bold",
                fontSize: "32px",
                border: "transparent",
                backgroundColor: "transparent",
              }}
            >
              Virgil
            </button>
            <Link to="about-us" className="nav-link">
              Our Product
            </Link>
            <Link to="how-it-works" className="nav-link">
              How it works
            </Link>
            <Link to="explore-demo" className="nav-link">
              Explore Demo
            </Link>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <Element name="about-us" className="centered-flexbox">
          <div className="about-us-flex-container">
            <section className="about-us-text-container">
              <h1 style={{ fontSize: "48px" }}>
                Preserve your <span className="gradient-text">legacy</span>,{" "}
                <br />
                One <span className="gradient-text">memory</span> at a time.
              </h1>
              <p className="feature-description">
                AI-powered biographies to capture and curate your loved one's
                life story.
              </p>
              <div className="about-us-buttons-container">
                <Link
                  to="explore-demo"
                  className="cta-button"
                  style={{ backgroundColor: "#FFDE62" }}
                >
                  Explore Demo
                </Link>
                <Link
                  to="how-it-works"
                  className="cta-button"
                  style={{ border: "2px solid black" }}
                >
                  How It Works
                </Link>
              </div>
              <div className="about-us-scroll">
                <Link to="how-it-works" className="about-us-scroll-link">
                  <img src={downArrow} alt="Down arrow" />
                  Scroll to learn more
                </Link>
              </div>
            </section>

            <div className="image-container">
              <img src={grouped} alt="Elderly couple" />
            </div>
          </div>
        </Element>
        <Element name="how-it-works" className="centered-flexbox">
          <div className="Features-section">
            <h1
              //className="colored-ellipse"
              style={{
                fontSize: "48px",
                backgroundImage: `url(${bigElipse})`,
                backgroundSize: "contain", // Cover ensures the background covers the whole area
                backgroundPosition: "center", // Center the image within the element
                backgroundRepeat: "no-repeat", // The image will not tile
                width: "100%",
                height: "auto",
              }}
            >
              How Virgil captures <br></br>your family story
            </h1>
            <section className="features-container">
              <section className="feature-textbox">
                <h1 className="feature-title">
                  {" "}
                  Record your loved one's most treasured stories
                </h1>
                <p className="feature-description">
                  {" "}
                  Virgil hires professional biographers to record your loved
                  one's memories and experiences.
                </p>
              </section>
              <section className="feature-textbox">
                <h1 className="feature-title">
                  {" "}
                  Upload family artifacts such as images and letters.{" "}
                </h1>
                <p className="feature-description">
                  {" "}
                  Virgil hires professional biographers to record your loved
                  one's memories and experiences.
                </p>
              </section>
              <section className="feature-textbox">
                <h1 className="feature-title">
                  {" "}
                  Cheirsh your loved one's memories for years to come.{" "}
                </h1>
                <p className="feature-description">
                  {" "}
                  Virgil hires professional biographers to record your loved
                  one's memories and experiences.
                </p>
              </section>
            </section>
          </div>
        </Element>
        <Element name="explore-demo" className="centered-flexbox">
          <div
            style={{
              backgroundColor: "#FFEFB5",
              borderRadius: "20px",
              height: "80%",
              width: "80%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0",
            }}
          >
            <img src={leftMacbook} alt="leftMacbook" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h1 style={{ fontSize: "40px" }}>Our Immersive Demo</h1>
              <button
                className="cta-button"
                onClick={goToDemo}
                style={{
                  backgroundColor: "transparent",
                  fontSize: "16px",
                }}
              >
                Try it out
              </button>
            </div>
            <img src={rightMacbook} alt="rightMacbook" />
          </div>
        </Element>
        <Element name="join-our-waitlist" className="centered-flexbox">
          <div className="Features-section">
            <h1
              //className="colored-ellipse"
              style={{
                fontSize: "48px",
                backgroundImage: `url(${bigElipse})`,
                backgroundSize: "contain", // Cover ensures the background covers the whole area
                backgroundPosition: "center", // Center the image within the element
                backgroundRepeat: "no-repeat", // The image will not tile
                width: "100%",
                height: "auto",
              }}
            >
              Join our waitlist!
            </h1>
            <form onSubmit={handleSubmit}>
              <label>
                Email:
                <input type="email" value={email} onChange={handleChange} />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </Element>
      </main>
    </div>
  );
}

export default Home;
