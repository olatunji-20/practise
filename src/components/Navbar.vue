<template>
  <div class="navbar">
    <div class="logo"></div>
    <div class="menu">
        <ul>
            <li>menu</li>
            <li>pages v </li>
            <ul class="dropdown">
                    <li>Home</li>
                    <!--<li>About</li>
                    <li>Chart.js</li>
                    <li>Vuelidate</li>
                    <li>Profile Page</li> -->
            </ul>
            <li>services</li>
            <li>contacts</li>
        </ul>
    </div>
    <div class="auth">
        <div class="button">
            <LoginButton />
        </div>
        <div class="button">
            <SignupButton />
        </div>
    </div>
  </div>
</template>

<script>
import LoginButton from './Buttons/LoginButton.vue';
import SignupButton from './Buttons/SignupButton.vue';

export default {
    name: "Navbar",
    components: {
        LoginButton,
        SignupButton
    }

}
</script>

<style>
.navbar {
    border: 2px solid red;
    width: 100%;
    height: 120px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}
.logo {
    border: 2px solid green;
    width: 200px;
    height: 60px;
}
.menu {
    border: 2px solid blue;
    width: auto;
    height: auto;
}
.menu ul {
    display: flex;
    flex-direction: row;
}
.menu ul li {
    list-style-type: none;
    padding: 0px 15px;
}
.dropdown {
    border: 2px solid tomato;
    width: 120px;
    height: 200px;
    background: powderblue;
    position: absolute;
    top: 85px;
    /* left: 50px; */
}
.menu .dropdown ul li {
    display: block;
}
.auth {
    border: 2px solid yellowgreen;
    height: auto;
    width: 300px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.button {
    border: 2px solid red;
    width: 120px;
    height: 40px;
}
</style>