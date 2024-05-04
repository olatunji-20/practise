<template>
  <main>
    <h4>PAGINATION</h4>
    <p>total results {{ totalResults }}</p>
    <p>per page{{ perPage }}</p>
    <p>total page{{ totalPages }}</p>
    <p>current page{{ currentPage }}</p>
    <p>max vis{{ maxVisibleButtons }}</p>
  </main>
  <ul>
    <li>
      <button type="button" @click="onClickFirstPage" :disabled="isInFirstPage">first</button>
    </li>
    
    <li>
      <button type="button" @click="onClickPreviousPage" :disabled="isInFirstPage">prev</button>
    </li>

    <li v-for="page in pages" :key="page.name" >
      <button class="num" type="button" @click="onClickPage(page.name)" :disabled="page.isDisabled" :class="{ active: isPageActive(page.name) }">{{ page.name }}</button>
    </li>

    <li>
      <button type="button" @click="onClickNextPage" :disabled="isInLastPage">next</button>
    </li>

    <li>
      <button type="button" @click="onClickLastPage" :disabled="isInLastPage">last</button>
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
          const start = this.totalPages - (this.maxVisibleButtons - 1);

          if (start === 0) {
            return 1;
          }else {
            return start;
          }
        }

        // when inbetween

        // return this.currentPage -1;
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
      },

      isInFirstPage() {
        return this.currentPage === 1;
      },

      isInLastPage() {
        return this.currentPage === this.totalPages;
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
    },
    methods: {
      onClickFirstPage() {
        this.$emit('pagechanged', 1);
      },
      onClickPreviousPage() {
        this.$emit('pagechanged', this.currentPage - 1);
      },
      onClickPage(page) {
        this.$emit('pagechanged', page);
      },
      onClickNextPage() {
        this.$emit('pagechanged', this.currentPage + 1);
      },
      onClickLastPage() {
        this.$emit('pagechanged', this.totalPages);
      },
      isPageActive(page) {
        return this.currentPage === page;
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
.active {
  background: green;
  color: red;
}
</style>