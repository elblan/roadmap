<template>
  <div class="column">
    <h2 class="subtitle is-size-4 has-text-weight-bold">
      {{ title }}
    </h2>

    <draggable
      id="first"
      v-model="cards"
      class="list-group"
      draggable=".item"
      group="card"
      v-bind="dragOptions"
      @start="drag = true"
      @end="drag = false"
    >
      <div
        v-for="element in cards"
        :key="element.id"
        class="list-group-item item"
      >
        <kanban-card :list-id="listId" :card-id="element.id"></kanban-card>
      </div>
    </draggable>
    <div
      v-if="this.title == 'Backlog'"
      style="margin-left:auto; margin-top: 1rem;"
    >
      <button class="button" style="background-color:#72efdd;" @click="add">
        <span class="icon is-small">
          <i class="fa fa-plus"></i>
        </span>
        <span>Add Item</span>
      </button>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import store from '@/store/index.js'
import KanbanCard from '@/components/KanbanCard'

let id = 1
export default {
  name: 'KanbanColumn',
  components: {
    draggable,
    KanbanCard
  },
  props: {
    title: String,
    listId: String
  },
  data() {
    return {
      drag: false,
      listData: store.lists
    }
  },
  computed: {
    cards: {
      get() {
        return store.getters.getCardsByColumn(this.listId)
      },
      set(value) {
        this.$store.dispatch('updateCards', {
          listId: this.listId,
          newList: value
        })
      }
    },
    dragOptions() {
      return {
        animation: 200,
        group: 'description',
        disabled: false,
        ghostClass: 'ghost',
        chosenClass: 'chosen',
        dragClass: 'drag'
      }
    }
  },
  methods: {
    add: function() {
      this.columnList.push({
        name: 'Item ' + id,
        description: 'This is a description',
        votes: 0,
        id: id++
      })
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
  background: #5390d9;
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
  min-height: 35px;
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
  background-color: #48bfe3;
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
