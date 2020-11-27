import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: [
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
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        votes: 2,
        column: 'backlog',
        id: 2
      },
      {
        name: 'Add and Manage description',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        votes: 5,
        column: 'planned',
        id: 3
      },
      {
        name: 'Vote system',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        votes: 12,
        column: 'planned',
        id: 4
      },
      {
        name: 'Expand list',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        votes: 0,
        column: 'inProgress',
        id: 5
      },
      {
        name: 'Card layout',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        votes: 9,
        column: 'inProgress',
        id: 6
      },
      {
        name: 'App foundations',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        votes: 0,
        id: 7,
        column: 'done'
      },
      {
        name: 'Better component system',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
        votes: 0,
        id: 8,
        column: 'done'
      }
    ]
  },
  getters: {
    getCardsByColumn: state => column => {
      return state.cards.filter(element => element.column == column)
    }
  },
  mutations: {
    updateColumn(state, payload) {
      state.cards = state.cards.map(el => {
        if (payload.listName != el.column) {
          return el
        }
      })

      state.cards.push(...payload.value)
    }
  },
  actions: {
    updateColumn({ commit }, payload) {
      commit('updateColumn', payload)
    }
  }
})

/* 
Cards
  id  
  column 
  title 
  description 
  priority 
  votes


*/
