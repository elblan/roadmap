import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: 'Etienne',
      email: 'etienneleblan@gmail.com',
      id: 123123,
      votes: [0, 2, 5],
      role: 'visitor'
    },
    lists: [
      {
        id: 'backlog',
        name: 'Backlog',
        items: [
          {
            name: 'Firebase Authentication',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            votes: 3,
            id: 0,
            column: 'backlog'
          },
          {
            name: 'Settings',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
            votes: 0,
            column: 'backlog',
            id: 1
          },
          {
            name: 'Voter verification',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            votes: 2,
            column: 'backlog',
            id: 2
          }
        ]
      },
      {
        id: 'planned',
        name: 'Planned',
        items: [
          {
            name: 'Add and Manage description',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            votes: 5,
            id: 3
          },
          {
            name: 'Vote system',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            votes: 12,
            id: 4
          }
        ]
      },
      {
        id: 'inProgress',
        name: 'In Progress',
        items: [
          {
            name: 'Expand list',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
            votes: 4,
            id: 5
          },
          {
            name: 'Card layout',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            votes: 9,
            id: 6
          }
        ]
      },
      {
        id: 'done',
        name: 'Done',
        items: [
          {
            name: 'App foundations',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
            votes: 0,
            id: 7
          },
          {
            name: 'Better component system',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
            votes: 0,
            id: 8
          }
        ]
      }
    ]
  },
  getters: {
    getCardsByColumn: state => column => {
      return state.lists.find(element => element.id == column).items
    },
    getCardById: state => (listId, cardId) => {
      const list = state.lists.find(el => el.id == listId).items
      return list.find(el => el.id == cardId)
    },
    userHasVoted: state => cardId => {
      return state.user.votes.find(el => el == cardId) != null
    }
  },
  // Mutation: Synchronous
  mutations: {
    UPDATE_CARDS(state, payload) {
      const listId = state.lists.findIndex(el => el.id == payload.listId)
      Vue.set(state.lists[listId], 'items', payload.newList)
    },
    UPDATE_CARD_VOTES(state, payload) {
      const value = payload.action == 'decrease' ? -1 : 1
      const list = state.lists.find(el => el.id == payload.listId).items
      const card = list.find(el => el.id == payload.cardId)

      if (payload.action == 'decrease') {
        // filter existing votes and save it in newVotes
        const newVotes = state.user.votes.filter(el => el !== payload.cardId)
        Vue.set(state.user, 'votes', newVotes)
      } else {
        state.user.votes.push(payload.cardId)
      }

      Vue.set(card, 'votes', card.votes + value)
    }
  },
  // Actions: Asynchronous. Only for changes to the state
  actions: {
    updateCards({ commit }, payload) {
      commit('UPDATE_CARDS', payload)
    },
    // Update votes array in user state
    updateUserVotes({ commit }, payload) {
      commit('UPDATE_USER_VOTES', payload)
    },
    // Increase or decrease vote count
    updateCardVotes({ commit }, payload) {
      commit('UPDATE_CARD_VOTES', payload)
    }
  }
})
