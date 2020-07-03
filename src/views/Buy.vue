<template>
  <div>
    <button @click="submit" id="checkout-button">Checkout</button>
    <!-- <stripe-elements
      ref="elementsRef"
      :pk="publishableKey"
      :amount="amount"
      locale="us"
      @token="tokenCreated"
      @loading="loading = $event"
    >
    </stripe-elements>
    <button @click="submit">Pay ${{ amount / 100 }}</button> -->
  </div>
</template>

<script>
// import { StripeElements } from "vue-stripe-checkout";
import axios from "axios";
const stripe = window.Stripe(process.env.VUE_APP_STRIPE_SECRET_KEY);

export default {
  components: {
    // StripeElements,
  },
  data: () => ({
    loading: false,
    amount: 1000,
    publishableKey: process.env.VUE_APP_STRIPE_SECRET_KEY,
    token: null,
    charge: null,
  }),
  methods: {
    submit() {
      this.createSession();
    },

    createSession() {
      axios.post("http://localhost:5000/pay").then(
        (response) => {
          console.log(response);
          stripe.redirectToCheckout({
            sessionId: response.data.session_id,
          });
          // If `redirectToCheckout` fails due to a browser or network
          // error, display the localized error message to your customer
          // using `error.message`.
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },
};
</script>
