<template>
  <h1>TO PRACTICE PAGINATION</h1>

  <p>Will fetch the api from the parent component then pass down the details(i.e totalResults, perPage, totalPages, currentPage and maxVisibleButtons) as props to the child components. </p>
  <SubPaginate />
  <h1>Players: {{ players }}</h1>
  <h1>totalResults: {{ players.length }}</h1>
  <h1>perPage: {{perPage }}</h1>
  <h1>totalPages: {{ totalPages }}</h1>
  <h1>currentPage: {{ currentPage }}</h1>
  <h1>maxVisibleButtons: {{ maxVisibleButtons }}</h1>
</template>

<script>
import SubPaginate from '@/components/SubPaginate.vue'

export default {
    name: "Paginate",
    setup() {
      let players = [
        {
          id: 1,
          name: "palmer",
          jerseyNumber: 20,
          position: "attacking midfielder"
        },
        {
          id: 2,
          name: "jackson",
          jerseyNumber: 15,
          position: "striker"
        },
        {
          id: 3,
          name: "enzo",
          jerseyNumber: 8,
          position: "midfielder"
        },
        {
          id: 4,
          name: "caicedo",
          jerseyNumber: 25,
          position: "defensive midfielder"
        },
        {
          id: 5,
          name: "gallagher",
          jerseyNumber: 23,
          position: "midfielder"
        },
      ];
      const totalResults = 1;
      const perPage = 2;
      const totalPages = 4;
      const currentPage = 6;
      const maxVisibleButtons = 8;

      return {
        players,
        totalResults,
        perPage,
        totalPages,
        currentPage,
        maxVisibleButtons
      }
    },
    components: {
      SubPaginate
    }

}
</script>

<style>
p {
  color: red;
}
</style>