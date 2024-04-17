import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import CarouselCard from "./CarouselCard";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import MargaretThompson from "../images/margaret-thompson.png";
import EarlyLife from "../images/early-life.png";
import CollegeLife from "../images/college-life.png";
import CareerAndCommunity from "../images/career-and-community.png";
import { getOriginalCounterPart } from "react-multi-carousel/lib/utils";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./TestDemo.css"; // Assume you have corresponding CSS for styling
const TestDemo = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/home");
  };

  const carouselRef = useRef();

  const handleAfterChange = (currentSlideIndex) => {
    if (carouselRef.current) {
      // const newIndex = getOriginalCounterPart(index, carouselEl.current.state, carouselEl.current.props.children) // get the new index back after clone

      const originalSlideIndex = getOriginalCounterPart(
        carouselRef.current.state.currentSlide,
        carouselRef.current.state,
        carouselRef.current.state.currentSlide
      );
      console.log(originalSlideIndex);
      setActiveIndex(originalSlideIndex);
    }
  };

  const changeSlide = (previousSlide, currentSlide, dataSize) => {
    let activeSlide = 0;
    // right arrow
    if (previousSlide < currentSlide)
      activeSlide = currentSlide - 2 === dataSize ? 0 : currentSlide - 2;
    // left arrow
    else
      activeSlide =
        currentSlide +
        (currentSlide <= dataSize && currentSlide >= 2 ? -2 : dataSize - 2);
    setActiveIndex(activeSlide);
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    className: "center",
    initialSlide: 1,
    centerMode: true,
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
    },
    {
      id: 3,
      imageUrl: CareerAndCommunity,
      years: "1961-1970",
      title: "Career & Community",
      features: ["Teaching high school", "Volunteering with gardening"],
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
                Proudly sponsored by Mary Thompson, with interviews by Lily
                Jane.
              </p>
            </p>
          </div>
        </div>
        <div className="life-chapters-container">
          <h1 style={{ marginBottom: "30px" }}>Life Chapters</h1>
          <div className="carousel-container">
            {" "}
            {/* <div
              style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}
            >
              <Carousel
                ref={carouselRef}
                swipeable={true}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                afterChange={(previousSlide, { currentSlide }) =>
                  changeSlide(previousSlide, currentSlide, items.length)
                }
              >
                {items.map((item, index) => {
                  const isCenter = index === activeIndex;
                  console.log(activeIndex);
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
                      />
                      {isCenter && (
                        <button className="learn-more">Learn More</button>
                      )}
                    </div>
                  );
                })}
              </Carousel>
            </div>*/}
          </div>
          <div className="carousel-container">
            <div
              style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}
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

export default TestDemo;
