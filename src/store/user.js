import Vue from 'vue'

const user = {
  state: {
    user: {
      name: 'Etienne',
      email: 'etienneleblan@gmail.com',
      id: 123123,
      votes: [0, 2, 5],
      role: 'visitor'
    }
  },
  getters: {
    userHasVoted: state => cardId => {
      return state.user.votes.find(el => el == cardId) != null
    }
  },
  mutations: {
    UPDATE_USER_VOTES(state, payload) {
      if (payload.action == 'decrease') {
        // filter existing votes and save it in newVotes
        const newVotes = state.user.votes.filter(el => el !== payload.cardId)
        Vue.set(state.user, 'votes', newVotes)
      } else {
        state.user.votes.push(payload.cardId)
      }
    }
  },
  actions: {}
}

export default user
