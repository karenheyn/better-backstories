<template>
  <div class="hello">
    <h1>How It Works</h1>
    <h2>
      Put a little more
      <span>character</span> in your character
    </h2>
    <img src="../assets/Characters.png" alt="characters" />
    <p>
      Better Backstories is a card-based random life history generator for
      creative writing, educators, RPG Gamemasters, and even song writers. Works
      with any role playing system.
    </p>

    <button>Learn More</button>
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
  text-align: left;
  margin: 10px 65px;
  text-shadow: 1px 1px 1px black;
}
</style>