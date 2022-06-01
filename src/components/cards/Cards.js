import React from "react";
import './styles.css';

export const Cards = ({ data }) => {
  return (
    <article className="card-box">
      {data && data.length ? data.map(card =>
        <article className="card-content" key={card.sku}>
          <img className="card-img" alt="houseImage" src={"/" + card.img.product} />
          <h3 className="product-name">{card.title}</h3>
          <p className="product-description">{card.description}</p>
          <p className="beds">{card.beds}</p>
          <p className="host-type">{card.host}</p>
        </article>
      ) : "loading..."}
    </article>
  )
}