<template>
  <div>
    <div><input type="text" v-model="city.name" placeholder="city"></div>
    <div><input type="number" v-model="city.temp" placeholder="temp"></div>
    <div><input type="number" v-model="city.wind" placeholder="wind"></div>
    <div><input type="number" v-model="city.pressure" placeholder="pressure"></div>
    <button @click="addEntry">addEntry</button>
	<nuxt-link to="/">Home page</nuxt-link>
	<div v-if="error" class="error">Please fill in all data fields</div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      city: {
        name: '',
        temp: '',
        wind: '',
        pressure: ''
      },
        error: false
    }
  },
  methods:{
  	addEntry(){
  		if(this.name && this.temp && this.wind && this.pressure){
  			this.$store.commit('addEntry', this.city)
  		}else{
  			this.error = true
  		}
  	}
  }
}

</script>

<style>
	.error{
		color: red;
	}
</style>