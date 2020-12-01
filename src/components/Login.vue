<template>
  <section id="firebaseui-auth-container"></section>
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
    return {}
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
.login-wrapper {
  background-color: blue;
  height: 10px;
}
</style>
