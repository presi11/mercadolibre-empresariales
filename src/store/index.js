import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Items:null,
  },
  mutations: {
    setItemPage(state, Items) {
      state.Items = Items;
    },
  },
  actions: {
    async getItemPage({ commit }, payLoad) {
      let params = {
        q: payLoad.item,
      };
      let response = await axios.get(
        `https://api.mercadolibre.com/sites/MCO/search`, {params}
      );
      console.log(response);
      commit("setItemPage", response.data.results)
    },

  },
  modules: {



/*     async getCharacter({ commit }, idCharacter) {
      let response = await axios.get(
        `${url}${idCharacter}`
      );

      if (response.status == 200) {
        commit("setCharacter", response.data);
      }
      return response.data;
    }, */

  }
})
