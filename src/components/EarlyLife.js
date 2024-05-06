import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import MargaretThompsonLarge from "../images/m-thompson-large.png";
import IthacaImage from "../images/ithaca.jpg";
import ChildrenPlaying from "../images/playing.jpg";
import ballet1 from "../images/ballet1.png";
import ballet2 from "../images/ballet2.png";
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import myAmbitiousMother from "../images/my-ambitious-mother.png";
import makeupClasses from "../images/makeup-classes-on-fifth-avenue.png";
import iceCream from "../images/ice-cream-at-addie-valens.png";
import myContentedFather from "../images/my-contented-father.png";
import grewUpInLincolnPark from "../images/grew-up-in-lincoln-park.png";

import "./IndividualDemoPage.css";

const EarlyLife = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Ballet Classes");

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  const headingRef = useRef(null);
  const navigate = useNavigate();

  const goToWaitList = () => {
    navigate("/home#waitlist");
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

  const styling = {
    color: "black",
  };

  const settings = {
    initialSlide: 1,
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow2 />,
  };

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
              <div className="carousel-container">
                <div
                  style={{
                    width: "80%",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <Slider {...settings}>
                    <div>
                      <img
                        src={myAmbitiousMother}
                        alt="my ambitious mother"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <div>
                      <img
                        src={grewUpInLincolnPark}
                        alt="children"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <div>
                      <img
                        src={myContentedFather}
                        alt="children"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <div>
                      <img
                        src={makeupClasses}
                        alt="my ambitious mother"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <div>
                      <img
                        src={iceCream}
                        alt="my ambitious mother"
                        style={{ width: "90%" }}
                      />
                    </div>
                  </Slider>
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
              ></div>
              <div className="family-container">
                <div className="family-heading">Mother's Influence</div>
                <div className="family-content">
                  Her mother was a significant influence, pushing her towards
                  numerous educational and extracurricualr activities to ensure
                  she had every possible advantage.
                </div>
              </div>
              <div>
                <div className="dropdown">
                  {!isOpen && (
                    <button
                      onClick={toggleDropdown}
                      className="dropdown-toggle"
                    >
                      {selectedValue}{" "}
                      <span className="arrow">{isOpen ? "▲" : "▼"}</span>
                    </button>
                  )}
                  {isOpen && (
                    <div>
                      <div className="gray-box-chapter">
                        <div className="inner-gray-box-chapter">
                          <div className="gray-box-text-container">
                            <div className="gray-box-header">
                              {" "}
                              Ballet Classes
                            </div>
                            <div className="gray-box-content">
                              {" "}
                              Every Saturday, I attended ballet class with a
                              teacher who, as a Christian Scientist, ignored
                              pain. There, I learned not just to dance but to
                              embody discipline and grace under pressure.{" "}
                            </div>
                          </div>
                          <div className="gray-box-image-container">
                            <img src={ballet1} alt="Down arrow" />
                            <img src={ballet2} alt="Down arrow" />
                          </div>
                        </div>
                        <button
                          onClick={toggleDropdown}
                          className="dropdown-toggle"
                        >
                          {" "}
                          ▲
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="inner-gray-box-chapter">
                <div className="gray-box-text-container">
                  <div className="gray-box-header"> Ballet Classes</div>
                  <div className="gray-box-content">
                    {" "}
                    Every Saturday, I attended ballet class with a teacher who,
                    as a Christian Scientist, ignored pain. There, I learned not
                    just to dance but to embody discipline and grace under
                    pressure.{" "}
                  </div>
                </div>
                <div className="gray-box-image-container">
                  <img src={ballet1} alt="Down arrow" />
                  <img src={ballet2} alt="Down arrow" />
                </div>
              </div>
              <div className="inner-gray-box-chapter">
                <div className="gray-box-text-container">
                  <div className="gray-box-header"> Theater and Dramatics</div>
                  <div className="gray-box-content">
                    {" "}
                    In her dramatics class, Betty learned to express herself
                    through speaking and acting. Her journey toward becoming a
                    professional was gently steered away by her mother, who
                    wanted these experiences to enrich her life rather than
                    transform her into a stage child.{" "}
                  </div>
                </div>
                <div className="gray-box-image-container">
                  <img src={ballet1} alt="Down arrow" />
                  <img src={ballet2} alt="Down arrow" />
                </div>
              </div>
              <div className="inner-gray-box-chapter">
                <div className="gray-box-text-container">
                  <div className="gray-box-header"> Writing and Grammar</div>
                  <div className="gray-box-content">
                    {" "}
                    Under the strict but nurturing guidance of seasoned editors,
                    she learned to refine her voice and embrace the
                    vulnerability in her storytelling.{" "}
                  </div>
                </div>
                <div className="gray-box-image-container">
                  <img src={ballet1} alt="Down arrow" />
                  <img src={ballet2} alt="Down arrow" />
                </div>
              </div>
              <div className="remarkable-mother-container">
                <div className="remarkable-mother-content">
                  The remarkable thing about my mother was that, on top of all
                  that push, she was a kind, loving person. She cared about
                  others, so I learned to be someone who is interested in and
                  cares about other people. I got that from her.
                </div>
              </div>

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
              <button
                onClick={goToWaitList}
                className="nav-link-waitlist"
                style={{ marginBottom: "30px" }}
              >
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
