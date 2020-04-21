<template>
  <div id="app">
    <div class="background">
      <div id="nav">
        <div>
          <img src="" alt="" />
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
}

#nav {
  /* padding: 30px; */
  display: flex;
  justify-content: space-between;
}

#nav .nav-links-container {
  bottom: 0;
}
#nav h1 {
  color: #d2bf9e;
  font-family: "Cinzel", serif;
}
#nav a {
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  /* color: #42b983; */
  text-decoration: underline;
}
</style>
