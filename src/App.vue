<template>
  <div id="app">
    <div class="background">
      <Nav />
      <router-view />
      <footer class="footer">
        <ul>
          <li>
            <a href="https://www.instagram.com/betterbackstories/" target="blank">
              <img src="./assets/icons/instagram.png" alt="instagram" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/betterbackstories/" target="blank">
              <img src="./assets/icons/facebook.png" alt="facebook" />
            </a>
          </li>
          <li>
            <a
              href="https://www.kickstarter.com/projects/wordsmythe/better-backstories-for-rpgs"
              target="blank"
            >
              <img src="./assets/icons/kickstarter.png" alt="kickstarter" />
            </a>
          </li>
          <li>
            <a
              href="https://youtube.com/watch?v=x4Zg--yx3A0&list=PLbldekf_km5Lj62hCFhrX5CDKnYif-57m"
              target="blank"
            >
              <img class="youtube-link" src="./assets/icons/youtube.png" alt="youtube" />
            </a>
          </li>
        </ul>
        <h4>Better Backstories© 2020</h4>
      </footer>
    </div>
  </div>
</template>
<script>
import Nav from "./components/Nav/Nav";
export default {
  components: {
    Nav
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #5e91f2;
  min-height: 100vh;
}

#app .background {
  background-image: url("./assets/Backgroundlong.png");
  /* background-attachment: fixed; */

  min-height: 100vh;
  /* width: 100%; */
  position: relative;
  padding-bottom: 120px;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.footer {
  position: absolute;
  bottom: 0;
  background: #012531d6;
  width: 100%;
  height: 69px;
  display: flex;
  align-items: center;
}

footer ul {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
}
ul li {
  margin: 0 30px;
  list-style: none;
}
a img {
  height: 25px;
}

.youtube-link {
  height: 42px;
}
footer h4 {
  position: absolute;
  right: 10px;
  bottom: 20px;
  color: #ffffff;
  font-family: "Oswald", sans-serif;
  font-size: 24px;
}

@media only screen and (max-width: 980px) {
  footer {
    flex-direction: column;
    height: 70px;
  }
  footer h4 {
    position: relative;
    font-size: 15px;
    right: 0;
    bottom: 0;
  }
}
</style>
