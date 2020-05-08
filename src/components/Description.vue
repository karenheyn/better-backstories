<template>
  <div class="hello">
    <h1>How It Works</h1>
    <img class="warrior" src="../assets/Tomas_Caraballo1.png" alt="warrior" />
    <div class="outer-wrapper">
      <div class="inner-wrapper">
        <p>The cards can be used all together, or in smaller groups. Feel free to customize your deck by removing cards you don’t want to encounter.</p>
        <p>When using with a role playing game, it is recommended you use the cards with your Gamemaster so they can help you incorporate your backstory into their plotlines.</p>
        <p>
          You can use the deck before or after creating some details of your character. Sometimes developing the backstory first can help with character development and decisions. It can also be fun applying a ‘musical prodigy’ element to
          your Tiefling Barbarian.
        </p>
        <p>Shuffle the cards, then play a few face-up on a table. Five cards are a good place to start, but you can use as many or as few cards as you like.</p>
        <p>Interpret the cards however you like. You can use the Title alone, developing your own interpretation of how it relates to your character’s backstory. Flavor Text provides some additional insight into the card, and Suggestions provide even more options. You can roll a d10 and compare to the chart, or play another card face down and use the number on the back. You may also pick a Suggestion you like or ignore them all and make up your own.</p>
        <p>Use the details on the cards to develop your backstory. You can keep to the text as written, or use them as a guideline to jump start your imagination, and develop a unique story for your character.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Description",
  props: {
    msg: String
  }
};
</script>

<style scoped>
h1 {
  font-family: "IM Fell English", serif;
  color: #d2bf9e;
  font-size: 6.5vw;
  font-weight: 300;
  text-align: center;
  margin: 10px 65px;
  text-shadow: 1px 1px 1px black;
  margin: 0 0 30px 0;
}
.outer-wrapper {
  background: #d2bf9e;
  width: 70vw;
  margin: 0 auto;
  padding: 60px;
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
  position: absolute;
  height: 600px;
  left: 50px;
}
</style>