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
          <p>Jay has been playing video games and role-playing for more than 30 years. Originally from Alaska, they joined the U.S. Navy in 1995 to be a broadcast journalist. Jay assisted with the editing of a Mutants & Masterminds supplement by Brainstorm Studios called Hero Hooks in 2005. In 2013, they beta-tested D&D Next (D&D 5e) while deployed to Afghanistan. Jay retired in 2015 and now works as a public affairs instructor for the Department of Defense. They also cosplay in Washington D.C. under the pseudonym Jazmine Cosplays. Better Backstories is their first Kickstarter and first private business venture.</p>
        </div>
      </div>
      <div class="bio-img-border-left">
        <img class="bio-img" src="../assets/Jay.jpg" alt="Jay Stillipec" />
      </div>
    </div>
    <div class="bio-wrapper">
      <h1>Tim Mazurek’s Backstory</h1>
      <div class="bio-container-left">
        <div class="bio-inner-container-left">
          <p>Tim has been teaching Graphic Design at colleges and universities all around the Baltimore beltway for the last 30 years. During the day, he leads a team of designers and photographers for the Department of Defense. At night, he runs a small design studio specializing in CD packaging design — A Little Fish, Graphic Design and Fine Typography. Tim is passionate and can be pretty geeky about design. Practicing graphic design is a fundamental part of his life.</p>
        </div>
      </div>
      <div class="bio-img-border-right">
        <img class="bio-img" src="../assets/Tim.png" alt="Tim Mazurek" />
      </div>
    </div>
    <div class="bio-wrapper">
      <h1>Blazbaros’ Backstory</h1>
      <div class="bio-container-right">
        <div class="bio-inner-container-right">
          <p>Taylor Schmidt has been working as a freelance artist for the last 10 years, bringing life to a multitude of RPG characters under the name “Blazbaros” on the internet. He has a deep love for world building and roleplaying games, perhaps running too many games in his free time. He is currently working with Cybermoose Games creating Payload, a pen-and-paper RPG centered around giant mecha combat.</p>
        </div>
      </div>
      <div class="bio-img-border-left">
        <img class="bio-img blaz" src="../assets/Blazbaros.png" alt="Blazbaros" />
      </div>
    </div>
    <div class="bio-wrapper">
      <h1>Shaneh Woods</h1>
      <div class="bio-container-left">
        <div class="bio-inner-container-left">
          <p>An accountant with the secret heart of a writer, long-time friend, and quote generator extraordinaire. Sarcasm, it's how she hugs!</p>
        </div>
      </div>
      <div class="bio-img-border-right">
        <img class="bio-img" src="../assets/Shaneh1.jpg" alt="Shaneh Woods" />
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
  min-height: 500px;
  display: flex;
}
.bio-inner-container-right p,
.bio-inner-container-left p {
  align-self: center;
}
.bio-inner-container-left {
  background: #e3dcdc;
  text-align: left;
  padding: 25px 125px 25px 25px;
  min-height: 500px;
  display: flex;
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
.blaz {
  background: #ffffff;
}
</style>