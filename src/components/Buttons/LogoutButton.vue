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
    width: 120px;
    height: 40px;
}
button:hover {
    cursor: pointer;
}
</style>