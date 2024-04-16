import React from "react";

function CarouselCard({ years, imageUrl, title, items }) {
  return (
    <div className="carousel-card">
      <div className="carousel-card-header">
        <span className="years">{years}</span>
      </div>
      <div className="carousel-card-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="carousel-card-body">
        <h3>{title}</h3>
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CarouselCard;
