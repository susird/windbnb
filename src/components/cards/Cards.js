import React from "react";
import './styles.css';

export const Cards = ({ data }) => {
  return (
    <article className="card-box">
      {data && data.length ? data.map(card =>
        <article className="card-content" key={card.sku}>
          <img className="card-img" alt="houseImage" src={"/" + card.img.product} />
          <div className="details-container">
            <div className="details-container-range">
              <p className={card.host !== "" && "host-type"}>{card.host}</p>
              <p className="product-description">{card.description}{card.beds !== "" && ' . ' + card.beds}</p>
              <img className="card-img" alt="houseImage" src={"/" + card.score.img} />
              <p className="score">{card.score.rating}</p>
            </div>
            <h3 className="product-name">{card.title}</h3>
          </div>
        </article>
      ) : "loading..."}
    </article>
  )
}