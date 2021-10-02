<template>
  <div>
    <v-row class="justify-center">
        <Card v-for="card in cardTable" :key="card.id" :p="card"/>
    </v-row>
  </div>
</template>

<script>
import Card from './Card.vue';

export default {
  components: { Card },
  name: "CardGrid",
  data() {
    return {
      cardTable: []
    }
  },
  async created() {
      const response = await fetch("https://it3zxc-default-rtdb.firebaseio.com/racismo.json");
      const d = await response.json();
      this.cardTable = d;
  },
  methods: {
    getProps(index) {
      return this.cardTable[index];
    },
  }

  }
</script>

<style scoped>

</style>