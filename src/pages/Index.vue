<template>
  <Layout>
    <Hero />
    <Reviews />
    <Menu />
    <hr />
    <About />
  </Layout>
</template>

<script>
import Hero from "@/components/Hero.vue";
import Reviews from "@/components/Reviews.vue";
import Menu from "@/components/Menu.vue";
import About from "@/components/About.vue";
export default {
  components: {
    Hero,
    Reviews,
    Menu,
    About
  }
};
</script>

<style>
</style>