<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item">
        <router-link to="/">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
        /></router-link>
      </a>
    </div>

    <div class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">
          <router-link to="/"
            ><span><strong>Home</strong></span></router-link
          >
        </a>

        <a class="navbar-item">
          <router-link to="/kanban"
            ><span><strong>Kanban</strong></span></router-link
          >
        </a>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <login></login>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Login from './Login.vue'
export default {
  components: { Login },
  name: 'NavBar'
}
</script>

<style scoped lang="scss">
.navbar-item {
  text-decoration: none;
  color: inherit;
}

.purple {
  background-color: #6930c3;
  color: white;
  &:hover {
    background-color: #7400b8;
    color: white;
  }
}
</style>
