<template>
  <div>
    <h1>Welcome To Our Shop</h1>
    <div class="products">
      <div v-for="product in products" v-bind:key="product.name">
        <div>
          <ShopItem v-bind:products="product" />
        </div>
      </div>
      <div class="other">
        <h2>Other Products:</h2>
        <a href="https://www.armorclass10.com/collections/better-backstories" target="blank">
          <h4>Shop Clothing</h4>
        </a>
        <a href="https://www.redbubble.com/people/AllThatJazmine/shop?asc=u" target="blank">
          <h4>Shop Merch</h4>
        </a>
        <a
          href=" https://www.drivethrucards.com/browse/pub/17217/Better-Backstories"
          target="blank"
        >
          <h4>Drive Thru Cards</h4>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import ShopItem from "../components/Shop/ShopItem";
export default {
  name: "Shop",
  components: { ShopItem },
  data() {
    return {
      products: [
        {
          name: "Basic Deck",
          price: 7,
          description:
            "The Basic Deck includes 68 cards: 10 cards in each of six categories, three icon legend cards, five blank cards for developing your own backstory elements, and instructions.",
          image: require("@/assets/Draeorc.png")
        },
        {
          name: "Card Bundle",
          price: 10,
          description:
            "The Card Bundle includes the Basic Deck, Technical Booster, Mystical Booster and instructions as a single self-printable PDF.",
          image: require("@/assets/Twilight.png")
        },
        {
          name: "Full Bundle with Box",
          price: 12,
          description:
            "The Full Bundle includes the Basic Deck, Technical Booster, Mystical Booster, instructions and tuck box as a single self-printable PDF.",
          image: require("@/assets/Orig_Godbringer.png")
        },
        {
          name: "Technical Booster",
          price: 2,
          description:
            "The Technical Booster includes 10 new cards that focus on sci-fi and hi-tech concepts.  Also includes two blank cards for creating your own backstory elements.",
          image: require("@/assets/Andrea_the_Sharp.png")
        },
        {
          name: "Mystical Booster",
          price: 2,
          description:
            "The Mystical Booster includes 10 new cards that focus on magic and fantasy concepts.  Also includes two blank cards for creating your own backstory elements.",
          image: require("@/assets/Akmhenos_Courage.png")
        }
      ]
    };
  }
};
</script>

<style scoped>
h1 {
  font-family: "IM Fell English", serif;
  color: #d2bf9e;
  font-size: 6.5vw;
  font-weight: 300;
  text-align: center;
  margin: 10px 65px;
  text-shadow: 1px 1px 1px black;
  margin: 30px 0;
}
.products {
  padding: 30px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 300px 300px;
  grid-gap: 50px;
  grid-row-gap: 100px;
}
h2 {
  color: #053475;
}
a {
  text-decoration: none;
  color: #1d5574;
}
a:hover {
  color: #d2bf9e;
}
.other {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 117%;
  background: #e3dcdc;
  border: 15px solid #d2bf9e;
}
.other:hover {
  background: #ffffff;
}
@media only screen and (max-device-width: 1024px) and (min-device-width: 768px) {
  h2 {
    font-size: 1.3rem;
  }
  .products {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media only screen and (max-device-width: 768px) {
  .products {
    grid-template-columns: repeat(1, 1fr);
  }
  h1 {
    font-size: 43px;
  }
}
</style>
