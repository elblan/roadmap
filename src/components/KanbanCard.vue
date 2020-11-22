<template>
  <div
    class="content-card"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <div class="card-head" style="display:flex; justify-content:space-between;">
      <h3 class="is-size-5 has-text-weight-bold">
        {{ this.element.name }}
      </h3>
      <div class="expand" style="">
        <button
          class="button is-small"
          @click="expanded = !expanded"
          v-show="hover"
        >
          <span class="icon is-small">
            <i class="fas fa-expand-alt"></i>
          </span>
        </button>
      </div>
    </div>
    <transition name="fade">
      <p v-show="expanded">
        {{ this.element.description }}
      </p>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'KanbanCard',
  props: {
    element: Object
  },
  data() {
    return {
      expanded: false,
      hover: false
    }
  }
}
</script>

<style scoped lang="scss">
h3 {
  margin-bottom: 0.5rem;
}

.content-card {
  display: flex;
  flex-direction: column;

  padding: 1rem;
  text-align: left;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
