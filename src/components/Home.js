import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Link,
  // Button,
  Element,
  // Events,
  // animateScroll as scroll,
  // scrollSpy,
} from "react-scroll";


import { firestore } from "../firebase";
// import { addDoc, collection} from "@firebase/firestore";
import { addDoc, collection } from "firebase/firestore";

// import whatsIncludedBg from "../images/whats-included-bg.png";
import whatsIncludedBigBg from "../images/whats-included-big-bg.png";
import downArrow from "../images/down-arrow.png";
import leftMacbook from "../images/left.png";
import rightMacbook from "../images/right.png";
import grouped from "../images/grouped.png";
import bigElipse from "../images/big-ellipse.png";
import contributeMemories from "../images/contribute-memories.png";
import completeInterviews from "../images/complete-interviews.png";
import receiveVirgilVault from "../images/receive-virgil-vault.png";

import "./Home.css"; // Assume you have corresponding CSS for styling
import { toast, ToastContainer } from "react-toastify";

function Home() {

  const ref = collection(firestore, "waitlist_data");

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [motivation, setMotivation] = useState("");
  const [heardFrom, setSelectedValue] = useState("");

  const goToDemo = () => {
    navigate("/demo");
  };

  const goToHome = () => {
    navigate("/home");
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangeName = (event) => {
    setFullName(event.target.value);
  };

  const handleChangeNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleChangeSubject = (event) => {
    setSubject(event.target.value);
  };
  const handleChangeMotivation = (event) => {
    setMotivation(event.target.value);
  };

  // Function to handle the change in dropdown
  const handleChangeDiscovery = (event) => {
    setSelectedValue(event.target.value); // Update the state with new value
    console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    let data = {
      email: email,
      name: fullName,
      phone: phoneNumber,
      subject: subject,
      motivation: motivation,
      source: heardFrom
    };
    
    console.log(data);

    try {
      addDoc(ref, data)
    } catch (event) {
      console.log(event)
    }
    // toast.success("Thank you for your interest! We'll notify you when capacity becomes available.", {
    //   position: "bottom-center"
    // });
    toast.success(
      <div>
        Thank you for your interest!
        <br/><br/>
        We'll notify you when capacity becomes available.
      </div>, {
      position: "bottom-center"
    });
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
            <Link to="how-it-works" className="nav-link">
              How it Works
            </Link>
            <Link to="join-our-waitlist" className="nav-link">
              What's Included
            </Link>
            <Link to="explore-demo" className="nav-link">
              Explore Demo
            </Link>
          </ul>
          <ul className="nav-waitlist">
            <Link to="join-our-waitlist" className="nav-link-waitlist">
              Join Waitlist
            </Link>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <Element name="about-us" className="centered-flexbox">
          <div className="about-us-flex-container">
            <section className="about-us-text-container">
              <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
                Preserve your <span className="gradient-text">loved one's</span>
                <br />
                legacy. One <span className="gradient-text">memory</span> at a
                time.
              </h1>
              <p className="feature-description">
                The Virgil Vault is a digital biography that preserves your
                loved one's life story - in their own voice.
              </p>
              <div className="about-us-buttons-container">
                <Link
                  to="join-our-waitlist"
                  className="cta-button"
                  style={{ backgroundColor: "#FFDE62" }}
                >
                  Join Our Waitlist
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
                width: "200%",
                height: "auto",
                marginBottom: "2%",
              }}
            >
              How Virgil captures <br></br>your family story
            </h1>
            <section className="features-container">
              <section className="feature-textbox">
                <img
                  src={completeInterviews}
                  alt="completeInterviews"
                  className="resized-image"
                />
                <div className="feature-explanation">
                  {" "}
                  <h1 className="number-circle"> 01</h1>
                  <h1 className="feature-title">
                    {" "}
                    Complete the Virgil interviews
                  </h1>
                  <p>
                    Virgil pairs your loved one with a professional historian,
                    who will walk them through a series of eight conversational
                    interviews via video chat.
                  </p>
                </div>
              </section>
              <section className="feature-textbox">
                <div className="feature-explanation">
                  {" "}
                  <h1 className="number-circle"> 02</h1>
                  <h1 className="feature-title"> Contribute your memories </h1>
                  <p>
                    Family members upload photos, documents, and their own
                    memories tor be woven into the tapestry of your loved one's
                    life story.
                  </p>
                </div>
                <img
                  src={contributeMemories}
                  alt="contributeMemories"
                  className="resized-image"
                />
              </section>
              <section className="feature-textbox">
                <img
                  src={receiveVirgilVault}
                  alt="receiveVirgilVault"
                  className="resized-image"
                />
                <div className="feature-explanation">
                  {" "}
                  <h1 className="number-circle"> 03</h1>
                  <h1 className="feature-title">
                    {" "}
                    Receive Your Virgil Vault{" "}
                  </h1>
                  <p>
                    Virgil organizes your loved one’s story into a beautiful,
                    interactive video memoir preserving their unique voice and
                    experiences.
                  </p>
                </div>
              </section>
            </section>
          </div>
        </Element>
        <Element
          name="join-our-waitlist"
          className="centered-flexbox"
          id="waitlist"
        >
          <div style={{ width: "80%" }}>
            <h1
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
              What's Included
            </h1>
            <div className="waitlist-holder">
              <div
                className="virgil-vault"
                style={{
                  backgroundImage: `url(${whatsIncludedBigBg})`,
                  backgroundSize: "cover cover", // Cover ensures the background covers the whole area
                  backgroundPosition: "center", // Center the image within the element
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="virgil-vault-holder">
                  <div className="virgil-vault-header-holder">
                    <div className="virgil-vault-header">
                      <h1 style={{ fontSize: "24px" }}>Virgil Vault</h1>
                      <p>For your loved one</p>
                      <h1
                        clasName="virgil-vault-price"
                        style={{ fontSize: "36px", marginTop: "30px" }}
                      >
                        $3950
                      </h1>
                    </div>
                  </div>
                  <div className="virgil-vault-includes">
                    <h3>Includes:</h3>

                    <ul>
                      <li>
                        Virgil Vault — an interactive archive that merges their
                        voice with photos, videos, and more
                      </li>
                      <br></br>
                      <li>
                        10 hours of conversational interviews — enough to
                        capture their entire life story!
                      </li>
                      <br></br>
                      <li>High-fidelity audio and video recordings</li>
                      <br></br>

                      <li>
                        Searchable video library to easily find specific
                        memories
                      </li>
                      <br></br>

                      <li>
                        A personal historian who will guide your family through
                        the entire process
                      </li>
                      <br></br>

                      <li>Safe, secure, and private to you and your family</li>
                      <br></br>

                      <li>Shareable and downloadable</li>
                    </ul>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    {/* <button type="submit" className="waitlist-button">
                      Schedule a Consultation
                    </button> */}
                  </div>
                </div>
              </div>
              <div
                className="waitlist-form-container"
                style={{ paddingTop: "20px" }}
              >
                <div className="waitlist-container">
                  <div className="waitlist-form-header">
                    <h1 style={{ marginBottom: "10px" }}>
                      Don't wait. Capture their story today.
                    </h1>
                    <p style={{ marginBottom: "15px" }}>
                      {" "}
                      Virgil is currently at capcity. Join the waitlist and
                      we'll reach out when space becomes available.{" "}
                    </p>
                  </div>
                  <form onSubmit={handleSubmit} className="waitlist-form">
                    <label>
                      Full Name *
                      <input
                        type="text"
                        value={fullName}
                        onChange={handleChangeName}
                        required
                      />
                    </label>
                    <label>
                      Email Address *
                      <input
                        type="email"
                        value={email}
                        onChange={handleChangeEmail}
                        required
                      />
                    </label>
                    <label>
                      Phone Number *
                      <input
                        type="tel"
                        value={phoneNumber}
                        onChange={handleChangeNumber}
                        required
                      />
                    </label>
                    <label>
                      Whose story would you like to capture?
                      {/** make default value blank*/}
                      <input
                        type="text"
                        value={subject}
                        onChange={handleChangeSubject}
                      />
                    </label>
                    <label>
                      Why are you interested in capturing their story?
                      <input
                        type="text"
                        value={motivation}
                        onChange={handleChangeMotivation}
                      />
                    </label>
                    <label>
                      How did you hear about us?
                      <select value = {heardFrom} onChange = {handleChangeDiscovery}> 
                        <option selected value=""></option>
                        <option value="reddit">Reddit</option>
                        <option value="facebook">Facebook/Instagram</option>
                        <option value="email">E-mail</option>
                        <option value="friend/family">Friend/Family</option>
                        <option value="seniorliving">Senior Living Facility</option>
                        <option value="other">Other</option>
                      </select>
                    </label>
                    <button type="submit" className="waitlist-button">
                      Join Our Waitlist
                    </button>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <span> Questions? Feel free to send us a message! </span>
                    <p><a href="mailto: contact@virgil.bio">contact@virgil.bio</a></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Element>
        <Element name="explore-demo" className="centered-flexbox">
          <div
            style={{
              backgroundColor: "#FFDE62",
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
              <h1 style={{ fontSize: "40px" }}>Explore a Virgil Vault</h1>
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
      </main>
      <ToastContainer
        toastStyle={{
          fontSize: '24px',
          padding: '20px',
          minHeight: '100px',
          width: "500px"
        }}
      />
    </div>
  );
}

export default Home;
