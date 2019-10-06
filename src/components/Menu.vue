<template>
  <section id="menu">
    <b-heading>Menu</b-heading>
    <b-container>
      <h3 class="text-uppercase mb-2">Entrées</h3>
      <b-row class="mb-2">
        <b-col md="4" class="mb-2" v-for="n in 3" :key="n">
          <menu-single-item>
            <template #mealName>Entrée {{ n }}</template>
          </menu-single-item>
        </b-col>
      </b-row>
      <h3 class="text-uppercase mb-2">Plats</h3>
      <b-row class="mb-2">
        <b-col md="4" class="mb-2" v-for="n in 3" :key="n">
          <menu-single-item>
            <template #mealName>Plat {{ n }}</template>
          </menu-single-item>
        </b-col>
      </b-row>
      <h3 class="text-uppercase mb-2">Déserts</h3>
      <b-row class="mb-2">
        <b-col md="4" class="mb-2" v-for="n in 3" :key="n">
          <menu-single-item>
            <template #mealName>Désert {{ n }}</template>
          </menu-single-item>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import BHeading from "./BHeading.vue";
import MenuSingleItem from "./MenuSingleItem.vue";
export default {
  components: {
    BHeading,
    MenuSingleItem
  }
};
</script>

<style>
</style>