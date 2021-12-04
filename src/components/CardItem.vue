<template>
  <div>
    <!--       <router-link
        class="router"
        :to="{ name: 'Information', params: { id: idCharacter } }"
      > -->
    <b-card
      bg-variant="white"
      text-variant="black"
      :title="tittle"
      img-height="300"
      img-width="300"
      :img-src="thumbnail"
      img-alt="Image"
      img-left
      style="max-width: 540px; max-height: 300px; img-border-radius: 2rem"
      class="mb-4"
      img-border-radius="2px"
    >
      <div class="info-item">
        <h4>{{ price }}</h4>

        <h4>{{ address }}</h4>
      </div>
    </b-card>
    <!--       </router-link> -->
  </div>
</template>

<script>
export default {
  name: "CardItem",
  props: {
    address: null,
    tittle: null,
    price: null,
    thumbnail: null,
  },
};
</script>

<style lang="scss">
#title {
  color: #00ff97;
}

.card-img-left {
  background-size: 20px;
  color: #00ff97;
}

.router {
  color: white;
  text-decoration: none;
}
.button-more {
  margin: 3rem;
  justify-content: flex-end;
  align-content: flex-end;
}
.character {
  transition: transform 200ms ease-in-out;
  display: flex;
  text-align: left;
  margin: 1rem;

  &:hover {
    transform: scale(1.05);
    h3 {
      color: var(--text-orange);
    }
  }
}
</style>