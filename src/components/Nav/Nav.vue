<template>
  <div id="nav">
    <div class="header-container">
      <img src="../../assets/Logo.png" alt="logo" />
      <h1>Better Backstories</h1>
    </div>
    <div class="nav-links-container">
      <router-link to="/">Home</router-link>
      <router-link to="/product">Our Product</router-link>
      <router-link to="/shop">Shop</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
      <!-- <router-link to="/login">Login</router-link>
      <router-link to="/register">Sign Up</router-link>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data: () => {
    return {
      mobileView: true,
      showNav: false
    };
  }
};
</script>

<style scoped>
#nav {
  /* padding: 30px; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 20px;
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
  font-size: 21px;
}

#nav a.router-link-exact-active {
  /* color: #42b983; */
  /* text-decoration: underline #d2bf9e; */
  border-bottom: 2px solid #d2bf9e;
}
@media only screen and (max-width: 1025px) {
  #nav a {
    font-size: 20px;
    margin: 6px;
  }
}
@media only screen and (max-width: 970px) {
  #nav h1 {
    font-size: 9vw;
  }
  #nav a {
    font-size: 15px;
    margin: 4px;
  }
}
@media only screen and (max-width: 980px) {
  #nav {
    justify-content: center;
    flex-direction: column;
    padding: 0;
  }
}
@media only screen and (max-width: 325px) {
  #nav a {
    font-size: 13.5px;
    margin: 4px;
  }
}
</style>
