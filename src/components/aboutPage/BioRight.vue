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
.bio-wrapper {
  overflow: hidden;
}
.bio-container-right {
  background: #d2bf9e;
  width: 80%;
  float: right;
  padding: 20px 20px 20px 120px;
  -webkit-box-shadow: 5px 5px 10px -5px black;
  -moz-box-shadow: 5px 5px 10px -5px black;
  box-shadow: 5px 5px 10px -5px black;
}

.bio-inner-container-right {
  background: #e3dcdc;
  text-align: right;
  padding: 25px 25px 25px 125px;
  min-height: 550px;
  display: flex;
}
.bio-inner-container-right p,
.bio-inner-container-left p {
  align-self: center;
}
.bio-img-border-left {
  background: #1d5574;
  padding: 20px;
  position: absolute;
  top: 30%;
  -webkit-box-shadow: 0px 5px 10px -5px black;
  -moz-box-shadow: 0px 5px 10px -5px black;
  box-shadow: 0px 5px 10px -5px black;
}
.bio-img {
  max-height: 32vw;
}
</style>