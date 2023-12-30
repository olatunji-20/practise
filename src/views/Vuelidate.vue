<template>
  <h1>FOR FORM VALIDATION</h1>
  <div class="form">
    <VuelidateForm />
  </div>
</template>

<script>
import VuelidateForm from '@/components/VuelidateForm.vue';

export default {
    name: 'Vuelidate',
    components: {
      VuelidateForm
    }

}
</script>

<style scoped>
h1 {
  text-align: center;
}
.form {
  border: 2px solid blue;
  width: 500px;
  height: auto;
  margin: 50px auto;
  border-radius: 10px;
}
</style>