import Vuex from 'vuex'
import axios from 'axios'
const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      citiesList: []
    }),
    mutations: {
      fetchData(state) {
        axios.get('https://cdn.jsdelivr.net/gh/Dr0kD3n/citiesList/citiesList.json', {
            headers: {
              'Content-Type': 'application/json;charset=UTF-8',
            },
          })
          .then(response => {
            state.citiesList = response.data
          })
      },
      deleteEntry(state, id) {
        const newState = state.citiesList.filter(city => city.id !== id)
        state.citiesList = newState
      },
      addEntry(state, entry) {
        entry.id = state.citiesList.length
        const newState = state.citiesList.push(entry)
        state = newState
      }
    }
  })
}

export default createStore
