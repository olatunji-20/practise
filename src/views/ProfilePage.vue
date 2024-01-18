<template>
  <h1>PROFILE PAGE</h1>
  <div class="profile-image"></div>
  <div class="user-details">
    <h3>NAME: <span>{{ user }}</span></h3>
    <!-- <h3>E-mail: <span>{{ user.email }}</span></h3>
    <h3>Picture: <span>{{ user.picture }}</span></h3> -->
  </div>
</template>

<script>
import { useAuth0 } from '@auth0/auth0-vue';

export default {
    name: "ProfilePage",
    setup() {
      const { user } = useAuth0();

      return {
        user
      }
    }
}
</script>

<style scoped>
h1 {
  text-align: center;
  margin: 80px 0 50px;
  text-decoration: underline;
}
.profile-image {
  border: 4px solid blue;
  width: 200px;
  height: 200px;
  margin: 0px auto;
  border-radius: 50%;
}
.user-details {
  border: 2px solid pink;
  height: 150px;
  width: 500px;
  margin: 50px auto;
  padding: 0px 5px;
}
</style>