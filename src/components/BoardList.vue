<template>
  <div class="board-list">
    <router-link to="/kanban"
      ><board-list-card board-id="kanban"></board-list-card
    ></router-link>
  </div>
</template>

<script>
import BoardListCard from './BoardListCard.vue'
export default {
  name: 'BoardList',
  components: { BoardListCard },
  data() {
    return {}
  }
}
</script>
<style scoped lang="scss">
.board-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  background-color: #4ea8de;
  margin: 2rem;
  padding: 1rem;
  border-radius: 4px;
  a {
    text-decoration: none;
    color: inherit;
  }
}
</style>
