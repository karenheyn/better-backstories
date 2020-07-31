<template>
  <div>
    <h1>SUCCESS!</h1>
    <button v-if="paid" v-on:click="getSSPDF">Open Single-Sided PDF</button>
    <button v-if="paid" v-on:click="getDSPDF">Open Double-Sided PDF</button>
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
    let intent = window.localStorage.getItem("intent");
    // const product = window.localStorage.getItem(product);

    axios
      .post("http://localhost:5000/pay/confirm", {
        intent: intent
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
    getCardBundleSS() {
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
    getBundleWithBoxSS() {
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
    getTechnicalBoosterSS() {
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
    getMysticalBoosterSS() {
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
    //double-sided fetch here.
    getBasicDeckDS() {
      axios("http://localhost:5000/pdf/basicdeckds", {
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
    getCardBundleDS() {
      axios("http://localhost:5000/pdf/cardbundleds", {
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
    getBundleWithBoxDS() {
      axios("http://localhost:5000/pdf/bundlewithboxds", {
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
    getTechnicalBoosterDS() {
      axios("http://localhost:5000/pdf/technicalboosterds", {
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
    getMysticalBoosterDS() {
      axios("http://localhost:5000/pdf/mysticalboosterds", {
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
        case "Mystical Booster ":
          this.getMysticalBoosterSS();
          break;
        default:
          console.log("err, something went wrong....");
      }
    },
    getDSPDF() {
      let product = window.localStorage.getItem("product");
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
        case "Mystical Booster ":
          this.getMysticalBoosterDS();
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
