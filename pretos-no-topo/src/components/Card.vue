<template>
  <v-card
      class="mx-3 my-12 blue-grey lighten-5 card-outter justify-center"
      hover
      max-width="374"
      min-height="620"
      outlined rounded
    >
    <v-img
    contain
      height="250"
      :src="p.imagem"
    ></v-img>

    <v-card-title>{{ p.nome }}</v-card-title>
    
    <v-card-actions>
      <v-btn
        color="black lighten-2"
        text
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>


    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{p.descricao}}
        </v-card-text>
      </div>
    </v-expand-transition>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>CATEGORIAS</v-card-title>

    <v-card-text >
      <v-chip v-for="(cat, i) in p.categorias" :key="i" class="mx-1 my-1"> {{ cat }}</v-chip>
    </v-card-text>

    <v-card-actions class="justify-center card-actions">
      <v-btn :href="p.link" target="_blank"
      >
        Saiba mais!
      </v-btn>
    </v-card-actions>
  </v-card>  
</template>

<script>


export default {
  name: "Card",
  props: ['p'],
  data: () => ({
      show: false,
    }),

    methods: {
    },
}
</script>

<style scoped>
.card-outter {
  position: relative;
  padding-bottom: 50px;
}
.card-actions {
  position: absolute;
  text-align: center;
  left: 30%;
  bottom: 0;
}
</style>