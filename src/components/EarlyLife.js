import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
// import CarouselCard from "./CarouselCard";
// import MargaretThompson from "../images/margaret-thompson.png";
// import CollegeLife from "../images/college-life.png";
import MargaretThompsonLarge from "../images/m-thompson-large.png";
// import CareerAndCommunity from "../images/career-and-community.png";
import IthacaImage from "../images/ithaca.jpg";
import ChildrenPlaying from "../images/playing.jpg";

import "./IndividualDemoPage.css";

const EarlyLife = () => {
  const headingRef = useRef(null);
  const navigate = useNavigate();

  const goToWaitList = () => {
    navigate("/home#waitlist");
    // Any other actions that do not depend on navigation completion
  };

  // const navigate = useNavigate();

  // const goToHome = () => {
  //   navigate("/home");
  // };

  // function SampleNextArrow(props) {
  //   const { className, onClick } = props;
  //   return (
  //     <div className={className} style={{ ...styling }} onClick={onClick} />
  //   );
  // }

  // const SamplePrevArrow2 = (props) => {
  //   const { className, onClick } = props;
  //   return (
  //     <div className={className} onClick={onClick} style={{ ...styling }}>
  //       hello
  //     </div>
  //   );
  // };

  // const styling = {
  //   color: "black",
  // };

  // const settings = {
  //   initialSlide: 1,
  //   centerMode: true,
  //   infinite: false,
  //   centerPadding: "60px",
  //   slidesToShow: 3,
  //   speed: 500,
  //   arrows: true,
  //   nextArrow: <SampleNextArrow />,
  //   prevArrow: <SamplePrevArrow2 />,
  //   beforeChange: (current, next) => setActiveIndex(next), // Update active index on slide change
  // };

  // const items = [
  //   {
  //     id: 0,
  //     imageUrl: "",
  //     years: "",
  //     title: "",
  //     features: [],
  //   },
  //   {
  //     id: 1,
  //     imageUrl: EarlyLife,
  //     years: "1938-1956",
  //     title: "Early Life in Ithaca",
  //     features: ["My brother", "Playing in the woods", "Family values"],
  //   },
  //   {
  //     id: 2,
  //     imageUrl: CollegeLife,
  //     years: "1957-1961",
  //     title: "College Years",
  //     features: [
  //       "Studying English Literature",
  //       "Sorority life",
  //       "First relationship",
  //     ],
  //   },
  //   {
  //     id: 3,
  //     imageUrl: CareerAndCommunity,
  //     years: "1961-1970",
  //     title: "Career & Community",
  //     features: ["Teaching high school", "Volunteering with gardening"],
  //   },
  //   {
  //     id: 4,
  //     imageUrl: "",
  //     years: "",
  //     title: "",
  //     features: [],
  //   },
  //   {
  //     id: 0,
  //     imageUrl: "",
  //     years: "",
  //     title: "",
  //     features: [],
  //   },
  // ];

  // const [activeIndex, setActiveIndex] = useState(1);

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

  const styles = {
    banner: {
      background:
        "linear-gradient(to right, #FEE2C3, #F6C062)" /* Adjust the colors as needed */,
      padding: "20px 60px",
      fontFamily: "Poppins, sans-serif",
      textAlign: "center",
    },
    link: {
      textDecoration: "none",
      color: "black",
      borderBottom: "2px solid black",
    },
  };

  return (
    <div className="homepage">
      <div className="banner" ref={headingRef}>
        You're viewing a demo of our digital biography feature.{" "}
        <a href="/" className="link">
          Return to main site
        </a>{" "}
        to start your own journey.
      </div>
      <main className="main-content">
        <div>
          <div>
            <div className="header-container">
              <div className="name-heading-container">
                {" "}
                <div className="name-heading">Betty Rollin</div>
              </div>

              <div className="location-date-heading">
                <h1>Early Life in New York</h1>
                <h1>1938-1956</h1>
              </div>
            </div>
            <div
              className="media-container"
              style={{ maxWidth: "1120px", margin: "0 auto" }}
            >
              <div class="video-container">
                <iframe
                  title="youtube"
                  width="1120"
                  height="630"
                  src="https://www.youtube.com/embed/jkn9HcVPJJE?start=13&autoplay=1&mute=0"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="family-container">
                <div className="family-heading">Family Background</div>
                <div className="family-content">
                  Betty grew up in Lincoln Park, a suburb of Yonkers. She was an
                  only child with a Ukrainian father who adored American and an
                  ambitious mother who was always striving for more
                </div>
              </div>
              {/* Flex container for images */}
              <div
                className="images-container"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "20px",
                }}
              >
                <div className="photo-container">
                  <img
                    src={MargaretThompsonLarge}
                    alt="first"
                    style={{ width: "80%", height: "auto" }}
                  />
                  <figcaption style={{ textAlign: "center" }}>
                    Betty's High School Photo, uploaded by Aunt Catherine.
                  </figcaption>
                </div>
                <div className="photo-container">
                  <img
                    src={ChildrenPlaying}
                    alt="children"
                    style={{ width: "80%", height: "auto" }}
                  />
                  <figcaption style={{ textAlign: "center" }}>
                    Betty playing as a young girl.
                  </figcaption>
                </div>
                <div className="photo-container">
                  <img
                    src={IthacaImage}
                    alt="second"
                    style={{ width: "99%", height: "auto" }}
                  />
                  <figcaption style={{ textAlign: "center" }}>
                    1938 Postcard of Cornell University, in Ithaca.
                  </figcaption>
                </div>
              </div>
              <button onClick={goToWaitList} className="nav-link-waitlist">
                Back to life chapters
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EarlyLife;
