<template>
  <div>
    <h1>SUCCESS!</h1>
    <button v-if="paid" v-on:click="getPDF">Open PDF</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Success",
  data() {
    return {
      paid: false,
    };
  },
  mounted() {
    axios.get("http://localhost:5000/pay/confirm").then((res) => {
      console.log(res.data.status);
      if (res.data.status == "succeeded") {
        console.log(res.data.status);
        this.confirmPayment();
      } else {
        this.paid = false;
      }
      console.log(this.paid);
    });
  },
  methods: {
    confirmPayment() {
      this.paid = true;
    },
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
