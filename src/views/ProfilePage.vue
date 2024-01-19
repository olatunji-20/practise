<template>
  <h1>PROFILE PAGE</h1>
  <div class="profile-image">
    <img :src="user.picture" :alt="user.nickname" class="image" />
  </div>
  <div class="user-details">
    <h3>NAME: <span>{{ user.name }}</span></h3>
    <h3>E-MAIL: <span>{{ user.email }}</span></h3>
    <h3>PICTURE: <span>{{ user.picture }}</span></h3>
    <h3>NICKNAME: <span>{{ user.nickname }}</span></h3>
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
.image {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}
.user-details {
  border: 2px solid pink;
  height: auto;
  width: 600px;
  margin: 50px auto;
  padding: 0px 5px;
}
</style>