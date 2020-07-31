<template>
  <div>
    <h1>SUCCESS!</h1>
    <button v-if="paid" v-on:click="getPDF">Open PDF</button>
  </div>
</template>

<script>
import axios from "axios";
import store from "../store/index.js";

export default {
  name: "Success",
  store,
  data() {
    return {
      paid: false,
      item: store.state.itemPurchased
    };
  },
  mounted() {
    const intent = window.localStorage.getItem(intent);
    // const product = window.localStorage.getItem(product);

    axios
      .get("http://localhost:5000/pay/confirm", {
        params: {
          intent: intent
        }
      })
      .then(res => {
        console.log(res.data.status);
        if (res.data.status == "succeeded") {
          console.log(res.data.status);
          this.confirmPayment();
        } else {
          this.paid = false;
        }
        console.log(this.item);
      });
  },
  methods: {
    confirmPayment() {
      let product = window.localStorage.getItem("product");

      console.log(product);
      this.paid = true;
    },
    getBasicDeck() {
      axios("http://localhost:5000/pdf/basicdeckss", {
        method: "GET",
        responseType: "blob" //Force to receive data in a Blob Format
      })
        .then(response => {
          const file = new Blob([response.data], { type: "application/pdf" });
          const fileURL = URL.createObjectURL(file);
          window.open(fileURL);
        })
        .catch(error => {
          console.log(error);
        });
    },
    getCardBundle() {
      axios("http://localhost:5000/pdf/cardbundless", {
        method: "GET",
        responseType: "blob" //Force to receive data in a Blob Format
      })
        .then(response => {
          const file = new Blob([response.data], { type: "application/pdf" });
          const fileURL = URL.createObjectURL(file);
          window.open(fileURL);
        })
        .catch(error => {
          console.log(error);
        });
    },
    getBundleWithBox() {
      axios("http://localhost:5000/pdf/bundlewithboxss", {
        method: "GET",
        responseType: "blob" //Force to receive data in a Blob Format
      })
        .then(response => {
          const file = new Blob([response.data], { type: "application/pdf" });
          const fileURL = URL.createObjectURL(file);
          window.open(fileURL);
        })
        .catch(error => {
          console.log(error);
        });
    },
    getTechnicalBooster() {
      axios("http://localhost:5000/pdf/technicalboosterss", {
        method: "GET",
        responseType: "blob" //Force to receive data in a Blob Format
      })
        .then(response => {
          const file = new Blob([response.data], { type: "application/pdf" });
          const fileURL = URL.createObjectURL(file);
          window.open(fileURL);
        })
        .catch(error => {
          console.log(error);
        });
    },
    getMysticalBooster() {
      axios("http://localhost:5000/pdf/mysticalboosterss", {
        method: "GET",
        responseType: "blob" //Force to receive data in a Blob Format
      })
        .then(response => {
          const file = new Blob([response.data], { type: "application/pdf" });
          const fileURL = URL.createObjectURL(file);
          window.open(fileURL);
        })
        .catch(error => {
          console.log(error);
        });
    },

    getPDF() {
      let product = window.localStorage.getItem("product");
      switch (product) {
        case "Basic Deck":
          this.getBasicDeck();
          break;
        case "Card Bundle":
          this.getCardBundle();
          break;
        case "Full Bundle with Box":
          this.getBundleWithBox();
          break;
        case "Technical Booster":
          this.getTechnicalBooster();
          break;
        case "Mystical Booster":
          this.getMysticalBooster();
          break;
        default:
          console.log("err, something went wrong....");
      }
    }
  }
};
</script>

<style scoped>
h1 {
  font-family: "Oswald", sans-serif;
  color: white;
}
</style>
