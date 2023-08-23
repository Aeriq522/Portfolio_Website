import React from "react";

const ThirdCardHover = () => {
  const redirectToPokemonApp = () => {
    // Change the URL to the desired website
    window.location.href = "https://pokemon-card-0522.web.app/";
  };

  
  const cardImage =
    "https://i.imgur.com/GUMBnxU.png"; // Update the path to your image



  return (
    <div class="card" data-color="brown" onClick={redirectToPokemonApp}>
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

export default ThirdCardHover;
