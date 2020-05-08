<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Description msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Description from "@/components/Description.vue";

export default {
  name: "Product",
  components: {
    Description
  }
};
</script>