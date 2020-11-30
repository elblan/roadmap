<template>
  <div class="board">
    <kanban-column title="Backlog" list-id="backlog"></kanban-column>
    <kanban-column title="Planned" list-id="planned"></kanban-column>
    <kanban-column title="In Progress" list-id="inProgress"></kanban-column>
    <kanban-column title="Done" list-id="done"></kanban-column>
  </div>
</template>

<script>
import KanbanColumn from '@/components/KanbanColumn'

export default {
  name: 'KanbanBoard',
  components: {
    KanbanColumn
  },
  data() {
    return {}
  }
}
</script>
<style scoped lang="scss">
.board {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1rem;
}
</style>
