<template>
  <section id="menu">
    <b-container>
      <b-heading class="text-center mb-4">Menu</b-heading>
      <section>
        <b-heading>Entrées</b-heading>
        <b-row class="mb-2">
          <b-col md="4" class="mb-2" v-for="n in 3" :key="n">
            <menu-single-item>
              <template #mealName>Entrée {{ n }}</template>
            </menu-single-item>
          </b-col>
        </b-row>
        <b-row class="d-flex justify-content-center">
          <b-button pill size="md" variant="outline-info" href="#">Consulter nos entrées</b-button>
        </b-row>
      </section>

      <section>
        <b-heading>Plats</b-heading>
        <b-row class="mb-2">
          <b-col md="4" class="mb-2" v-for="n in 3" :key="n">
            <menu-single-item>
              <template #mealName>Plat {{ n }}</template>
            </menu-single-item>
          </b-col>
        </b-row>
        <b-row class="d-flex justify-content-center">
          <b-button pill size="md" variant="outline-info" href="#">Consulter nos plats</b-button>
        </b-row>
      </section>

      <section>
        <b-heading>Déserts</b-heading>
        <b-row class="mb-2">
          <b-col md="4" class="mb-2" v-for="n in 3" :key="n">
            <menu-single-item>
              <template #mealName>Désert {{ n }}</template>
            </menu-single-item>
          </b-col>
        </b-row>
        <b-row class="d-flex justify-content-center">
          <b-button pill size="md" variant="outline-info" href="#">Consulter nos déserts</b-button>
        </b-row>
      </section>
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

<style scoped>
a {
  text-transform: uppercase;
  margin-bottom: 1em;
}
</style>