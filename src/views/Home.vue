<template>
  <div class="home">
    <h1 class="title">Welcome</h1>
    <board-list></board-list>
  </div>
</template>

<script>
import BoardList from '../components/BoardList.vue'
// @ is an alias to /src

export default {
  name: 'Home',
  components: { BoardList }
}
</script>
