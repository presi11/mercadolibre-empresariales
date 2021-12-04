<template>
  <div class="item">
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

          <h3>Valor: {{ price }}</h3>

          <h3>Locacion: {{ address }}</h3>

          <h3>ID: {{ idItem }}</h3>
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
    idItem: null,
  },
};
</script>

<style >

.item {
  transition: transform 200ms ease-in-out;
  display: flex;
  text-align: left;
  margin: 1rem;
}

.router {
  color: white;
  text-decoration: none;
}

</style>