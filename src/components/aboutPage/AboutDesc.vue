<template>
  <div class="about">
    <h1>About Better Backstories</h1>
    <div class="about-div-wrapper">
      <div class="about-div">
        <img
          class="tiberius"
          src="../../assets/Tiberius_McAllister.png"
          alt="Tiberious"
        />
        <p>
          Better Backstories was designed by James ‘Jay’ Stilipec, Tim Mazurek,
          and Blazbaros. It was born out of a love of developing detailed life
          histories for role playing characters. It was brought to life through
          a Kickstarter campaign and the help of 1343 backers. While only asking
          for $3000, Jay was thrilled to garner more than $27,000 in pledges.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutDescription",
  //   props: {
  //     msg: String
  //   }
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
  margin: 20px 0 30px 0;
}
.about-div-wrapper {
  background: #d2bf9e;
  width: 70%;
  padding: 60px 100px 60px 40px;
  margin: 0 auto;
  -webkit-box-shadow: 0px 5px 10px -5px black;
  -moz-box-shadow: 0px 5px 10px -5px black;
  box-shadow: 0px 5px 10px -5px black;
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
}
.tiberius {
  position: relative;
  float: right;
  height: 400px;
  shape-outside: ellipse();
  left: 106px;
  margin-left: -128px;
}
.about-div::after {
  content: "";
  clear: both;
  display: table;
}
@media only screen and (max-width: 600px) {
  .tiberius {
    height: 250px;
  }
  .about-div-wrapper {
    padding: 30px 50px 30px 20px;
  }
  .about-div {
    padding: 10px;
  }

  .about-div p {
    text-align: left;
    font-size: 1rem;
  }
}
</style>
