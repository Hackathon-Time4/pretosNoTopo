<template>
  <div>
    <v-row>
      <div v-for="card in cardTable" :key="card.id">
            <Card :p="card"/>
      </div>
    </v-row>
    <v-btn @click="teste()">Teste</v-btn>  
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

    teste() {
      console.log(this.cardTable)
    },
    getProps(index) {
      return this.cardTable[index];
    },
  }

  }
</script>

<style scoped>

</style>