import React from "react";
import Tour from "./Tour";
import App from "./App";
const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underLine"></div>
      </div>
      {tours.map((tour) => {
        return <Tour key={tour.id} tour={tour} removeTour={removeTour} />;
      })}
    </section>
  );
};

export default Tours;
