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
    },
  },
};
</script>

<style scoped>
h1 {
  font-family: "Oswald", sans-serif;
  color: white;
}
</style>
