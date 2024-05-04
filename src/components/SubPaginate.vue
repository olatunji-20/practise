<template>
  <main>
    <h4>PAGINATION</h4>
    <p>{{ totalResults }}</p>
    <p>{{ perPage }}</p>
    <p>{{ totalPages }}</p>
    <p>{{ currentPage }}</p>
    <p>{{ maxVisibleButtons }}</p>
  </main>
  <ul>
    <li>
      <button type="button">first</button>
    </li>
    
    <li>
      <button type="button">prev</button>
    </li>

    <li v-for="page in pages" :key="page.name" >
      <button class="num" type="button" :disabled="page.isDisabled">{{ page.name }}</button>
    </li>

    <li>
      <button type="button">next</button>
    </li>

    <li>
      <button type="button">last</button>
    </li>

  </ul>
</template>

<script>
export default {
    name: "SubPaginate",
    setup() {
        return {

        }
    },
    computed: {
      startPage() {
        // when on start page

        if (this.currentPage === 1) {
          return 1;
        }

        // when on the last page

        if (this.currentPage === this.totalPages) {
          return this.totalPages - this.maxVisibleButtons;
        }

        // when inbetween

        return this.currentPage -1;
      },

      pages() {
        const range = [];

        for(let i = this.startPage; i <= Math.min(this.startPage + this.maxVisibleButtons -1, this.totalPages); i++) {
          range.push({
            name: i,
            isDisabled: i === this.currentPage
          });
        }
        return range;
      }
    },
    props: {
      totalResults: {
        type: Number,
        required: true
      },
      perPage : {
        type: Number,
        required: true
      },
      totalPages: {
        type: Number,
        required: true
      },
      currentPage: {
        type: Number,
        required: true
      },
      maxVisibleButtons: {
        type: Number
      }
    }

}
</script>

<style scoped>
main {
    border: 4px solid green;
    height: 400px;
    width: 600px;
    margin: 50px auto;
}

p {
  font-size: 35px;
  color: purple;
  line-height: 5px;
}

ul {
  list-style-type: none;
  border: 2px solid green;
  width: 650px;
  margin: 0px auto;
}

li {
  display: inline-block;
  margin: 0px 15px;
}
.num {
  width: 30px;
  height: 30px;
  background: teal;
  border-radius: 50%;
  margin: 0px 5px;
}
</style>