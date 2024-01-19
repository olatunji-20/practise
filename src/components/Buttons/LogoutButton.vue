<template>
  <button @click="handleLogout">LOGOUT</button>
</template>

<script>
import { useAuth0 } from '@auth0/auth0-vue';

export default {
    name: 'LogoutButton',
    setup() {
      const { logout } = useAuth0();

      const handleLogout = () => {
        logout({
          logoutParams: {
            returnTo: window.location.origin
          }
        });        
      }

      return {
        handleLogout
      }
    }

}
</script>

<style scoped>
button {
    background: red;
    width: 120px;
    height: 40px;
}
button:hover {
    cursor: pointer;
}
</style>