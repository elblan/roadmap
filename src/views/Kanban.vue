<template>
  <div class="Kanban">
    <KanbanBoard />
  </div>
</template>

<script>
// @ is an alias to /src
import KanbanBoard from '@/components/KanbanBoard.vue'

export default {
  name: 'Kanban',
  components: {
    KanbanBoard
  }
}
</script>
