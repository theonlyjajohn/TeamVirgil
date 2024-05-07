import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import CarouselCard from "./CarouselCard";
// import MargaretThompson from "../images/margaret-thompson.png";
import c1 from "../images/carousel_images/c1.png";
import c2 from "../images/carousel_images/c2.png";
import c3 from "../images/carousel_images/c3.png";
import c4 from "../images/carousel_images/c4.png";
import c5 from "../images/carousel_images/c5.png";
import c6 from "../images/carousel_images/c6.png";
import c7 from "../images/carousel_images/c7.png";
// import MargaretThompsonLarge from "../images/m-thompson-large.png"
import bettyHeadshot from "../images/betty_headshot.png";



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
    const { className, onClick } = props;
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

  // const goToCollegeYears = () => {
  //   navigate("/college-years");
  // };

  // const goToCareerCommunity = () => {
  //   navigate("/career-community");
  // };

  const styling = {
    color: "black",
  };

  const settings = {
    initialSlide: 0,
    centerMode: true,
    infinite: false,
    centerPadding: "25px",
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
      imageUrl: c1,
      years: "1938-1948",
      title: "Early Life in Ithaca",
      features: ["Family Background", "Mother's Influence", "Extracurricular Beginnings"],
      buttonText: "Learn More",
      goto: goToEarlyLife,
    },
    {
      id: 2,
      imageUrl: c2,
      years: "1949-1954",
      title: "Education & Teenage Years",
      features: [
        "Advanced Studies",
        "Cultural and Social Development",
        "Develeping Independence",
      ],
      buttonText: "Coming Soon!",
      // goto: goToCollegeYears,
    },
    {
      id: 3,
      imageUrl: c3,
      years: "1955-1960",
      title: "Early Career & Acting",
      features: ["Beginning as an Actress", "Realization and Shifts", "Transition to Writing"],
      buttonText: "Coming Soon!",
      // goto: goToCareerCommunity,
    },
    {
      id: 4,
      imageUrl: c4,
      years: "1961-1970",
      title: "Professional Writing Career",
      features: ["Entry into journalism", "Skills Development", "Recognition and Setbacks"],
      buttonText: "Coming Soon!",
    },
    {
      id: 5,
      imageUrl: c5,
      years: "1971-1980",
      title: "Television Journalism & Greatest Challenges",
      features: ["Shift to Television" , "Battle with Breast Cancer", "Authorship"],
      buttonText: "Coming Soon!",
    },
    {
      id: 6,
      imageUrl: c6,
      years: "1981-2000",
      title: "Later Career & Advocacy",
      features: ["Continued Writing and TV Career", "Family and Personal Life", "New Advocacy Efforts"],
      buttonText: "Coming Soon!",
    },
    {
      id: 7,
      imageUrl: c7,
      years: "2001-Present",
      title: "Reflection & Legacy",
      features: ["Reflecting on Life Lessons", "Loss and Coping", "Ongoing Advocacy"],
    },
    {
      id: 8,
      imageUrl: "",
      years: "",
      title: "",
      features: [],
    },
    {
      id: 9,
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
  }, [deviceType]);

  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //     slidesToSlide: 2,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //     slidesToSlide: 1,
  //   },
  // };

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
              How it Works
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
              What's Included
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
              <div className="sub-heading"> The Life of </div>
              <h1 className="main-heading"> Betty </h1>
              <h1 className="main-heading"> Rollin </h1>
            </div>
            <div
              className="heading-content-container"
              style={{ backgroundColor: "white" }}
            >
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
                <span style={{ fontWeight: "bold" }}>Spouse:</span> Harold Edwards
              </p>
              <p>
                <br></br>
                Proudly sponsored by Mary Thompson, with contributions from the
                Rollin family.
              </p>
            </div>
          </div>
          <img
            src={bettyHeadshot}
            alt="Black and white of Betty Rollin"
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
                        buttonText={item.buttonText}
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
