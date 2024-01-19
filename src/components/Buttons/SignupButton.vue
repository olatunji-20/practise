<template>
  <button @click="handleSignUp">SIGNUP</button>
</template>

<script>
import { useAuth0 } from '@auth0/auth0-vue';

export default {
  name: "SignupButton",
  setup() {
    const { loginWithRedirect } = useAuth0();


    const handleSignUp = () => {
      loginWithRedirect({
        appState: {
          target: "/profile-page"
        },
        authorizationParams: {
          screen_hint: "signup"
        }
      })
      // alert("you just clicked on the SIGNUP button.");
    }

    return {
      handleSignUp
    }
  }
};
</script>

<style scoped>
button {
  background: greenyellow;
  width: 120px;
  height: 40px;
  margin-left: 40px;
}
button:hover {
  cursor: pointer;
}
</style>