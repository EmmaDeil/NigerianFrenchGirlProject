import React, { useState } from "react";
import "./FlipCards.css"; // put your CSS here

const FlipCards = () => {
  const [reduceMotion, setReduceMotion] = useState(false);

  const cards = [
    {
      id: 1,
      title: "Lorem Ipsum Dolor",
      img: "https://source.unsplash.com/SVVCP23JFyg/200x100",
      alt: "Coloured smoke",
      author: "Author Name",
    },
    {
      id: 2,
      title: "Lorem Ipsum Dolor",
      img: "https://source.unsplash.com/E8Ufcyxz514/200x100",
      alt: "Coloured waves",
      author: "Author Name",
    },
    {
      id: 3,
      title: "Lorem Ipsum Dolor",
      img: "https://source.unsplash.com/y2lCFKGZEXI/200x100",
      alt: "More coloured smoke",
      author: "Author Name",
    },
  ];

  return (
    <main>
      <div className="wrapper">
        <article className="flow">
          <h1>Honouring reduced motion preference</h1>
          <figure className="callout">
            <p>
              Toggle the checkbox to see how you can reduce motion, but still
              present a nice animation.
            </p>
          </figure>

          <label>
            Reduce animation
            <input
              type="checkbox"
              role="switch"
              checked={reduceMotion}
              onChange={() => setReduceMotion(!reduceMotion)}
            />
          </label>

          <div className={`container ${reduceMotion ? "reduce-motion" : ""}`}>
            {cards.map((card) => (
              <div className="card" tabIndex="0" key={card.id}>
                <div className="box face front flow">
                  <h2>{card.title}</h2>
                  <img src={card.img} alt={card.alt} />
                  <p>by {card.author}</p>
                </div>
                <div className="face back">
                  <button>Read More</button>
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </main>
  );
};

export default FlipCards;
