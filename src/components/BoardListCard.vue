<template>
  <div class="board-card">
    <div class="card-head">
      <h3 class="is-size-5 has-text-weight-bold">
        Dev Board
      </h3>
    </div>
    <div class="content-card">
      <p>
        This is a description for the board
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BoardListCard',
  props: {
    boardId: String
  },
  components: {},
  data() {
    return {}
  }
}
</script>
<style scoped lang="scss">
.board-card {
  background: white;
  margin: 0.5rem;
  padding: 1rem;
  text-align: left;
  border-radius: 4px;
  min-height: 35px;
  box-shadow: 7px 7px 9px -4px rgba(153, 107, 153, 0.99);
  transition: box-shadow 0.5s;

  &:hover {
    box-shadow: 10px 10px 9px -4px rgba(153, 107, 153, 0.99);
  }
}

.content-card {
  margin: 1rem 0;
}
</style>
