<template>
  <div
    class="content-card"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <div class="card-head" style="display:flex; justify-content:space-between;">
      <h3 class="is-size-5 has-text-weight-bold">
        {{ card.name }}
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
        {{ card.description }}
      </p>
    </transition>
    <div class="votes mt-2">
      <button
        v-if="user && !userHasVoted"
        class="button is-small"
        @click="updateCardVotes('increase')"
        style="background-color:#72efdd"
      >
        <span class="icon is-small">
          <i class="far fa-user"></i>
        </span>
        <span>{{ card.votes }}</span>
      </button>
      <button
        v-else-if="user && userHasVoted"
        class="button is-small"
        @click="updateCardVotes('decrease')"
        style="background-color:#56cfe1;"
      >
        <span class="icon is-small">
          <i class="fas fa-user-check"></i>
        </span>
        <span>{{ card.votes }}</span>
      </button>
      <button
        v-else-if="!user"
        class="button is-small has-tooltip-warning has-tooltip-arrow has-tooltip-bottom"
        data-tooltip="You need to log in order to vote."
        style="background-color:lightgrey"
      >
        <span class="icon is-small">
          <i class="far fa-user"></i>
        </span>
        <span>{{ card.votes }}</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'KanbanCard',
  props: {
    cardId: {
      type: Number
    },
    listId: {
      type: String
    }
  },
  data() {
    return {
      expanded: true,
      hover: false,
      hasVoted: false
    }
  },
  methods: {
    updateCardVotes(action) {
      this.$store.dispatch('updateCardVotes', {
        action,
        listId: this.listId,
        cardId: this.cardId
      })
    }
  },
  computed: {
    ...mapGetters({ user: 'getUser' }),
    card() {
      return this.$store.getters.getCardById(this.listId, this.cardId)
    },
    userHasVoted() {
      return this.$store.getters.userHasVoted(this.cardId)
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
