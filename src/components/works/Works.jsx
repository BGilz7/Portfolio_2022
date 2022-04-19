import React from 'react';
import "./works.scss"
import { useState } from "react"

export default function Works() {
        const [ currentSlide,setCurrentSlide ] = useState(0)
    const data = [
        {
            id: "1",
            icon: "./assets/bagel.png",
            title: "Bens Stuff",
            desc: "Lorem Ipsum is simply dummy text of the printing industry.",
            img: "./assets/ben.png"
        },
        {
            id: "2",
            icon: "./assets/bagel.png",
            title: "Cool Stuff",
            desc: "Lorem Ipsum is simply dummy text of the printing industry.",
            img: "./assets/ben.png"
        },
        {
            id: "3",
            icon: "./assets/bagel.png",
            title: "Awesome Stuff",
            desc: "Lorem Ipsum is simply dummy text of the printing industry.",
            img: "./assets/ben.png"
        },
    ];

    const handleClick = (way)=>{
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) :
        setCurrentSlide(currentSlide<data.length - 1 ? currentSlide + 1 : 0)
    }
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
                                    <img src={d.icon} alt=""/>
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>{d.desc}</p>
                                    <span>Projects</span>
                                </div>
                            </div>
                        <div className="right">
                            <img src={d.img} alt="" />
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <img src="assets/side_arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")} />
            <img src="assets/side_arrow.png" className="arrow right" alt="" onClick={()=>handleClick("right")}/>
        </div>
    )      
}