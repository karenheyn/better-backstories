<template>
  <div>
    <h1>SUCCESS!</h1>
    <h2>Thank you for purchasing our {{ product }}.</h2>
    <h2>
      Please do not navigate away from the page until you have redeemed your
      PDF.
    </h2>
    <button v-if="paid" v-on:click="getSSPDF">Open Single-Sided PDF</button>
    <button v-if="paid" v-on:click="getDSPDF">Open Double-Sided PDF</button>
  </div>
</template>

<script>
import axios from "axios";
import store from "../store/index.js";
const baseURL = process.env.VUE_APP_BASE_URL;
export default {
  name: "Success",
  store,
  data() {
    return {
      paid: true,
      item: store.state.itemPurchased,
      product: window.localStorage.getItem("product"),
    };
  },
  mounted() {
    let intent = window.localStorage.getItem("intent");
    // const product = window.localStorage.getItem(product);

    axios
      .post(`${baseURL}/pay/confirm`, {
        intent: intent,
      })
      .then((res) => {
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
  destroyed() {
    window.localStorage.removeItem("intent");
  },
  methods: {
    confirmPayment() {
      let product = window.localStorage.getItem("product");

      console.log(product);
      this.paid = true;
    },
    getBasicDeckSS() {
      axios(`${baseURL}/pdf/basicdeckss`, {
        method: "GET",
        responseType: "blob", //Force to receive data in a Blob Format
      })
        .then((response) => {
          const file = new Blob([response.data], { type: "application/pdf" });
          const fileURL = URL.createObjectURL(file);
          window.location.href = fileURL;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getCardBundleSS() {
      axios(`${baseURL}/pdf/cardbundless`, {
        method: "GET",
        responseType: "blob", //Force to receive data in a Blob Format
      })
        .then((response) => {
          const file = new Blob([response.data], { type: "application/pdf" });
          const fileURL = URL.createObjectURL(file);
          window.location.href = fileURL;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getBundleWithBoxSS() {
      axios(`${baseURL}/pdf/bundlewithboxss`, {
        method: "GET",
        responseType: "blob", //Force to receive data in a Blob Format
      })
        .then((response) => {
          const file = new Blob([response.data], { type: "application/pdf" });
          const fileURL = URL.createObjectURL(file);
          window.location.href = fileURL;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getTechnicalBoosterSS() {
      axios(`${baseURL}/pdf/technicalboosterss`, {
        method: "GET",
        responseType: "blob", //Force to receive data in a Blob Format
      })
        .then((response) => {
          const file = new Blob([response.data], { type: "application/pdf" });
          const fileURL = URL.createObjectURL(file);
          window.location.href = fileURL;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getMysticalBoosterSS() {
      axios(`${baseURL}/pdf/mysticalboosterss`, {
        method: "GET",
        responseType: "blob", //Force to receive data in a Blob Format
      })
        .then((response) => {
          const file = new Blob([response.data], { type: "application/pdf" });
          const fileURL = URL.createObjectURL(file);
          window.location.href = fileURL;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    //double-sided fetch here.
    getBasicDeckDS() {
      axios(`${baseURL}/pdf/basicdeckds`, {
        method: "GET",
        responseType: "blob", //Force to receive data in a Blob Format
      })
        .then((response) => {
          const file = new Blob([response.data], { type: "application/pdf" });
          const fileURL = URL.createObjectURL(file);
          window.location.href = fileURL;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getCardBundleDS() {
      axios(`${baseURL}/pdf/cardbundleds`, {
        method: "GET",
        responseType: "blob", //Force to receive data in a Blob Format
      })
        .then((response) => {
          const file = new Blob([response.data], { type: "application/pdf" });
          const fileURL = URL.createObjectURL(file);
          window.location.href = fileURL;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getBundleWithBoxDS() {
      axios(`${baseURL}/pdf/bundlewithboxds`, {
        method: "GET",
        responseType: "blob", //Force to receive data in a Blob Format
      })
        .then((response) => {
          const file = new Blob([response.data], { type: "application/pdf" });
          const fileURL = URL.createObjectURL(file);
          window.location.href = fileURL;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getTechnicalBoosterDS() {
      axios(`${baseURL}/pdf/technicalboosterds`, {
        method: "GET",
        responseType: "blob", //Force to receive data in a Blob Format
      })
        .then((response) => {
          const file = new Blob([response.data], { type: "application/pdf" });
          const fileURL = URL.createObjectURL(file);
          window.location.href = fileURL;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getMysticalBoosterDS() {
      axios(`${baseURL}/pdf/mysticalboosterds`, {
        method: "GET",
        responseType: "blob", //Force to receive data in a Blob Format
      })
        .then((response) => {
          const file = new Blob([response.data], { type: "application/pdf" });
          const fileURL = URL.createObjectURL(file);
          window.location.href = fileURL;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getSSPDF() {
      let product = window.localStorage.getItem("product");
      switch (product) {
        case "Basic Deck":
          this.getBasicDeckSS();
          break;
        case "Card Bundle":
          this.getCardBundleSS();
          break;
        case "Full Bundle with Box":
          this.getBundleWithBoxSS();
          break;
        case "Technical Booster":
          this.getTechnicalBoosterSS();
          break;
        case "Mystical Booster":
          this.getMysticalBoosterSS();
          break;
        default:
          console.log("err, something went wrong....");
      }
    },
    getDSPDF() {
      let product = window.localStorage.getItem("product");
      console.log(product);
      switch (product) {
        case "Basic Deck":
          this.getBasicDeckDS();
          break;
        case "Card Bundle":
          this.getCardBundleDS();
          break;
        case "Full Bundle with Box":
          this.getBundleWithBoxDS();
          break;
        case "Technical Booster":
          this.getTechnicalBoosterDS();
          break;
        case "Mystical Booster":
          this.getMysticalBoosterDS();
          break;
        default:
          console.log("err, something went wrong....");
      }
    },
  },
};
</script>

<style scoped>
h1 {
  color: #d2bf9e;
  font-family: "IM Fell English", serif;
  font-size: 3.5rem;
}
h2 {
  font-family: "Oswald", sans-serif;
  color: #ffffff;
  padding-bottom: 11px;
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
