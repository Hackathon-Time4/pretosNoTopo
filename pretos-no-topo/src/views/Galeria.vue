<template>
  <div class="galeria">
    <v-container>
      <v-card
    elevation="24"
    max-width="550"
    class="mx-auto"
  >
    <v-system-bar lights-out></v-system-bar>
    <v-carousel
      :continuous="false"
      :cycle="cycle"
      :show-arrows="true"
      hide-delimiter-background
      delimiter-icon="mdi-minus"
      height="450"
    >
      <v-carousel-item
        v-for="(image, i) in imagens"
        :key="i"
        :src="image.src"
      >
        <v-sheet
         
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
          
            
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <v-list two-line>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="../assets/instagram.png"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <a class= "instagram" href="https://www.instagram.com/projetopretosnotopo/">@Pretos no Topo</a>
        </v-list-item-content>
        
      </v-list-item>
    </v-list>
  </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Galeria',
  data () {
      return {
        
        cycle: false,
        imagens: [

         {

            src: require('../../public/images/familia.jpg'),

          },

          {

            src: require('../../public/images/criança.jpg'),

          },

          {

            src: require('../../public/images/pandemia.jpg'),

          },

          {

            src: require('../../public/images/dentista.jpg'),

          },



        ],
      }
    },
  }

</script>

<style>
.instagram{
  text-decoration: none;
}

</style>