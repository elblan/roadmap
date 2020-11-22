<template>
  <div class="board">
    <div class="column">
      <h2 class="subtitle is-size-4 has-text-weight-bold">
        Backlog
      </h2>

      <draggable
        id="first"
        :list="list"
        class="list-group"
        draggable=".item"
        group="card"
        v-bind="dragOptions"
        @start="drag = true"
        @end="drag = false"
      >
        <div
          class="list-group-item item"
          v-for="element in list"
          :key="element.name"
        >
          {{ element.name }}
        </div>
      </draggable>
      <div style="margin-left:auto; margin-top: 1rem;">
        <button class="button" @click="add" style="background-color:#72efdd;">
          <span class="icon is-small">
            <i class="fa fa-plus"></i>
          </span>
          <span>Add Item</span>
        </button>
      </div>
    </div>

    <div class="column">
      <h2 class="subtitle is-size-4 has-text-weight-bold">To Do</h2>

      <draggable
        :list="list2"
        class="list-group"
        draggable=".item"
        group="card"
        v-bind="dragOptions"
        @start="drag = true"
        @end="drag = false"
      >
        <div
          class="list-group-item item"
          v-for="element in list2"
          :key="element.name"
        >
          {{ element.name }}
        </div>
      </draggable>
    </div>
    <div class="column">
      <h2 class="subtitle is-size-4 has-text-weight-bold">In Progress</h2>

      <draggable
        :list="list3"
        class="list-group"
        draggable=".item"
        group="card"
        v-bind="dragOptions"
        @start="drag = true"
        @end="drag = false"
      >
        <div
          class="list-group-item item"
          v-for="element in list3"
          :key="element.name"
        >
          {{ element.name }}
        </div>
      </draggable>
    </div>
    <div class="column">
      <h2 class="subtitle is-size-4 has-text-weight-bold">Done</h2>

      <draggable
        :list="list4"
        class="list-group"
        draggable=".item"
        group="card"
        v-bind="dragOptions"
        @start="drag = true"
        @end="drag = false"
      >
        <div
          class="list-group-item item"
          v-for="element in list4"
          :key="element.name"
        >
          {{ element.name }}
        </div>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
let id = 1
export default {
  name: 'two-list-headerslots',
  display: 'Two list header slot',
  components: {
    draggable
  },
  data() {
    return {
      drag: false,
      list: [
        { name: 'John 1', id: 0 },
        { name: 'Joao 2', id: 1 },
        { name: 'Jean 3', id: 2 }
      ],
      list2: [
        { name: 'Jonny 4', id: 3 },
        { name: 'Guisepe 5', id: 4 }
      ],
      list3: [
        { name: 'Jonn123y 4', id: 5 },
        { name: 'Guisepe 532', id: 6 }
      ],
      list4: [
        { name: 'Jon12ny 4', id: 7 },
        { name: 'Guise44444pe 52', id: 8 }
      ]
    }
  },
  methods: {
    add: function() {
      this.list.push({ name: 'Item ' + id, id: id++ })
    }
  },
  computed: {
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
