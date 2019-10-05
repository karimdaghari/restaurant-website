<template>
  <b-card :img-src="mealImage">
    <b-card-title>
      <slot name="mealName">Nom Entrée</slot>
    </b-card-title>
    <b-card-sub-title class="mb-2">
      <slot name="mealPrice">9 DT</slot>
    </b-card-sub-title>
    <b-card-text class="mt-1">
      Ingrédiants:
      <slot name="mealIngrediants">Lorem, ipsum, dolor, sit, amet, consectetur adipisicing elit.</slot>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  props: {
    mealImage: {
      type: String,
      required: true,
      default:
        "https://i.pinimg.com/736x/94/69/f8/9469f84befc9d0914ec98f604eb93dd2.jpg"
    }
  }
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 480px) and (max-width: 800px) {
  .card {
    margin-top: 0.5em;
  }
}
</style>