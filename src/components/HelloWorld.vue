<template>
  <div class="hello">
    <h1>BETTER BACKSTORIES</h1>
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
  name: "HelloWorld",
  props: {
    msg: String
  }
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
  display: flex;
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
  margin: 50px 0 0px 60px;
}
img {
  position: absolute;
  bottom: 70px;
  right: 10px;
  width: 36vw;
}
@media only screen and (max-width: 600px) {
  /*mobile*/
  img {
    position: relative;
    margin: 50px 0 -60px 30px;
    width: 90vw;
  }
  h1 {
    font-size: 12.5vw;
    text-align: center;
    margin: 35px auto;
  }
  h2 {
    font-size: 8vw;
    margin: 30px 10px;
    text-align: center;
  }
  p {
    font-size: 6vw;
    margin: 20px 30px;
  }
  button {
    margin: 60px auto;
  }
}
@media only screen and (max-width: 1100px) and (min-width: 650px) {
  /*tablet*/
  h1 {
    font-size: 8vw;
  }
  img {
    margin: 20px 0 60px 30px;
    width: 57vw;
  }
  h2 {
    font-size: 5.5vw;
  }
  p {
    font-size: 4vw;
    max-width: 80%;
  }
  h1,
  h2,
  p {
    margin: 20px 0 80px 20px;
  }
  button {
    font-size: 50px;
    margin-top: 18%;
    margin-left: 20px;
  }
}
</style>
