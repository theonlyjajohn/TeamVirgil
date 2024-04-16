import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import MargaretThompson from "../images/margaret-thompson.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./Demo.css"; // Assume you have corresponding CSS for styling
function Demo() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/home");
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
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
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <div className="heading-container">
          <div className="sub-heading"> The Story of </div>
          <h1 className="main-heading"> Margaret Thompson</h1>
        </div>
        <div className="content-container">
          <img
            src={MargaretThompson}
            alt="Black and white photo of Margaret Thompson"
            style={{ width: "auto", height: "100%", objectFit: "cover" }}
          />
          <div className="content-text-container">
            <p>
              Maggie's life story is a testment to the impact one individual can
              have on their community and family. Her dedication to education,
              love for the arts, and commitment to community service left a
              lasting legacy.
              <p>
                <span style={{ fontWeight: "bold" }}>Born:</span> July 15, 1938
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>Age:</span> 85 years old
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>Spouse:</span> Thomas
                Thompson
              </p>
              <p>
                Proudly sponsored by Mary Thommpson, with interviews by Lily
                Jane.
              </p>
            </p>
          </div>
        </div>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div>
            {" "}
            <img
              src={MargaretThompson}
              alt="Black and white photo of Margaret Thompson"
              style={{ width: "auto", height: "100%", objectFit: "cover" }}
            />
            Item 1
          </div>
          <div>
            {" "}
            <img
              src={MargaretThompson}
              alt="Black and white photo of Margaret Thompson"
              style={{ width: "auto", height: "100%", objectFit: "cover" }}
            />
            Item 2
          </div>
          <div>
            {" "}
            <img
              src={MargaretThompson}
              alt="Black and white photo of Margaret Thompson"
              style={{ width: "auto", height: "100%", objectFit: "cover" }}
            />
            Item 3
          </div>
          <div>
            {" "}
            <img
              src={MargaretThompson}
              alt="Black and white photo of Margaret Thompson"
              style={{ width: "auto", height: "100%", objectFit: "cover" }}
            />
            Item 4
          </div>
        </Carousel>
      </main>
    </div>
  );
}

export default Demo;
