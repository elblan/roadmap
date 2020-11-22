<template>
  <div class="board">
    <kanban-column title="Backlog" :list="backlog"></kanban-column>
    <kanban-column title="Planned" :list="planned"></kanban-column>
    <kanban-column title="In Progress" :list="inProgress"></kanban-column>
    <kanban-column title="Done" :list="done"></kanban-column>
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
    return {
      backlog: [
        { name: 'John 1', id: 0 },
        { name: 'Joao 2', id: 1 },
        { name: 'Jean 3', id: 2 }
      ],
      planned: [
        { name: 'Jonny 4', id: 3 },
        { name: 'Guisepe 5', id: 4 }
      ],
      inProgress: [
        { name: 'Jonn123y 4', id: 5 },
        { name: 'Guisepe 532', id: 6 }
      ],
      done: [
        { name: 'Jon12ny 4', id: 7 },
        { name: 'Guise44444pe 52', id: 8 }
      ]
    }
  }
}
</script>
<style scoped lang="scss">
h2 {
  color: #80ffdb;
}
.board {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.column {
  background: #5e60ce;
  margin: 1rem;
  padding: 1rem;
  min-width: 250px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
}

.list-group-item.item {
  background: white;
  margin: 0.5rem;
  border-radius: 4px;
  height: 35px;
  box-shadow: 7px 7px 9px -4px rgba(196, 151, 196, 0.99);
  transition: box-shadow 0.5s;

  &:hover {
    box-shadow: 10px 10px 9px -4px rgba(196, 151, 196, 0.99);
  }
}

/* Transitions */

.list-group {
  padding: 20px 0;
  border-radius: 4px;
  background-color: #72efdd;
}

.list-group-item {
  cursor: grab;
}

.ghost.chosen {
  opacity: 0;
}

.chosen.drag {
  font-weight: 600;
  opacity: 1 !important;
}

.drag {
  opacity: 1;
}
</style>
