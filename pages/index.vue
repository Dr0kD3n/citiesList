<template>
  <section class="container">
    <div>total number: {{citiesList.length}}</div>
    <div v-for="(city, index) in citiesList">
      <CityEntry :city="city" v-if="currentPage*entriesPerPage === index + 1 || currentPage*entriesPerPage === index + 2" />
    </div>
    <nuxt-link to="/addCity">Home page</nuxt-link>
    <b-pagination-nav base-url="#" :number-of-pages="Math.ceil(citiesList.length/entriesPerPage)" v-model="currentPage" />
  </section>
</template>
<script>
import CityEntry from '../components/CityEntry'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vue from 'vue'
Vue.use(BootstrapVue);
export default {
  data() {
    return {
      currentPage: 1,
      entriesPerPage: 2
    }
  },
  watch: {

  },
  computed: {
    citiesList() {
      return this.$store.state.citiesList
    }
  },
  components: {
    CityEntry
  },
  mounted(){
    this.$store.commit('fetchData')
  },
}

</script>
<style>
.page-link:focus {
  box-shadow: unset;
}

</style>
