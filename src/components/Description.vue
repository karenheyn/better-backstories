<template>
  <div class="hello">
    <h1>How It Works</h1>
    <div class="iframe-outline">
      <div class="iframe-container">
        <iframe
          class="how-to-video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/2xTofSYp1Fc"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <img class="cards" src="../assets/Cards.png" alt="warrior" />

    <img class="warrior" src="../assets/Tomas_Caraballo1.png" alt="warrior" />
    <div class="outer-wrapper">
      <div class="inner-wrapper">
        <p>
          The cards can be used all together, or in smaller groups. Feel free to
          customize your deck by removing cards you don’t want to encounter.
        </p>
        <p>
          When using with a role playing game, it is recommended you use the
          cards with your Gamemaster so they can help you incorporate your
          backstory into their plotlines.
        </p>
        <p>
          You can use the deck before or after creating some details of your
          character. Sometimes developing the backstory first can help with
          character development and decisions. It can also be fun applying a
          ‘musical prodigy’ element to your Tiefling Barbarian.
        </p>
        <p>
          Shuffle the cards, then play a few face-up on a table. Five cards are
          a good place to start, but you can use as many or as few cards as you
          like.
        </p>
        <p>
          Interpret the cards however you like. You can use the Title alone,
          developing your own interpretation of how it relates to your
          character’s backstory. Flavor Text provides some additional insight
          into the card, and Suggestions provide even more options. You can roll
          a d10 and compare to the chart, or play another card face down and use
          the number on the back. You may also pick a Suggestion you like or
          ignore them all and make up your own.
        </p>
        <p>
          Use the details on the cards to develop your backstory. You can keep
          to the text as written, or use them as a guideline to jump start your
          imagination, and develop a unique story for your character.
        </p>
      </div>
    </div>
    <img class="lucidra" src="../assets/Lucidra.png" alt="warrior" />
  </div>
</template>

<script>
export default {
  name: "Description",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
h1 {
  font-family: "IM Fell English", serif;
  color: #d2bf9e;
  font-size: 6.5vw;
  font-weight: 300;
  text-align: center;
  text-shadow: 1px 1px 1px black;
}
.outer-wrapper {
  background: #d2bf9e;
  width: 70vw;
  margin: 0 auto;
  padding: 60px;
  margin-top: 60px;
}
.inner-wrapper {
  background: #e3dcdc;
  padding: 30px 25px;
  box-shadow: 0px 1px 3px #888888;
}

p {
  text-align: left;
  margin: 60px 40px;
  font-family: "Oswald", sans-serif;
  color: #053475;
  font-size: 2.4vw;
}
.warrior {
  height: 600px;
  float: left;
  clip-path: polygon(50% 0%, 68% 55%, 100% 66%, 50% 100%, 0 100%, 0 0);
  shape-outside: polygon(50% 0%, 61% 55%, 100% 82%, 50% 100%, 0 100%, 0 0);
  margin: 300px 0 0 0;
}
.cards {
  float: right;
  height: 300px;
  margin: -70px 35px 0 0;
}
.lucidra {
  position: relative;
  float: right;
  height: 400px;
  bottom: 309px;
  clip-path: polygon(40% 0, 98% 0, 100% 100%, 0 100%, 0 51%, 43% 35%);
  shape-outside: polygon(40% 0, 98% 0, 100% 100%, 0 100%, 0 51%, 43% 35%);
  -webkit-shape-outside: polygon(
    40% 0,
    98% 0,
    100% 100%,
    0 100%,
    0 51%,
    43% 35%
  );
  -webkit-clip-path: polygon(40% 0, 98% 0, 100% 100%, 0 100%, 0 51%, 43% 35%);
}

.iframe-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;
}
.iframe-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.iframe-outline {
  margin: 75px auto;
  width: 70%;
  padding: 15px;
  background: #1d5574;
}
.hello::after {
  content: " "; /* Older browser do not support empty content */
  visibility: hidden;
  display: block;
  height: 0;
  /* clear: both; */
}

@media only screen and (max-width: 600px) {
  h1 {
    margin: 30px;
    font-size: 43px;
  }
  .cards {
    height: 200px;
    margin: -40px 0 0 0;
  }
  .warrior {
    height: 300px;
    margin: 168px 0 0 0;
  }
  .lucidra {
    height: 200px;
    bottom: 127px;
  }
  .outer-wrapper {
    width: 80vw;
    padding: 35px;
  }
  .inner-wrapper {
    padding: 15px;
  }
  p {
    margin: 60px 26px;
    font-size: 1rem;
  }
  .iframe-outline {
    width: 85vw;
    padding: 9px;
  }
}
</style>
