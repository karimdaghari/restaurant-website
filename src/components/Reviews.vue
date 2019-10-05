<template>
  <section>
    <b-container class="pb-5 pt-1">
      <b-heading>Ce que nos clients disent</b-heading>
      <b-row>
        <b-col>
          <reviews-single-item />
        </b-col>
        <b-col>
          <reviews-single-item />
        </b-col>
        <b-col>
          <reviews-single-item />
        </b-col>
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
</style>