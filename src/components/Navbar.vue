<template>
  <div class="d-flex justify-content-around">
    <div></div>
    <b-navbar>
      <b-nav>
        <g-link class="nav-link" to="/#about">About</g-link>
        <g-link class="nav-link" to="/#menu">Menu</g-link>
      </b-nav>
      <b-navbar-brand href="/">
        <img
          src="http://www.pngall.com/wp-content/uploads/2016/04/Hexagon-PNG.png"
          alt="Logo"
          class="logo"
        />
      </b-navbar-brand>
      <b-nav class="ml-n4">
        <b-nav-item router-tag="a" href="https://facebook.com/">
          <unicon name="facebook-f"></unicon>
        </b-nav-item>
        <b-nav-item router-tag="a" href="https://instagram.com/">
          <unicon name="instagram"></unicon>
        </b-nav-item>
      </b-nav>
    </b-navbar>
    <div class="d-flex align-items-center">
      <b-button variant="outline-danger" size="md">CTA</b-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.logo {
  width: 6.5em;
}
button {
  margin-right: 1em;
}
</style>

