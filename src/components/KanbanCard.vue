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
      <div class="expand" style="opacity: 0.5;">
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
    <div class="votes">
      <button
        v-if="!hasVoted"
        class="button is-small"
        @click="
          voteCount += 1
          hasVoted = true
        "
        style="background-color:#72efdd"
      >
        <span class="icon is-small">
          <i class="far fa-user"></i>
        </span>
        <span>{{ voteCount }}</span>
      </button>
      <button
        v-if="hasVoted"
        class="button is-small"
        @click="
          voteCount -= 1
          hasVoted = false
        "
        style="background-color:#56cfe1;"
      >
        <span class="icon is-small">
          <i class="fas fa-user-check"></i>
        </span>
        <span>{{ voteCount }}</span>
      </button>
    </div>
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
      expanded: true,
      hover: false,
      hasVoted: false,
      voteCount: this.element.votes
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

.votes {
  text-align: right;
}
</style>
