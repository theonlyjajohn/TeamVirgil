import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import CarouselCard from "./CarouselCard";
import MargaretThompson from "../images/margaret-thompson.png";
import CollegeLife from "../images/college-life.png";
import MargaretThompsonLarge from "../images/m-thompson-large.png";
import CareerAndCommunity from "../images/career-and-community.png";
import IthacaImage from "../images/ithaca.jpg";
import ChildrenPlaying from "../images/playing.jpg";

import "./IndividualDemoPage.css";

const EarlyLife = () => {
  const headingRef = useRef(null);

  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/home");
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
      <main className="main-content">
        <div>
          <div>
            <div className="header-container">
              <div className="name-heading-container">
                {" "}
                <div className="name-heading">Betty Rollins</div>
              </div>

              <div className="location-date-heading">
                <h1>Early Life in New York</h1>
                <h1>1938-1956</h1>
              </div>
            </div>
            <div className="media-container" style={{ maxWidth: '1120px', margin: '0 auto' }}>
              <div class="video-container">
                <iframe
                  width="1120"
                  height="630"
                  src="https://www.youtube.com/embed/jkn9HcVPJJE"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              {/* Flex container for images */}
              <div className="images-container" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                <div className="photo-container">
                  <img src={MargaretThompsonLarge} alt="Description of First Image" style={{ width: '80%', height: 'auto' }} />
                  <figcaption style={{ textAlign: 'center' }}>Betty's mother, uploaded by Aunt Catherine.</figcaption>
                </div>
                <div className="photo-container">
                  <img src={ChildrenPlaying} alt = "children" style={{ width: '80%', height: 'auto' }} />
                  <figcaption style={{ textAlign: 'center' }}>Betty playing as a young girl.</figcaption>
                </div>
                <div className="photo-container">
                  <img src={IthacaImage} alt="Description of Second Image" style={{ width: '99%', height: 'auto' }} />
                  <figcaption style={{ textAlign: 'center' }}>1938 Postcard of Cornell University, in Ithaca.</figcaption>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EarlyLife;
