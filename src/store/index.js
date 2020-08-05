import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        name: "Basic Deck",
        price: 7,
        description:
          "The Basic Deck includes 68 cards: 10 cards in each of six categories, three reference cards, five blank cards for developing your own backstory elements, and instructions.",
        image: require("@/assets/Draeorc.png"),
        dtc:
          "https://www.drivethrucards.com/product/318288/Better-Backstories--Basic-Deck",
      },
      {
        name: "Card Bundle",
        price: 10,
        description:
          "The Card Bundle includes the Basic Deck, Technical Booster, Mystical Booster and instructions as a single self-printable PDF.",
        image: require("@/assets/Twilight.png"),
      },
      {
        name: "Full Bundle with Box",
        price: 12,
        description:
          "The Full Bundle includes the Basic Deck, Technical Booster, Mystical Booster, instructions and tuck box as a single self-printable PDF.",
        image: require("@/assets/Orig_Godbringer.png"),
      },
      {
        name: "Technical Booster",
        price: 2,
        description:
          "The Technical Booster includes 10 new cards that focus on sci-fi and hi-tech concepts.  Also includes two blank cards for creating your own backstory elements.",
        image: require("@/assets/Andrea_the_Sharp.png"),
        dtc:
          "https://www.drivethrucards.com/product/318289/Better-Backstories--Technical-Booster",
      },
      {
        name: "Mystical Booster",
        price: 2,
        description:
          "The Mystical Booster includes 10 new cards that focus on magic and fantasy concepts.  Also includes two blank cards for creating your own backstory elements.",
        image: require("@/assets/Akmhenos_Courage.png"),
        dtc:
          "https://www.drivethrucards.com/product/318291/Better-Backstories--Mystical-Booster",
      },
    ],
    itemPurchased: "",
  },
  mutations: {
    getItem: function(state, item) {
      this.state.itemPurchased = item;
    },
  },
  actions: {},
  modules: {},
});
