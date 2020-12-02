<template>
  <div>
    <div class="board-list-container">
      <h2 class="subtitle is-size-4 has-text-weight-bold">My Boards</h2>
      <div class="board-list">
        <router-link to="/kanban"
          ><board-list-card board-id="kanban"></board-list-card
        ></router-link>
      </div>
    </div>
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
.board-list-container {
  background-color: #5390d9;
  border-radius: 4px;
  margin: 2rem;
  padding: 1rem;
}

h2 {
  color: #80ffdb;
  text-align: left;
}
.board-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;

  a {
    text-decoration: none;
    color: inherit;
  }
}
</style>
