<template>
  <div>
    <!-- <input v-model="first_name" placeholder="First name" class="form-input" />
    <input v-model="last_name" placeholder="Last name" class="form-input" />-->
    <input v-model="receipt_email" placeholder="email" type="email" class="form-input" />
    <stripe-elements
      ref="elementsRef"
      :pk="publishableKey"
      :amount="amount"
      locale="en"
      @token="tokenCreated"
      @loading="loading = $event"
    ></stripe-elements>
    <button @click="submit">Pay ${{ amount / 100 }}</button>
  </div>
</template>

<script>
import { StripeElements } from "vue-stripe-checkout";
import dotenv from "dotenv";
dotenv.config();
console.log(process.env.VUE_APP_STRIPE_SECRET_KEY);
const baseURL = process.env.VUE_APP_BASE_URL;

import axios from "axios";
export default {
  components: {
    StripeElements
  },
  data: () => ({
    loading: false,
    amount: 1000,
    publishableKey: process.env.VUE_APP_STRIPE_SECRET_KEY,
    token: null,
    charge: null,
    receipt_email: null
  }),
  methods: {
    submit() {
      this.$refs.elementsRef.submit();
    },
    tokenCreated(token) {
      this.token = token;
      // for additional charge objects go to https://stripe.com/docs/api/charges/object
      this.charge = {
        source: token.id,
        amount: this.amount, // the amount you want to charge the customer in cents. $100 is 1000 (it is strongly recommended you use a product id and quantity and get calculate this on the backend to avoid people manipulating the cost)
        description: this.description, // optional description that will show up on stripe when looking at payments
        receipt_email: this.receipt_email
      };
      this.sendTokenToServer(this.charge);
    },
    sendTokenToServer(charge) {
      axios.post(`${baseURL}/pay`, { charge }).then(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
      console.log(charge);
    }
  }
};
</script>
<style scoped>
.form-input {
  box-sizing: border-box;
  height: 40px;
  padding: 10px 12px;
  border: 1px solid transparent;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
  margin: 10px;
}
button:focus {
  outline: 0;
}
</style>
