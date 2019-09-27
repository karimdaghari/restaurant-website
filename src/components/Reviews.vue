<template>
  <section>
    <b-container class="pb-5 pt-4">
      <h2 class="text-uppercase text-center mb-3">Ce qu'ils disent</h2>
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
import ReviewsSingleItem from "./ReviewsSingleItem.vue";
export default {
  components: {
    ReviewsSingleItem
  }
};
</script>

<style lang="scss" scoped>
section {
  background-color: beige;
}
</style>