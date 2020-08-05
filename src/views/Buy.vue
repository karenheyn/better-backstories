<template>
  <div>
    <div>
      <div class="item-flex">
        <div class="card-wrapper">
          <img class="card-img" src="../assets/pdf.png" alt="pdf cards" />
        </div>
        <div class="item-desc">
          <h2>{{ product[0].name }} (Self-Printable PDF)</h2>
          <h2 class="price">${{ product[0].price }}</h2>
          <p>{{ product[0].description }}</p>
        </div>
      </div>
      <button @click="submit" id="checkout-button">Checkout</button>
      <a v-if="product[0].dtc" :href="product[0].dtc" target="blank"
        ><h4>Print-on-Demand decks at DriveThruCards</h4></a
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";
import store from "../store/index.js";
const stripe = window.Stripe(process.env.VUE_APP_STRIPE_SECRET_KEY);
const baseURL = process.env.VUE_APP_BASE_URL;

export default {
  components: {
    // StripeElements,
  },
  store,

  data: () => ({
    loading: false,
    amount: 1000,
    publishableKey: process.env.VUE_APP_STRIPE_SECRET_KEY,
    token: null,
    charge: null,
    products: store.state.products,
  }),
  computed: {
    product: function() {
      return this.products.filter(
        (item) => item.name === this.$route.params.product
      );
    },
  },
  methods: {
    submit() {
      this.createSession();
    },

    createSession() {
      axios
        .post(`${baseURL}/pay`, {
          product: this.product[0],
        })
        .then(
          (response) => {
            console.log(response);
            console.log(response.data.intent);
            this.$store.commit("getItem", this.product[0].name);
            console.log(store.state.itemPurchased);
            window.localStorage.setItem("product", this.product[0].name);

            window.localStorage.setItem("intent", response.data.intent);
            stripe.redirectToCheckout({
              sessionId: response.data.session_id,
            });
          },
          (error) => {
            console.log(error.message);
          }
        );
    },
  },
};
</script>

<style scoped>
.card-wrapper {
  max-width: 250px;
  padding: 30px;
}
.card-img {
  width: 100%;
  height: 100%;
}
.item-flex {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.item-desc {
  display: flex;
  flex-direction: column;
  max-width: 550px;
  justify-content: center;
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
  -moz-box-shadow: 0 0 3px #000000;
  -webkit-box-shadow: 0 0 3px #000000;
  box-shadow: 0 0 3px #000000;
  margin: 40px auto;
}
button:hover {
  background: #b6a689;
}
h2 {
  color: white;
}
h4 {
  color: white;
}
a {
  text-decoration: none;
}
h4:hover {
  color: #d2bf9e;
}
p {
  color: white;
}
.price {
  margin: 10px;
}
button:focus {
  outline: 0;
}
</style>
