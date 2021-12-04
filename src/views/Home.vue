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
      <div v-for="(characters, index) in characters" :key="index">
        <CardCharacter
          :name="characters.name"
          :image="characters.image"
          :species="characters.species"
          :status="characters.status"
          :idCharacter="characters.id"
        >
        </CardCharacter>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
/* import HelloWorld from "@/components/HelloWorld.vue"; */

export default {
  name: "Home",
  components: {},

  data: function () {
    return {
      search: "",
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
    },
  },
  computed() {
    console.log("hiiiiiiiiiii");
  },
};
</script>

<style lang="scss">
  .grid-card {
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
  grid-template-rows: auto;
  justify-items: center;
}
</style>
