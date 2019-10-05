<template>
  <section id="about">
    <b-container>
      <b-heading>A propos</b-heading>
      <b-row>
        <b-col md="6">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus beatae ratione, sunt dolor laudantium magni autem! Atque sit quos ex, hic magni fugit, voluptatem minima in perspiciatis explicabo harum assumenda! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem magni iure, ipsum provident ullam autem dolor pariatur impedit labore inventore consequatur quos numquam dicta maiores est nobis possimus nesciunt doloribus! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque deserunt amet aliquid eligendi doloribus cumque iusto porro iure? Id officiis magni a aperiam fuga obcaecati ipsum dolores expedita debitis nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

          <h6>Mot du chef</h6>
          <blockquote>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <footer class="mt-2 text-center">
              <b-img
                rounded="circle"
                blank
                blank-color="rgba(128, 255, 255, 0.5)"
                width="56"
                height="56"
                class="mr-2"
              ></b-img>
              <cite class="d-block mt-1">chef name</cite>
            </footer>
          </blockquote>
        </b-col>
        <b-col md="6">
          <div>
            <b-img blank blank-color="rgba(128, 255, 255, 0.5)" fluid-grow class="mr-2"></b-img>
          </div>
          <div class="mt-2">
            <h2 class="mb-2">Nos coordonnées</h2>
            <address>
              <b-row>
                <b-col>
                  <ul class="list-unstyled">
                    <li class="mb-2">
                      <unicon name="map-pin"></unicon>
                      <p class="d-inline-flex mb-0 ml-2">69 Rue banane</p>
                    </li>
                    <li class="mb-2">
                      <unicon name="phone"></unicon>
                      <a class="ml-1" href="tel:+491570156">+49 157 0156</a>
                    </li>
                  </ul>
                </b-col>
                <b-col>
                  <ul class="list-unstyled">
                    <li class="mb-2">
                      <unicon name="facebook"></unicon>
                      <a class="ml-1" href="https://facebook.com/x">@x</a>
                    </li>
                    <li class="mb-2">
                      <unicon name="instagram"></unicon>
                      <a class="ml-1" href="https://instagram.com/x">@x</a>
                    </li>
                  </ul>
                </b-col>
              </b-row>
            </address>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import BHeading from "./BHeading.vue";
export default {
  components: {
    BHeading
  }
};
</script>

<style lang="scss" scoped>
blockquote {
  & {
    padding: 1em;
    background-color: grey;
    border-radius: 1em;
    color: white;
  }
  p {
    &::before {
      content: "\201C";
      font-size: 1.2em;
    }
    &::after {
      content: "\201D";
      font-size: 1.2em;
    }
  }
}
</style>
