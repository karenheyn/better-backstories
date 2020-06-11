<template>
  <div class="about">
    <AboutDesc />
    <BioRight />
    <!-- <AboutPage /> -->
  </div>
</template>
<script>
// @ is an alias to /src
// import AboutPage from "@/components/AboutPage.vue";
import AboutDesc from "@/components/aboutPage/AboutDesc.vue";
import BioRight from "@/components/aboutPage/BioRight.vue";
export default {
  name: "About",
  components: {
    AboutDesc,
    // AboutPage,
    BioRight
  }
};
</script>