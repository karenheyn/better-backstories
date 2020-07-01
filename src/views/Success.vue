<template>
  <div>
    <h1>SUCCESS!</h1>
    <button v-on:click="getPDF">Open PDF</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Success",
  methods: {
    getPDF() {
      axios("http://localhost:5000/pdf", {
        method: "GET",
        responseType: "blob", //Force to receive data in a Blob Format
      })
        .then((response) => {
          const file = new Blob([response.data], { type: "application/pdf" });
          const fileURL = URL.createObjectURL(file);
          window.open(fileURL);
        })
        .catch((error) => {
          console.log(error);
        });
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
