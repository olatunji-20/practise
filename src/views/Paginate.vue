<template>
  <h1>TO PRACTICE PAGINATION</h1>

  <p>
    Will fetch the api from the parent component then pass down the details(i.e
    totalResults, perPage, totalPages, currentPage and maxVisibleButtons) as
    props to the child components.
  </p>

  <!-- MAIN MAIN MAIN MAIN MAIN MAIN MAIN -->

  <div class="n">
    <h3 class="names" v-for="item in postsForDisplay" :key="item.id"> {{ item.name }} </h3>
  </div>


  <!-- MAIN MAIN MAIN MAIN MAIN MAIN MAIN -->



  
  <SubPaginate
    :totalResults="totalResults"
    :perPage="perPage"
    :totalPages="totalPages"
    :currentPage="currentPage"
    :maxVisibleButtons="maxVisibleButtons"
    @pagechanged="onPageChange"
  />

  <!-- <h1>Players: {{ players }}</h1> -->
  <h6>totalResults: {{ players.length }}</h6>
  <h6>perPage: {{ perPage }}</h6>
  <h6>totalPages: {{ totalPages }}</h6>
  <h6>currentPage: {{ currentPage }}</h6>
  <h6>maxVisibleButtons: {{ maxVisibleButtons }}</h6>
</template>

<script>
import { ref, computed } from 'vue'
import SubPaginate from "@/components/SubPaginate.vue";

export default {
  name: "Paginate",
  setup(_, { emit }) {
    let players = ref([
        {
          id: 1,
          name: "palmer",
          jerseyNumber: 20,
          position: "attacking midfielder",
        },
        {
          id: 2,
          name: "jackson",
          jerseyNumber: 15,
          position: "striker",
        },
        {
          id: 3,
          name: "enzo",
          jerseyNumber: 8,
          position: "midfielder",
        },
        {
          id: 4,
          name: "caicedo",
          jerseyNumber: 25,
          position: "defensive midfielder",
        },
        {
          id: 5,
          name: "gallagher",
          jerseyNumber: 23,
          position: "midfielder",
        },
        {
          id: 6,
          name: "petrovic",
          jerseyNumber: 28,
          position: "goalkeeper",
        },
        {
          id: 7,
          name: "gilchrist",
          jerseyNumber: 23,
          position: "defender",
        },
        {
          id: 8,
          name: "chalobah",
          jerseyNumber: 14,
          position: "defender",
        },
        {
          id: 9,
          name: "badiashile",
          jerseyNumber: 5,
          position: "defender",
        },
        {
          id: 10,
          name: "cucurella",
          jerseyNumber: 3,
          position: "defender",
        },
        {
          id: 11,
          name: "mudryk",
          jerseyNumber: 10,
          position: "midfielder",
        },
        {
          id: 12,
          name: "acheampong",
          jerseyNumber: 43,
          position: "defender",
        },
      ]);

    const totalResults = players.value.length;
    const perPage = ref(3);
    const totalPages = players.value.length / perPage.value;
    const currentPage = ref(1);
    const maxVisibleButtons = ref(3);

    const onPageChange = (page) => {
      console.log(page);
      currentPage.value = page;
    }

    const postsForDisplay = computed(() => {
      let startIndex = perPage.value * (currentPage.value - 1);
      let endIndex = startIndex + perPage.value;

      return players.value.slice(startIndex, endIndex);
    })

    return {
      players,
      totalResults,
      perPage,
      totalPages,
      currentPage,
      maxVisibleButtons,
      onPageChange,
      postsForDisplay
    };
  },
  components: {
    SubPaginate,
  },
  emits: ["pagechanged"]
};
</script>

<style scoped>
p {
  color: red;
}
.n {
  border: 3px solid blue;
  width: 500px;
  height: auto;
  margin: 50px auto;
  text-align: center;
}
.names {
  margin: 5px auto;
}
</style>