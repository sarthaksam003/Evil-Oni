import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import one from "./one.jpg";
import two from "./two_.webp";
import three from "./three_.webp";
import * as HiIcons from "react-icons/hi";
import "./ControlledCarousel.css";
function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel
      activeIndex={index}
      // style={{ width: "95rem", height: "40rem" }}
      onSelect={handleSelect}
      indicators={false}
      id="carousel-body"
    >
      <Carousel.Item>
        <img className="d-block w-100" src={one} alt="First slide" />
        <Carousel.Caption>
          <div className="actions">
            <Link
              to="/product/eoubj"
              style={{ textDecoration: "none", marginLeft: "11rem" }}
            >
              <button
                className="submit button-text"
                style={{
                  transform: "translatex(30rem)",
                  backgroundColor: "black",
                }}
              >
                <p style={{ paddingTop: "1rem", fontSize: "2rem" }}>
                  Check it out!
                </p>
              </button>
            </Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={two} alt="Second slide" />

        <Carousel.Caption style={{ transform: "translateY(1.7rem)" }}>
          <div className="actions">
            <Link
              to="/product/tfdp"
              style={{ textDecoration: "none", marginLeft: "11rem" }}
            >
              <button
                className="submit"
                style={{
                  backgroundColor: "black",
                  fontFamily: "Bebas Neue",
                }}
              >
                <HiIcons.HiArrowNarrowLeft
                  style={{ marginTop: "0.6rem", fontSize: "2rem" }}
                />
                <p style={{ fontSize: "2rem" }}>CHECK OUT</p>
              </button>
            </Link>
            <Link to="/product/ltblp" style={{ textDecoration: "none" }}>
              <button
                className="submit"
                style={{
                  backgroundColor: "black",
                  fontFamily: "Bebas Neue",
                }}
              >
                <p style={{ fontSize: "2rem" }}>CHECK OUT</p>
                <HiIcons.HiArrowNarrowRight
                  style={{ marginTop: "0.8rem", fontSize: "2rem" }}
                />
              </button>
            </Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={three} alt="Third slide" />

        <Carousel.Caption style={{ marginTop: "1.8rem" }}>
          <div className="actions">
            <div className="actions">
              <Link
                to="/product/tdbsv"
                style={{
                  textDecoration: "none",
                  marginLeft: "23rem",
                  marginTop: "12rem",
                }}
              >
                <button
                  className="submit"
                  style={{
                    backgroundColor: "black",
                    fontFamily: "Bebas Neue",
                  }}
                >
                  <HiIcons.HiArrowNarrowLeft style={{ marginTop: "0.6rem" }} />
                  <p style={{ fontSize: "2rem" }}> CHECK&nbsp;OUT</p>
                </button>
              </Link>
              <Link
                to="/product/tdnw"
                style={{ textDecoration: "none", marginTop: "12rem" }}
              >
                <button
                  className="submit"
                  style={{
                    backgroundColor: "black",
                    fontFamily: "Bebas Neue",
                    marginLeft: "2rem",
                  }}
                >
                  <p style={{ fontSize: "2rem" }}> CHECK&nbsp;OUT</p>
                  <HiIcons.HiArrowNarrowRight style={{ marginTop: "0.6rem" }} />
                </button>
              </Link>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
