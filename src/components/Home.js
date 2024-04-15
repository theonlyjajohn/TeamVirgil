import React from "react";
//import { Link } from 'react-router-dom';
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import elderlyCoupleImage from "../images/elderly-couple.png";
import childrenPlayingImage from "../images/children-playing.png";
import downArrow from "../images/down-arrow.png";
import leftMacbook from "../images/left.png";
import rightMacbook from "../images/right.png";

import "./Home.css"; // Assume you have corresponding CSS for styling

function Home() {
  return (
    <div className="homepage">
      <header className="header">
        <nav className="navbar">
          <ul className="nav-list">
            <li className="logo">Virgil</li>
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
                Preserve your legacy, <br />
                One memory at a time.
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
              <img
                src={elderlyCoupleImage}
                alt="Elderly couple"
                className="large-image"
              />
              <img
                src={childrenPlayingImage}
                alt="Children playing"
                className="small-image"
              />
            </div>
          </div>
        </Element>
        <Element name="how-it-works" className="centered-flexbox">
          <div className="Features-section">
            <h1 style={{ fontSize: "48px" }}>
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
              justifyContent: "center",
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
              <h1>Our Immersive Demo</h1>
              <button className="cta-button">Try it out</button>
            </div>
            <img src={rightMacbook} alt="rightMacbook" />
          </div>
        </Element>
      </main>
    </div>
  );
}

export default Home;
