<template>
  <b-navbar toggleable="md">
    <b-navbar-brand href="/">
      <img
        src="http://www.pngall.com/wp-content/uploads/2016/04/Hexagon-PNG.png"
        alt="Logo"
        class="logo"
      />
    </b-navbar-brand>

    <b-navbar-toggle target="c-nav"></b-navbar-toggle>

    <b-collapse is-nav id="c-nav">
      <b-navbar-nav class="ml-auto">
        <g-link class="nav-link" to="/#about" tag="b-nav-item">A propos</g-link>
        <g-link class="nav-link" to="/#menu" tag="b-nav-item">Menu</g-link>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item router-tag="a" href="https://facebook.com/">
          <unicon name="facebook-f"></unicon>
        </b-nav-item>
        <b-nav-item router-tag="a" href="https://instagram.com/">
          <unicon name="instagram"></unicon>
        </b-nav-item>
        <b-nav-item>
          <b-button size="sm" variant="outline-primary" pill to="#">Réserver</b-button>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
* {
  text-transform: uppercase;
}
.logo {
  width: 6.5rem;
}
</style>

