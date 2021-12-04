import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Items:null,
    item:null
  },
  mutations: {
    setItemPage(state, Items) {
      state.Items = Items;
    },
    setItem(state, Item) {
      state.Item = Item;
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
      commit("setItemPage", response.data.results)
    },
    async getItem({ commit }, idCharacter) {
      let response = await axios.get(
        `https://api.mercadolibre.com/items/${idCharacter}`
      );

      if (response.status == 200) {
        commit("setItem", response.data);
      }
  

    },
  },
  modules: {





  }
})
