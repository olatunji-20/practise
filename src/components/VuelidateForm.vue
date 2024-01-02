<template>
  <form @submit.prevent="submitForm">
    <input v-model="userData.username" placeholder="username" type="text" />
    <p class="error" v-for="error in v$.username.$errors" :key="error.$uid">
      {{ error.$message }}
    </p>

    <input v-model="userData.email" placeholder="email" type="email" />
    <p class="error" v-for="error in v$.email.$errors" :key="error.$uid">
      {{ error.$message }}
    </p>

    <input v-model="userData.password" placeholder="password" type="password" />
    <p class="error" v-for="error in v$.password.$errors" :key="error.$uid">
      {{ error.$message }}
    </p>

    <input v-model="userData.confirmPassword" placeholder="confirm password" type="password" />
    <p class="error" v-for="error in v$.confirmPassword.$errors" :key="error.$uid">
      {{ error.$message }}
    </p>

    <!-- FOR GROUPED(ALL) ERRORS -->
    <p class="error" v-for="error in v$.$errors" :key="error.$uid">
      {{ error.$property }} - {{ error.$message }}
    </p>
    <br />
    <button @click="submitForm">SUBMIT</button>
  </form>
</template>

<script>
import { ref, computed } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, sameAs } from "@vuelidate/validators";

export default {
  name: "VuelidateForm",
  setup() {
    const userData = ref({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    const rules = computed(() => {
      return {
        username: { required, minLength: minLength(8) },
        email: { required, email },
        password: { required },
        confirmPassword: { required, sameAs: sameAs(userData.value.password) },
      };
    });

    const v$ = useVuelidate(rules, userData);

    const submitForm = async () => {
      const result = await v$.value.$validate();

      if (result) {
        console.log("YOU ARE GOOD");
        console.log(userData.value);
      } else {
        console.log("you are bad");
      }
    };

    return {
      userData,
      submitForm,
      v$,
    };
  },
};
</script>

<style scoped>
form {
  border: 2px solid red;
  background: goldenrod;
  text-align: center;
  padding: 25px 30px;
}
input {
  width: 100%;
  height: 30px;
  margin: 10px auto 0px;
  text-indent: 15px;
}
button {
  padding: 10px 40px;
  background: salmon;
  border: 0px;
  border-radius: 5px;
  margin-top: 20px;
}
button:hover {
  background: red;
  color: white;
  cursor: pointer;
}
.error {
  color: red;
  text-align: left;
  font-size: 12px;
}
</style>