<template>
  <section>
    <h2 class="text-uppercase text-center mt-2 mb-2">Menu</h2>
    <b-container>
      <h3 class="text-uppercase mb-2">Entrées</h3>
      <b-row class="mb-2">
        <b-col md="4" class="mb-2">
          <menu-single-item>
            <template #mealName>Entrée 1</template>
          </menu-single-item>
        </b-col>
        <b-col md="4" class="mb-2">
          <menu-single-item>
            <template #mealName>Entrée 2</template>
          </menu-single-item>
        </b-col>
        <b-col md="4" class="mb-2">
          <menu-single-item>
            <template #mealName>Entrée 3</template>
          </menu-single-item>
        </b-col>
      </b-row>
      <h3 class="text-uppercase mb-2">Plats</h3>
      <b-row class="mb-2">
        <b-col md="4" class="mb-2">
          <menu-single-item>
            <template #mealName>Plat 1</template>
          </menu-single-item>
        </b-col>
        <b-col md="4" class="mb-2">
          <menu-single-item>
            <template #mealName>Plat 2</template>
          </menu-single-item>
        </b-col>
        <b-col md="4" class="mb-2">
          <menu-single-item>
            <template #mealName>Plat 3</template>
          </menu-single-item>
        </b-col>
      </b-row>
      <h3 class="text-uppercase mb-2">Déserts</h3>
      <b-row class="mb-2">
        <b-col md="4" class="mb-2">
          <menu-single-item>
            <template #mealName>Desert 1</template>
          </menu-single-item>
        </b-col>
        <b-col md="4" class="mb-2">
          <menu-single-item>
            <template #mealName>Desert 2</template>
          </menu-single-item>
        </b-col>
        <b-col md="4" class="mb-2">
          <menu-single-item>
            <template #mealName>Desert 3</template>
          </menu-single-item>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import MenuSingleItem from "./MenuSingleItem.vue";
export default {
  components: {
    MenuSingleItem
  }
};
</script>

<style>
</style>