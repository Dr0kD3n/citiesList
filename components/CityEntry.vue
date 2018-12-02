<template>
  <div>
    name: {{this.name}}
    temp: {{this.temp}}
    wind: {{this.wind}}
    pressure: {{this.pressure}}
    <button @click="deleteEntry">Delete</button>
  </div>
</template>
<script>
export default {
  props: ['city'],
  computed: {
    name() {
      return this.city.name
    },
    temp() {
      return this.city.temp
    },
    wind() {
      return this.city.wind
    },
    pressure() {
      return this.city.pressure
    },
    id() {
      return this.city.id
    }
  },
  methods: {
    deleteEntry() {
      this.$store.commit('deleteEntry', this.id)
    }
  }

}

</script>
