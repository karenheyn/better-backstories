<template>
  <div>
    <h1>Your transaction has been cancelled</h1>
    <button @click="goHome">Return home</button>
  </div>
</template>

<script>
export default {
  name: "Cancel",
  methods: {
    goHome() {
      this.$router.push({ path: `/` });
    }
  }
};
</script>

<style scoped>
h1 {
  font-family: "Oswald", sans-serif;
  color: white;
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
  box-shadow: 0 0 3px #000000;
  margin: 40px auto;
}
button:focus {
  outline: 0;
}
</style>
