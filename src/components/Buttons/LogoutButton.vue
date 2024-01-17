<template>
  <button @click="handleLogout">LOGOUT</button>
</template>

<script>
export default {
    name: 'LogoutButton',
    setup() {
      const handleLogout = () => {
        alert("YOU JUSGT CLICKED THE LODOUT BUTTON")
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
    width: 100%;
    height: 100%;
}
button:hover {
    cursor: pointer;
}
</style>