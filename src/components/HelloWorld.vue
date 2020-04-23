<template>
  <div class="hello">
    <h1>BETTER BACKSTORIES</h1>
    <h2>Put a little more <span>character</span> in your character</h2>
    <p>
      Better Backstories is a card-based random life history generator for
      creative writing, educators, RPG Gamemasters, and even song writers. Works
      with any role playing system.
    </p>
    <button>Learn More</button>
    <img src="../assets/Characters.png" alt="characters" />
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
h2 {
  color: #ffffff;
  text-align: left;
  margin: 10px 65px;
  font-size: 3.9vw;
  font-weight: 500;
  transform: scaleY(1.1);
  text-shadow: 1px 1px 1px black;
  font-family: "Oswald", sans-serif;
}

h2 span {
  color: #d2bf9e;
}

p {
  color: #ffffff;
  font-size: 2.2vw;
  text-align: left;
  margin: 40px 65px;
  max-width: 617px;
  font-weight: 500;
  transform: scaleY(1.1);
  text-shadow: 1px 1px 1px #000000;
  font-family: "Oswald", sans-serif;
}
h3 {
  margin: 40px 0 0;
}
button {
  position: absolute;
  left: 70px;
  padding: 10px 30px;
  font-size: 30px;
  font-family: "IM Fell English", serif;
  border-radius: 50px;
  background: #d2bf9e;
  color: #003b8e;
  border: 1px solid linear-gradient(#ffffff, #000000);
  -moz-box-shadow: 0 0 3px #000000;
  -webkit-box-shadow: 0 0 3px #000000;
  box-shadow: 0 0 3px #000000;
  margin: 20px 0 0 0;
}
img {
  position: absolute;
  bottom: 70px;
  right: 10px;
  width: 36vw;
}

/* @media only screen and (max-width: 1200px) {
  h1 {
    font-size: 70px;
  }
  img {
    width: 400px;
  }
  h2,
  p {
    width: 100%;
  }
  h1,
  h2,
  p {
    margin: 0 auto;
  }
} */
</style>
