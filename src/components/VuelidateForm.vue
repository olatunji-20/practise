<template>
  <!-- <h1>vuvufu</h1> -->
  <form>
    <input placeholder="username" type="text" />
    <input placeholder="email" type="email" />
    <input placeholder="password" type="password" />
    <input placeholder="confirm password" type="password" />
    <button>SUBMIT</button>
  </form>
</template>

<script>


export default {
    name: "VuelidateForm",
    setup() {

    }

}
</script>

<style scoped>
form {
  border: 2px solid red;
  background: goldenrod;
  text-align: center;
  padding: 25px 30px;
}
input {
  width: 95%;
  height: 30px;
  margin: 20px auto 15px;
}
button {
  padding: 10px 40px;
  background: salmon;
  border: 0px;
  border-radius: 5px;
  margin-top: 20px;
}

</style>