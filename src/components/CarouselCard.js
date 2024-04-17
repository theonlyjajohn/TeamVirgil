import React from "react";
import "./CarouselCard.css"; // Assume you have corresponding CSS for styling

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
        {items.map((item) => (
          <p class="bulleted"> {item} </p>
        ))}
      </div>
    </div>
  );
}

export default CarouselCard;
