<template>
  <button @click="handleSignup">SIGNUP</button>
</template>

<script>
export default {
  name: "SignupButton",
  setup() {
    const handleSignup = () => {
      alert("you just clicked on the SIGNUP button.")
    }

    return {
      handleSignup
    }
  }
};
</script>

<style scoped>
button {
  background: greenyellow;
  width: 100%;
  height: 100%;
}
button:hover {
  cursor: pointer;
}
</style>