<template>
  <b-card>
    <b-media>
      <template #aside>
        <b-img rounded="circle" blank blank-color="#ccc" width="80" alt="placeholder"></b-img>
      </template>
      <h5>Excellent !</h5>
      <div>
        <unicon name="star" fill="#FFBF00"></unicon>
        <unicon name="star" fill="#FFBF00"></unicon>
        <unicon name="star" fill="#FFBF00"></unicon>
        <unicon name="star" fill="#FFBF00"></unicon>
        <unicon name="star" fill="#FFBF00"></unicon>
      </div>
      <blockquote class="mt-2">
        <q>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque tempora est, quia quas officiis totam optio.</q>
        <footer class="mt-2">
          name,
          <cite>date</cite>
        </footer>
      </blockquote>
    </b-media>
  </b-card>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 480px) and (max-width: 800px) {
  .card {
    margin-top: 1em;
  }
}
</style>