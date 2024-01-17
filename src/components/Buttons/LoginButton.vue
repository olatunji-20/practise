<template>
    <button @click="handleLogin">LOGIN</button>
  </template>
  
  <script>
  export default {
      name: 'LoginButton',
      setup() {
        const handleLogin = () => {
          alert("you just clicked on the LOGIN buton")
        }

        return {
          handleLogin
        }
      }
  
  }
  </script>
  
  <style scoped>
  button {
    background: green;
    width: 100%;
    height: 100%;
  }
  button:hover {
    cursor: pointer;
  }
  </style>