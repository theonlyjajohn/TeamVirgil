import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import CarouselCard from "./CarouselCard";
import MargaretThompson from "../images/margaret-thompson.png";
import EarlyLife from "../images/early-life.png";
import CollegeLife from "../images/college-life.png";
import MargaretThompsonLarge from "../images/m-thompson-large.png";
import CareerAndCommunity from "../images/career-and-community.png";

import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Demo.css";

const Demo = () => {
  const headingRef = useRef(null);

  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/home");
  };

  const goToWaitList = () => {
    navigate("/home#waitlist");
    // Any other actions that do not depend on navigation completion
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ ...styling }} onClick={onClick} />
    );
  }

  const SamplePrevArrow2 = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick} style={{ ...styling }}>
        hello
      </div>
    );
  };

  const goToEarlyLife = () => {
    navigate("/early-life");
  };

  const goToCollegeYears = () => {
    navigate("/college-years");
  };

  const goToCareerCommunity = () => {
    navigate("/career-community");
  };

  const styling = {
    color: "black",
  };

  const settings = {
    initialSlide: 1,
    centerMode: true,
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow2 />,
    beforeChange: (current, next) => setActiveIndex(next), // Update active index on slide change
  };

  const items = [
    {
      id: 0,
      imageUrl: "",
      years: "",
      title: "",
      features: [],
    },
    {
      id: 1,
      imageUrl: EarlyLife,
      years: "1938-1956",
      title: "Early Life in Ithaca",
      features: ["My brother", "Playing in the woods", "Family values"],
      goto: goToEarlyLife,
    },
    {
      id: 2,
      imageUrl: CollegeLife,
      years: "1957-1961",
      title: "College Years",
      features: [
        "Studying English Literature",
        "Sorority life",
        "First relationship",
      ],
      goto: goToCollegeYears,
    },
    {
      id: 3,
      imageUrl: CareerAndCommunity,
      years: "1961-1970",
      title: "Career & Community",
      features: ["Teaching high school", "Volunteering with gardening"],
      goto: goToCareerCommunity,
    },
    {
      id: 4,
      imageUrl: "",
      years: "",
      title: "",
      features: [],
    },
    {
      id: 0,
      imageUrl: "",
      years: "",
      title: "",
      features: [],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(1);

  const [deviceType, setDeviceType] = useState("desktop");

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.scrollIntoView({ behavior: "smooth" });
    }

    const handleResize = () => {
      const width = window.innerWidth;
      let newDeviceType = "desktop";
      if (width < 1024 && width >= 464) {
        newDeviceType = "tablet";
      } else if (width < 464) {
        newDeviceType = "mobile";
      }
      setDeviceType(newDeviceType);
    };

    handleResize(); // Call initially to set the initial device type
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="homepage">
      <header className="header">
        <nav className="navbar" ref={headingRef}>
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
            <button
              onClick={goToHome}
              style={{
                fontFamily: "Open Sans, sans-serif",
                fontSize: "20px",
                border: "transparent",
                backgroundColor: "transparent",
              }}
            >
              How it works
            </button>
            <button
              onClick={goToHome}
              style={{
                fontFamily: "Open Sans, sans-serif",
                fontSize: "20px",
                border: "transparent",
                backgroundColor: "transparent",
              }}
            >
              What's included
            </button>
            <button
              onClick={goToHome}
              style={{
                fontFamily: "Open Sans, sans-serif",
                fontSize: "20px",
                border: "transparent",
                backgroundColor: "transparent",
              }}
            >
              Explore Demo
            </button>
          </ul>
          <ul className="nav-waitlist">
            <button onClick={goToWaitList} className="nav-link-waitlist">
              Join Waitlist
            </button>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <div className="overall-heading-container">
          <div className="heading-text-container">
            <div className="heading-title-container">
              <div className="sub-heading"> The Story of </div>
              <h1 className="main-heading"> Betty Rollins</h1>
            </div>
            <div className="heading-content-container">
              <p>
                Betty's life story is a testment to the impact one individual
                can have on their community and family. Her dedication to
                education, love for the arts, and commitment to community
                service left a lasting legacy.
              </p>
              <br></br>

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
                Proudly sponsored by Mary Thompson, with interviews by Lily
                Jane.
              </p>
            </div>
          </div>
          <img
            src={MargaretThompsonLarge}
            alt="Black and white photo of Betty Rollins"
            style={{}}
          />
        </div>
        <div className="life-chapters-container">
          <h1 style={{ marginBottom: "30px" }}>Life Chapters</h1>

          <div className="carousel-container">
            <div
              style={{
                width: "80%",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Slider {...settings}>
                {items.map((item, index) => {
                  const isCenter = index === activeIndex; // Determine if this slide is the center slide
                  return (
                    <div
                      className={`item ${isCenter ? "center" : ""}`}
                      key={item.id}
                    >
                      <CarouselCard
                        years={item.years}
                        imageUrl={item.imageUrl}
                        title={item.title}
                        items={item.features}
                        isCenter={isCenter}
                        goto={item.goto}
                      />
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Demo;
