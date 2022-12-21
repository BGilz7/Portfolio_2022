import React from "react";
import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: "1",
      icon: "./assets/hologic.png",
      name: "Taylor Theodore",
      title: "Account Executive",
      desc: "Ben is fantastic team player. As a roommate & close friend, I am exposed daily to his hard work & dedication as they are unmatched. He always applies 110% to accomplish whatever goal is at hand, and I would recommend him without reservation.",
      img: "./assets/taylor.jpg",
    },
    {
      id: "2",
      icon: "./assets/steth.png",
      name: "David Gilman",
      title: "Physican",
      desc: "Growing up with Ben as a brother, satisfactory was never quite enough. He saw my potential and pushed me to be the best I can be. I never would have made it where I am today without him, even though he constantly reminds me of his higher SAT score.",
      img: "./assets/david.png",
      featured: true,
    },
    {
      id: "3",
      icon: "./assets/tech.png",
      name: "Sahil Patel",
      title: "Senior Solution Consultant",
      desc: "Ben has really found his niche working in SaaS. He is a technically minded individual with the personality and charisma to bring any team closer together.",
      img: "./assets/sahil.png",
    },
  ];

  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/quotes.png" className="left" alt="" />
              <img src={d.img} className="user" alt="" />
              <img src={d.icon} className="right" alt="" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
