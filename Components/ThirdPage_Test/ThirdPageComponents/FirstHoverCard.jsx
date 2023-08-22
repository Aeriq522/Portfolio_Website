import React from "react";
import cardImage from "./ArtistTrackerScreenshot.png"; // Update the path to your image

const FirstHoverCard = () => {
  return (
    <div className="card" data-color="blue">
      <img
        class="card-front-image card-image"
        alt="Card Front"
        src={cardImage}
      />
      {/* PICTURE STILL MISSING WHY */}
      <div class="card-faders">
        <img class="card-fader card-image" alt="Card Front" src={cardImage} />
        <img class="card-fader card-image" alt="Card Front" src={cardImage} />
        <img class="card-fader card-image" alt="Card Front" src={cardImage} />
        <img class="card-fader card-image" alt="Card Front" src={cardImage} />
        <img class="card-fader card-image" alt="Card Front" src={cardImage} />
        <img class="card-fader card-image" alt="Card Front" src={cardImage} />
        <img class="card-fader card-image" alt="Card Front" src={cardImage} />
        <img class="card-fader card-image" alt="Card Front" src={cardImage} />
      </div>
    </div>
  );
};

export default FirstHoverCard;
