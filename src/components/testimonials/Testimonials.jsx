import React from 'react';
import "./testimonials.scss"

export default function Testimonials() {
    const data = [
        {
            id: "1",
            icon: "./assets/bagel.png",
            name: "Bobby Shnuts",
            title: "Baller",
            desc: "Lorem Ipsum is simply dummy text of the printing industry.",
            img: "./assets/ben.png"
        },
        {
            id: "2",
            icon: "./assets/bagel.png",
            name: "Billy Chang",
            title: "Beast",
            desc: "Lorem Ipsum is simply dummy text of the printing industry.",
            img: "./assets/ben.png",
            featured: true

        },
        {
            id: "3",
            icon: "./assets/bagel.png",
            name: "Grittle Nelson",
            title: "CEO",
            desc: "Lorem Ipsum is simply dummy text of the printing industry.",
            img: "./assets/ben.png"
        },
    ];
    
    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {data.map((d) => (
                <div className={d.featured ? "card featured" : "card"}>
                    <div className="top">
                    <img src="assets/down-arrow2.png" className="left" alt="" />
                    <img src={d.img} className="user" alt="" />
                    <img src={d.icon} className="right" alt="" />
                    </div>
                    <div className="center">
                        {d.desc}
                    </div>
                    <div className="bottom">
                        <h3>{d.name}</h3>
                        <h4>{d.title}</h4>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}