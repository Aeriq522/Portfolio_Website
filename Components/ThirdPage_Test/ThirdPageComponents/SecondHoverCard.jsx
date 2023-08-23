import React from "react";

const SecondHoverCard = () => {
  const redirectToSiteSurveyApp = () => {
    // Change the URL to the desired website
    window.location.href = "https://site-survey-code.vercel.app/";
  };

  const cardImage =
    "https://i.imgur.com/gyN4eBz.png"; // Update the path to your image

  return (
    <div
      class="card"
      data-color="green"
      onClick={redirectToSiteSurveyApp}
    >
      <img
        class="card-front-image card-image"
        src={cardImage}
      />
      <div class="card-faders">
        <img
          class="card-fader card-image"
          src={cardImage}
        />
        <img
          class="card-fader card-image"
          src={cardImage}
        />
        <img
          class="card-fader card-image"
          src={cardImage}
        />
        <img
          class="card-fader card-image"
          src={cardImage}
        />
        <img
          class="card-fader card-image"
          src={cardImage}
        />
        <img
          class="card-fader card-image"
          src={cardImage}
        />
        <img
          class="card-fader card-image"
          src={cardImage}
        />
        <img
          class="card-fader card-image"
          src={cardImage}
        />
      </div>
    </div>
  );
};

export default SecondHoverCard;
