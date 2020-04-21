<template>
  <div id="app">
    <div class="background">
      <div id="nav">
        <div class="header-container">
          <img src="./assets/Logo.png" alt="logo" />
          <h1>Better Backstories</h1>
        </div>
        <div class="nav-links-container">
          <router-link to="/">Home</router-link> |
          <router-link to="/product">Our Product</router-link> |
          <router-link to="/about">About</router-link>
        </div>
      </div>
      <router-view />
    </div>
  </div>
</template>

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
  height: 100vh;
}

#app .background {
  background-image: url("./assets/Backgroundlong.png");
  background-position-y: -5px;
  background-attachment: fixed;
  height: 100%;
  width: 100vw;
}

#nav {
  /* padding: 30px; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

#nav .header-container {
  display: flex;
  align-items: center;
}

#nav .nav-links-container {
  bottom: 0;
  /* display: flex;
  justify-content: space-between; */
}
#nav h1 {
  color: #d2bf9e;
  font-family: "Cinzel", serif;
  font-size: 36px;
}
#nav a {
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
  margin: 10px;
  font-family: "Cinzel", serif;
  font-size: 24px;
}

#nav a.router-link-exact-active {
  /* color: #42b983; */
  text-decoration: underline;
}

@media only screen and (max-width: 900px) {
  #nav h1 {
    font-size: 30px;
  }
  #nav a {
    font-size: 17px;
  }
}
@media only screen and (max-width: 700px) {
  #nav {
    justify-content: center;
    flex-direction: column;
  }
}
</style>
