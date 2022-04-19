import React from 'react';
import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react";

export default function Intro() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: false,
            backDelay: 1500,
            backSpeed: 40,
            strings: ["SaaS Professional..", "Punk Rock Enthusiast..", "Not a Doctor."],
        });
    }, []);



    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/tour.png" alt="Ben" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Ben Gilman</h1>
                    <h3><span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                <img src="assets/down-arrow2.png" alt="arrow" />
                </a>
            </div>       
        </div>
    );
}