<template>
  <div class="navbar">
    <router-link to="/"><div class="logo"></div></router-link>
    <div class="menu">
      <ul>
        <li><router-link to="/vuelidate">Vuelidate</router-link></li>
        <li><router-link to="/chart-js">Chart.js</router-link></li>
        <li><router-link to="/profile-page">Profile Page</router-link></li>
        <!-- <li><router-link to="/vuelidate">SWIPER</router-link></li> -->
        <li><router-link to="/email-js">Email.js</router-link></li>
      </ul>
    </div>
    <div class="auth">
      <LoginButton v-if="!isAuthenticated" />
      <SignupButton v-if="!isAuthenticated" />
      <LogoutButton v-if="isAuthenticated" />
    </div>
  </div>
</template>

<script>
import { useAuth0 } from "@auth0/auth0-vue";

import LoginButton from "./Buttons/LoginButton.vue";
import LogoutButton from "./Buttons/LogoutButton.vue";
import SignupButton from "./Buttons/SignupButton.vue";

export default {
  name: "Navbar",
  setup() {
    const { isAuthenticated } = useAuth0();

    return {
      isAuthenticated,
    };
  },
  components: {
    LoginButton,
    SignupButton,
    LogoutButton,
  },
};
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
  position: relative;
}
.menu ul {
  display: flex;
  flex-direction: row;
}
.menu ul li {
  list-style-type: none;
  margin: 0px 15px;
}
.dropdown {
  border: 2px solid tomato;
  width: 120px;
  height: 200px;
  background: powderblue;
  position: absolute;
  /* display: hidden; */
  top: 50px;
  /* left: 50px; */
}
.menu .dropdown ul li {
  display: block;
}
.auth {
  border: 2px solid yellowgreen;
  height: auto;
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
select {
  border: 0px;
}
</style>

<!-- <!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
.dropbtn {
  background-color: #3498DB;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropbtn:hover, .dropbtn:focus {
  background-color: #2980B9;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown a:hover {background-color: #ddd;}

.show {display: block;}
</style>
</head>
<body style="background-color:white;">

<h2>Clickable Dropdown</h2>
<p>Click on the button to open the dropdown menu.</p>

<div class="dropdown">
  <button onclick="myFunction()" class="dropbtn">Dropdown</button>
  <div id="myDropdown" class="dropdown-content">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
  </div>
</div>

<script>
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
</script>

</body>
</html> -->
