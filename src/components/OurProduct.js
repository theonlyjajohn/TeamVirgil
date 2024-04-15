import React from 'react';
//import './HomePage.css'; // Assume you have corresponding CSS for styling

function OurProduct() {
  return (
    <div className="homepage">
      
      <main className="main-content">
        <section className="hero">
          <h1>Test Test, <br />One memory at a time.</h1>
          <p>AI-powered biographies to capture and curate your loved one's life story.</p>
          <button className="cta-button">How It Works</button>
        </section>
        <section className="images">
          <img src="elderly-couple.png" alt="Elderly couple" className="main-image" />
          <img src="children-playing.png" alt="Children playing" className="secondary-image" />
        </section>
      </main>
    </div>
  );
}

export default OurProduct;