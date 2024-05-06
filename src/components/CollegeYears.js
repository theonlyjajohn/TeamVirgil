import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import CarouselCard from "./CarouselCard";
// import MargaretThompson from "../images/margaret-thompson.png";
// import CollegeLife from "../images/college-life.png";
// import MargaretThompsonLarge from "../images/m-thompson-large.png";
// import CareerAndCommunity from "../images/career-and-community.png";
import "./IndividualDemoPage.css";

const CollegeYears = () => {
  const headingRef = useRef(null);

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

  return (
    <div className="homepage">
      <div className="banner">
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
                <div className="name-heading">Betty Rollins</div>
              </div>

              <div className="location-date-heading">
                <h1>College Life at Sarah Lawrence College</h1>
                <h1>1957-1961</h1>
              </div>
            </div>
            <div class="video-container-youtube">
              <iframe
                title="youtube video"
                width="1120"
                height="630"
                src="https://www.youtube.com/embed/jkn9HcVPJJE"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CollegeYears;
