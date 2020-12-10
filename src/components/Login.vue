<template>
  <div>
    <div class="dropdown is-hoverable is-right">
      <div class="dropdown-trigger">
        <button
          class="button purple has-text-white"
          aria-haspopup="true"
          aria-controls="dropdown-menu2"
        >
          <span v-if="!user">Get In</span>
          <span v-else>{{ user.displayName.replace(/ .*/, '') }}</span>
          <span class="icon is-small">
            <i class="fas fa-user" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div class="dropdown-menu" id="dropdown-menu2" role="menu">
        <div class="dropdown-content" style="min-width: 400px;">
          <div class="dropdown-item">
            <div v-if="!user" id="firebaseui-auth-container"></div>
            <div v-else>
              <div class="card">
                <div class="card-image" style="margin-left: 1rem; ">
                  <img
                    :src="user.photoURL"
                    style="min-height:75px;min-width:75px; border-radius:50%;border:3px solid #333"
                  />
                </div>
                <div class="card-stacked">
                  <div class="card-content">
                    <p>
                      name: <strong>{{ user.displayName }}</strong
                      ><br />email:<strong>{{ user.email }}</strong
                      ><br />uid: <strong>{{ user.uid }}</strong>
                      <br />provider:
                      <strong class="teal-text">{{
                        user.providerData[0].providerId
                      }}</strong>
                    </p>
                  </div>
                </div>
              </div>
              <hr class="dropdown-divider" />
              <div class="dropdown-item has-text-centered">
                <button class="button is-danger" @click="logOut">
                  <span class="icon">
                    <i class="fas fa-sign-out-alt"></i>
                  </span>
                  <span>Log out</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import { mapGetters } from 'vuex'

export default {
  name: 'Login',
  components: {},
  computed: {
    ...mapGetters({ user: 'getUser' })
  },
  methods: {
    logOut(e) {
      e.stopPropagation()
      firebase.auth().signOut()
      window.location.reload()
    }
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('setUser', { user })
        this.$store.dispatch('fetchUserMetadata')
      }
    })
  },
  mounted() {
    var uiConfig = {
      signInFlow: 'popup',
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
      ]
    }
    let ui = firebaseui.auth.AuthUI.getInstance()
    if (!ui) {
      ui = new firebaseui.auth.AuthUI(firebase.auth())
    }
    ui.start('#firebaseui-auth-container', uiConfig)
  }
}
</script>
<style scoped lang="scss">
.card {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.login-wrapper {
  background-color: blue;
  height: 10px;
}

.purple {
  background-color: #6930c3;
  border-radius: 4px;
  font-weight: 600;
  color: white;
  &:hover {
    background-color: #7400b8;
    color: white;
  }
}
</style>
