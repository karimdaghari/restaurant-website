<template>
  <b-jumbotron tag="section" container-fluid fluid class="mb-0">
    <template #header>
      Une experience...
      <br />Unique.
    </template>

    <b-button pill variant="primary" size="lg">CTA</b-button>
  </b-jumbotron>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$fullHeight: 100vh;

section {
  height: $fullHeight;
  background-image: url("http://static3.businessinsider.com/image/525d8338ecad04b64d890baa-1190-625/a-food-critic-shares-his-best-tips-for-dining-at-fancy-restaurants.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  flex-flow: column;
  justify-content: center;
  text-align: center;
  color: darkblue;
}
</style>