<template>
  <div class="Kanban">
    <h1>This is where the Kanban board goes</h1>
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
