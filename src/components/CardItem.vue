<template>
  <div>
          <router-link
        class="router"
        :to="{ name: 'Information', params: { id: idItem } }"
      >
    <b-card
      bg-variant="white"
      text-variant="black"
      :title="title"
      img-height="300"
      img-width="300"
      :img-src="thumbnail"
      img-alt="Image"
      img-left
      style="max-width: 650px; max-height: 550px; img-border-radius: 2rem"
      class="mb-4"
      img-border-radius="2px"
    >
      <div class="info-item">
        <h4>{{ price }}</h4>

        <h4>{{ address }}</h4>

        <h4>{{ idItem }}</h4>
      </div>
    </b-card>
          </router-link>
  </div>
</template>

<script>
export default {
  name: "CardItem",
  props: {
    address: null,
    title: null,
    price: null,
    thumbnail: null,
    idItem:null
  },
};
</script>

<style >


</style>