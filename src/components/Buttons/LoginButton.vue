<template>
  <button @click="handleLogin">LOG IN</button>
</template>
  
<script>
import { useAuth0 } from '@auth0/auth0-vue';

export default {
  name: "LoginButton",
  setup() {
    const { loginWithRedirect } = useAuth0();

    const handleLogin = () => {
      loginWithRedirect({
        appState: {
          target: "/profile"
        }
      });
      // alert("you just clicked on the LOGIN buton");

    };

    return {
      handleLogin,
    };
  },
};
</script>
  
<style scoped>
button {
  background: green;
  width: 120px;
  height: 40px;
}
button:hover {
  cursor: pointer;
}
</style>