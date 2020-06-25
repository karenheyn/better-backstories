<template>
  <div class="about">
    <AboutDesc />
    <Quote />
    <BioRight />
    <!-- <AboutPage /> -->
  </div>
</template>
<script>
// @ is an alias to /src
// import AboutPage from "@/components/AboutPage.vue";
import AboutDesc from "@/components/aboutPage/AboutDesc.vue";
import BioRight from "@/components/aboutPage/BioRight.vue";
import Quote from "@/components/aboutPage/Quote.vue";
export default {
  name: "About",
  components: {
    AboutDesc,
    // AboutPage,
    BioRight,
    Quote
  }
};
</script>
