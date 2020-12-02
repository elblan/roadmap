<template>
  <div class="home">
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
