<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">
        <img
          style="object-fit: contain;"
          src="https://firebasestorage.googleapis.com/v0/b/roadmapfree.appspot.com/o/roadmap%20(7).png?alt=media&token=b9543a6d-b228-47ce-81c8-f0ad7f5aa46e"
      /></router-link>
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
