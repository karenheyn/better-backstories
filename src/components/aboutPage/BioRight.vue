<template>
  <div class="bio-wrapper">
    <h1>Jay Stilipec’s Backstory</h1>
    <div class="bio-flex-container">
      <div class="bio-container-right">
        <div class="bio-inner-container-right">
          <p>Jay has been playing video games and role-playing for more than 30 years. Originally from Alaska, they joined the U.S. Navy in 1995 to be a broadcast journalist. Jay assisted with the editing of a Mutants & Masterminds supplement by Brainstorm Studios called Hero Hooks in 2005. In 2013, they beta-tested D&D Next (D&D 5e) while deployed to Afghanistan. Jay retired from the Navy in 2015 and now works as a public affairs instructor for the Department of Defense. They also cosplay in Washington D.C. under the pseudonym Jazmine Cosplays. Better Backstories is their first Kickstarter and first private business venture.</p>
        </div>
      </div>
      <div class="bio-img-border-left">
        <img class="bio-img" src="../../assets/Jay.jpg" alt="Jay Stillipec" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BioRight",
  people: [
    {
      name: "Jay Stilipec's",
      bio:
        "Jay has been playing video games and role-playing for more than 30 years. Originally from Alaska, they joined the U.S. Navy in 1995 to be a broadcast journalist. Jay assisted with the editing of a Mutants & Masterminds supplement by Brainstorm Studios called Hero Hooks in 2005. In 2013, they beta-tested D&D Next (D&D 5e) while deployed to Afghanistan. Jay retired from the Navy in 2015 and now works as a public affairs instructor for the Department of Defense. They also cosplay in Washington D.C. under the pseudonym Jazmine Cosplays. Better Backstories is their first Kickstarter and first private business venture.",
      image: "../../assets/Jay.jpg"
    },
    {
      name: "Blazbaros'",
      bio:
        "Taylor Schmidt has been working as a freelance artist for the last 10 years, bringing life to a multitude of RPG characters under the name “Blazbaros” on the internet. He has a deep love for world building and roleplaying games, perhaps running too many games in his free time. He is currently working with Cybermoose Games creating Payload, a pen-and-paper RPG centered around giant mecha combat.",
      image: "../../assets/Blazbaros.png"
    }
  ]
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
.bio-wrapper {
  overflow: hidden;
}
.bio-flex-container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1;
  width: 100%;
}
.bio-container-right {
  background: #d2bf9e;
  /* float: right; */
  padding: 20px 20px 20px 120px;
  -webkit-box-shadow: 5px 5px 10px -5px black;
  -moz-box-shadow: 5px 5px 10px -5px black;
  box-shadow: 5px 5px 10px -5px black;
  grid-column: 3/12;
  grid-row: 1;
}

.bio-inner-container-right {
  background: #e3dcdc;
  text-align: right;
  padding: 25px 25px 25px 125px;
  /* min-height: 550px; */
  display: flex;
}
.bio-inner-container-right p,
.bio-inner-container-left p {
  align-self: center;
}
.bio-img-border-left {
  background: #1d5574;
  padding: 20px;
  -webkit-box-shadow: 0px 5px 10px -5px black;
  -moz-box-shadow: 0px 5px 10px -5px black;
  box-shadow: 0px 5px 10px -5px black;
  height: fit-content;
  align-self: center;
  grid-row: 1;
  grid-column: 2/5;
}
.bio-img {
  max-width: 100%;
  max-height: 100%;
}
p {
  text-align: left;
  font-family: "Oswald", sans-serif;
  color: #053475;
  font-size: 2.3vw;
  display: table-cell;
  vertical-align: middle;
}
@media only screen and (max-device-width: 1023px) and (min-device-width: 768px) {
  .bio-img-border-left {
    grid-column: 2/6;
  }
}
@media only screen and (max-width: 600px) {
  .bio-flex-container {
    grid-template-rows: auto;
    grid-row-gap: 20px;
  }
  .bio-container-right {
    grid-row: 2;
    padding: 20px;
    grid-column: 3/11;
  }
  .bio-img-border-left {
    grid-row: 1;
    grid-column: 3/11;
  }
  .bio-inner-container-right {
    background: #e3dcdc;
    text-align: right;
    padding: 20px;
    display: flex;
  }
  p {
    font-size: 5vw;
    font-size: 1rem;
  }

  h1 {
    font-size: 9vw;
    margin-top: 20px;
  }
  .bio-img-border-right,
  .bio-img-border-left {
    padding: 15px;
  }
  .tiberius {
    height: 250px;
  }
  .about-div-wrapper {
    padding: 30px 50px 30px 20px;
  }
  .about-div {
    padding: 10px;
  }
  .hello {
    overflow: hidden;
  }
  .about-div p {
    display: inline;
    text-align: left;
  }
}

@media only screen and (min-width: 1400px) {
  .bio-inner-container-right {
    padding: 25px 25px 25px 200px;
  }
}
</style>