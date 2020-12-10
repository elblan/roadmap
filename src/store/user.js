import Vue from 'vue'
import { db } from '../main'

const user = {
  state: {
    // Firebase user object
    user: null,
    // Calculated user details
    userMetadata: { votes: [] }
  },
  getters: {
    userHasVoted: state => cardId => {
      return state.userMetadata.votes.find(el => el == cardId) != null
    },
    getUser: state => {
      return state.user
    }
  },
  mutations: {
    UPDATE_USER_VOTES(state, payload) {
      if (payload.action == 'decrease') {
        // filter existing votes and save it in newVotes
        const newVotes = state.userMetadata.votes.filter(
          el => el !== payload.cardId
        )
        Vue.set(state.userMetadata, 'votes', newVotes)
      } else {
        state.userMetadata.votes.push(payload.cardId)
      }

      db.collection('userMetadata')
        .doc(state.user.uid)
        .set({ votes: state.userMetadata.votes })
    },
    SET_USER(state, payload) {
      state.user = payload.user
    },
    SET_VOTES(state, payload) {
      state.userMetadata.votes = payload.votes
    }
  },
  actions: {
    setUser({ commit }, payload) {
      commit('SET_USER', payload)
    },
    fetchUserMetadata({ commit, state }) {
      let data

      db.collection('userMetadata')
        .doc(state.user.uid)
        .get()
        .then(doc => {
          data = doc.data()
          commit('SET_VOTES', data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}

export default user
