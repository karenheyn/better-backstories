<template>
  <div>
    <div class="item-flex">
      <div class="card-wrapper">
        <img class="card-img" src="../assets/pdf.png" alt="pdf cards" />
      </div>
      <div class="item-desc">
        <h2>Basic Deck (Self-Printable PDF)</h2>
        <h2 class="price">$7</h2>
        <p>
          Better Backstories is a card-based, random life history and plot line
          generator for Players, NPCs, RPGs, creative writing, and more. This
          system is a genre-neutral accessory that works with any game or
          setting. Aside from backstories and plots, the cards also include
          icons for generating random weather, landmarks and alignments. The
          Basic Deck includes 68 cards: 10 cards in each of six categories,
          three icon legend cards, five blank cards for developing your own
          backstory elements, and instructions.
        </p>
      </div>
    </div>
    <button @click="checkout">Buy it now</button>
  </div>
</template>

<script>
const stripe = window.Stripe(process.env.VUE_APP_STRIPE_SECRET_KEY);

export default {
  components: {
    // StripeCheckout,
  },
  data: () => ({
    loading: false,
    publishableKey: process.env.VUE_APP_STRIPE_SECRET_KEY,
    items: [
      {
        sku: "sku_FdQKocNoVzznpJ",
        quantity: 1,
      },
    ],
    successUrl: "your-success-url",
    cancelUrl: "your-cancel-url",
  }),
  methods: {
    checkout() {
      stripe
        .redirectToCheckout({
          lineItems: [{ price: "price_1Gzsr5Kc91wTjOOifbd9UVsy", quantity: 1 }],
          mode: "payment",
          successUrl: "http://localhost:8080/#/success",
          cancelUrl: "http://localhost:8080/#/cancel",
        })
        .then(function(result) {
          console.log(result);
          console.log(result.error.message);
        });
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
  max-width: 550px;
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
p {
  color: white;
}
.price {
  margin: 10px;
}
</style>
