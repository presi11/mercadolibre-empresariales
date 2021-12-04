<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <b-input-group>
      <b-form-input
        type="text"
        v-model="search"
        placeholder="Busca tu item..."
        v-on:keyup.enter="getItems"
      ></b-form-input>
      <b-input-group-append>
        <b-button variant="outline-primary" v-on:click="getItems"
          >Button</b-button
        >
      </b-input-group-append>
    </b-input-group>
    <div class="grid-card" id="itemCard">
      <div v-for="(items, index) in items" :key="index">
        <CardItem
          :address="items.address.city_name"
          :tittle="items.title"
          :price="items.price"
          :thumbnail="items.thumbnail"
          :idItem="items.prices.id"
        >
        </CardItem>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
/* import HelloWorld from "@/components/HelloWorld.vue"; */
import CardItem from "@/components/CardItem";
export default {
  name: "Home",
  components: {
    CardItem,
  },

  data: function () {
    return {
      search: "",
      items: [],
    };
  },

  /*   async created() {
    this.getItems();
  }, */
  methods: {
    async getItems() {
      let params = {
        item: this.search,
      };
      await this.$store.dispatch("getItemPage", params);
      this.items = this.$store.state.Items;

      console.log(this.$store.state.Items);
    },
  },
};
</script>

<style >
.grid-card {
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
  grid-template-rows: auto;
  justify-items: center;
}
</style>
