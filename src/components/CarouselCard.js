import React from "react";
import "./CarouselCard.css"; // Assume you have corresponding CSS for styling

function CarouselCard({ years, imageUrl, title, items }) {
  const hasItems = items && items.length > 0;
  console.log(hasItems);

  const cardClass = `carousel-card ${!hasItems ? "border-transparent" : ""}`;

  return (
    <div className={cardClass}>
      <div className="carousel-card-header">
        <span className="years">{years}</span>
      </div>
      <div className="carousel-card-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="carousel-card-body">
        <h3>{title}</h3>
        {items.map((item, index) => (
          <p key={index} className="bulleted">
            {item}
          </p> // Add a key here for each item
        ))}
      </div>
    </div>
  );
}

export default CarouselCard;
