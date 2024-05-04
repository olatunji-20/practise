<template>
  <h1>TO PRACTICE PAGINATION</h1>

  <p>Will fetch the api from the parent component then pass down the details(i.e totalResults, perPage, totalPages, currentPage and maxVisibleButtons) as props to the child components. </p>
 
 
  <SubPaginate :totalResults="totalResults" :perPage="perPage" :totalPages="totalPages" :currentPage="currentPage" :maxVisibleButtons="maxVisibleButtons" />


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
        {
          id: 6,
          name: "petrovic",
          jerseyNumber: 28,
          position: "goalkeeper"
        },
        {
          id: 7,
          name: "gilchrist",
          jerseyNumber: 23,
          position: "defender"
        },
        {
          id: 8,
          name: "chalobah",
          jerseyNumber: 14,
          position: "defender"
        },
        {
          id: 9,
          name: "badiashile",
          jerseyNumber: 5,
          position: "defender"
        },
        {
          id: 10,
          name: "cucurella",
          jerseyNumber: 3,
          position: "defender"
        },
        {
          id: 11,
          name: "mudryk",
          jerseyNumber: 10,
          position: "midfielder"
        },
        {
          id: 12,
          name: "acheampong",
          jerseyNumber: 43,
          position: "defender"
        }
      ];
      const totalResults = players.length;
      const perPage = 3;
      const totalPages = players.length / perPage;
      const currentPage = 1;
      const maxVisibleButtons = 3;

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