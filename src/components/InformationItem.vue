<template>
  <div class="about">
    <h1>Información del producto </h1>
    <h1>{{item.title}}</h1>

    <h2>{{item.id}}</h2>

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
      title:null
    };
  },

  async created() {
    await this.$store.dispatch(
      "getItem",
      this.$route.params.id
      
    );
    this.item = this.$store.state.Item
    this.img = this.item.thumbnail
    this.title = this.item.title

  },
};
</script>