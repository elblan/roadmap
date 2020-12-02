<template>
  <div>
    <div v-if="!user" id="firebaseui-auth-container"></div>
    <div v-else>
      <div class="card">
        <div class="card-image" style="margin-left: 1rem;">
          <img
            :src="user.photoURL"
            style="width:75px;border-radius:50%;border:3px solid #333"
          />
        </div>
        <div class="card-stacked">
          <div class="card-content">
            <p>
              name: <strong>{{ user.displayName }}</strong
              ><br />email:<strong>{{ user.email }}</strong
              ><br />uid: <strong>{{ user.uid }}</strong> <br />provider:
              <strong class="teal-text">{{
                user.providerData[0].providerId
              }}</strong>
            </p>
          </div>
        </div>
        <button class="button is-danger" @click="logOut">Log out</button>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

export default {
  name: 'Login',
  components: {},
  data() {
    return {
      user: null
    }
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
        console.log(user)
        this.user = user
      }
    })
  },
  mounted() {
    var uiConfig = {
      signInSuccessUrl: '/',
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
</style>
