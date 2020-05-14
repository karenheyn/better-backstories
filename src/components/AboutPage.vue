<template>
  <div class="hello">
    <h1>About Better Backstories</h1>
    <div class="about-div-wrapper">
      <div class="about-div">
        <img class="tiberius" src="../assets/Tiberius_McAllister.png" alt="Tiberious" />
        <p>Better Backstories was designed by James ‘Jay’ Stilipec, Tim Mazurek, and Blazbaros. It was born out of a love of developing detailed life histories for role playing characters. It was brought to life through a Kickstarter campaign and the help of 1343 backers. While only asking for $3000, Jay was thrilled to garner more than $27,000 in pledges.</p>
      </div>
    </div>
    <div class="bio-wrapper">
      <h1>Jay Stilipec’s Backstory</h1>
      <div class="bio-container-right">
        <div class="bio-inner-container-right">
          <p>I love making role-playing characters. In order to make sure each character has a unique backstory of wonder and woe, I created Better Backstories. This easy to use and easy to customize system is genre neutral, and these cards can help everyone to make better backstories. It doesn't matter if you're a novice making their first fighter, or an expert game master developing their corrupted galactic president. Better Backstories are suitable for Player Characters, Non-Player Characters, and Game Masters alike. They are designed to jump start your imagination and make your characters come to life.</p>
        </div>
      </div>
      <div class="bio-img-border-left">
        <img class="bio-img" src="../assets/Jay.jpg" alt="Jay Stillipec" />
      </div>
    </div>
    <div class="bio-wrapper">
      <h1>Jay Stilipec’s Backstory</h1>
      <div class="bio-container-left">
        <div class="bio-inner-container-left">
          <p>I love making role-playing characters. In order to make sure each character has a unique backstory of wonder and woe, I created Better Backstories. This easy to use and easy to customize system is genre neutral, and these cards can help everyone to make better backstories. It doesn't matter if you're a novice making their first fighter, or an expert game master developing their corrupted galactic president. Better Backstories are suitable for Player Characters, Non-Player Characters, and Game Masters alike. They are designed to jump start your imagination and make your characters come to life.</p>
        </div>
      </div>
      <div class="bio-img-border-right">
        <img class="bio-img" src="../assets/Jay.jpg" alt="Jay Stillipec" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
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
.about-div-wrapper {
  background: #d2bf9e;
  width: 70%;
  padding: 60px 100px 60px 40px;
  margin: 0 auto;
}
.about-div {
  background: #e3dcdc;
  padding: 60px 0 20px 30px;
}
p {
  text-align: left;
  font-family: "Oswald", sans-serif;
  color: #053475;
  font-size: 2.3vw;
  text-indent: 2em;
  display: table-cell;
  vertical-align: middle;
}
.tiberius {
  position: relative;
  float: right;
  height: 400px;
  shape-outside: ellipse();
  left: 128px;
  margin-left: -128px;
}
.about-div::after {
  content: "";
  clear: both;
  display: table;
}
.bio-wrapper {
  width: 90%;
  margin: 70px auto 0 auto;
  position: relative;
}
.bio-wrapper::after {
  content: "";
  clear: both;
  display: table;
}
.bio-container-right {
  background: #d2bf9e;
  width: 80%;
  float: right;
  padding: 20px 20px 20px 120px;
}

.bio-container-left {
  background: #d2bf9e;
  width: 80%;
  float: left;
  padding: 20px 120px 20px 20px;
}

.bio-inner-container-right {
  background: #e3dcdc;
  text-align: right;
  padding: 25px 25px 25px 125px;
}
.bio-inner-container-left {
  background: #e3dcdc;
  text-align: left;
  padding: 25px 125px 25px 25px;
}
.bio-img-border-left {
  background: #1d5574;
  padding: 20px;
  position: absolute;
  top: 30%;
}
.bio-img-border-right {
  background: #1d5574;
  padding: 20px;
  position: absolute;
  top: 30%;
  right: 0;
}

.bio-img {
  max-height: 32vw;
}
</style>