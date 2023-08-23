import React, { useState } from "react";

const FirstHoverCard = () => {
  const [clicked, setClicked] = useState(false);

  const redirectToArtistTrackerApp = () => {
    if (clicked) {
      window.location.href = "https://artist-tracker.vercel.app/";
    }
  };

  const cardImage = "https://i.imgur.com/o7gFhhc.png"; // Update the path to your image

  console.log(clicked);

  return (
    <div className="card" data-color="blue">
      {clicked ? (
        <div className="">
          <div>
            <div className="z-30 w-full h-full absolute">Hello</div>
            <div
              onClick={() => {
                redirectToArtistTrackerApp();
                console.log(clicked);
              }}
              className="bg-red-500 absolute z-10 h-full w-full opacity-50"
            />
          </div>
        </div>
      ) : (
        <div>
          <div>
            <div className="z-30 w-full h-full absolute">Goodbye</div>
            <div
              onClick={() => {
                setClicked(!clicked);
                console.log(clicked);
              }}
              className="bg-red-500 absolute z-10 h-full w-full opacity-10"
            />
          </div>
        </div>
      )}

      <div>
        <img
          class="card-front-image card-image  ease-in"
          alt="Card Front"
          src={cardImage}
          onClick={() => {
            redirectToArtistTrackerApp();
            console.log(clicked);
          }}
        />
      </div>

      {/* <div>
        <button className="text-white" onClick={() => setClicked(!clicked)}>
          Hi
        </button>
      </div> */}

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
