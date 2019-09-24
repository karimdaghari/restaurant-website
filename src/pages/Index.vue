<template>
  <Layout>
    <p>Fullwidth/height jumbotron here</p>
    <hr />
    <Reviews />
    <hr />
    <Menu />
    <hr />
    <About />
  </Layout>
</template>

<script>
import Reviews from "@/components/Reviews.vue";
import Menu from "@/components/Menu.vue";
import About from "@/components/About.vue";
export default {
  components: {
    Reviews,
    Menu,
    About
  }
};
</script>

<style>
</style>