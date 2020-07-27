<template>
  <div class="product-container">
    <router-link :to="{ name: 'Buy', params: {product: products.name } }">
      <div>
        <h2>
          {{ products.name }}
          <span class="price">${{ products.price }}</span>
        </h2>
        <div class="card-container">
          <img :src="products.image" alt="cards" />
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ShopItem",
  props: ["products"]
};
</script>
<style scoped>
h2 {
  font-size: 1.5rem;
}
.product-container {
  width: 100%;
  height: 100%;
  background: #e3dcdc;
  border: 15px solid #d2bf9e;
}
.product-container:hover {
  background: #ffffff;
}
.cards-container {
  height: 100%;
  width: 100%;
}
img {
  width: 100%;
  height: 250px;
  object-fit: scale-down;
}
.price {
  padding-right: 10px;
}
</style>
