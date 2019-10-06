<template>
  <section>
    <b-container class="pb-5 pt-1">
      <b-heading class="text-center mb-4">Ce que nos clients disent</b-heading>
      <b-row>
        <b-col v-for="n in 3" :key="n">
          <reviews-single-item />
        </b-col>
      </b-row>
      <b-row class="mt-3 d-flex justify-content-center">
        <b-button pill variant="outline-info" size="md" href="#">Voir plus d'avis</b-button>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import BHeading from "./BHeading.vue";
import ReviewsSingleItem from "./ReviewsSingleItem.vue";
export default {
  components: {
    BHeading,
    ReviewsSingleItem
  }
};
</script>

<style lang="scss" scoped>
a {
  text-transform: uppercase;
}
</style>