<template>
  <div class="about">
    <h1>Información del producto </h1>
   

<h2>{{title}}</h2>
    <h3>COP: {{price}}</h3>
    <img :src="img" alt="">
  </div>
</template>

<script>
export default {
  name: "InformationItem",
  data: function () {
    return {
      item: null,
      img:null,
      title:null,
      price:null,
    };
  },

  async created() {
    await this.$store.dispatch(
      "getItem",
      this.$route.params.id
      
    );
    this.item = this.$store.state.Item
    this.img = this.item.pictures[0].url
    this.title = this.item.title
    this.price =this.item.price
  },
};
</script>