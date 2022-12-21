import React from "react";
import "./works.scss";
import { useState } from "react";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/numerated.png",
      title: "Numerated",
      desc: "Building, demoing, and delivering financial software solutions to banks.",
      img: "./assets/ngt.png",
    },
    {
      id: "2",
      icon: "./assets/coding.png",
      title: "Coding Temple",
      desc: "Attended a coding bootcamp learning the fundamentals of software engineering. Focus in python, javascript, SQL, HTML/CSS.",
      img: "./assets/codingtemp.jpg",
    },
    {
      id: "3",
      icon: "./assets/um.png",
      title: "UMass Amherst",
      desc: "Earned a bachelors degree in Kinesiology with a focus on Pre-Med, working both as a research assistant and teaching assisant.",
      img: "./assets/umass.png",
    },
    {
      id: "4",
      icon: "./assets/atlassian.png",
      title: "Atlassian",
      desc: "Colding calling, 100+ dials per day using the Sandler Selling System.",
      img: "./assets/opsgenie.png",
    },
    {
      id: "5",
      icon: "./assets/stocks.jpg",
      title: "Morgan Stanley",
      desc: "Supporting high net worth clients and moving money around the world.",
      img: "./assets/ms.jpg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span></span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/side_arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/side_arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick("right")}
      />
    </div>
  );
}
