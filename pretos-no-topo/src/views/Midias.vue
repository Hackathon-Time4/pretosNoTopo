<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card elevation="24" max-width="550" class="mx-auto my-6">
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
              <v-sheet>
                <v-row class="fill-height" align="center" justify="center">
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
                <a
                  class="instagram"
                  href="https://www.instagram.com/projetopretosnotopo/"
                  target="_blank"
                  >@projetopretosnotopo</a
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
      <v-col class="my-6">
        <iframe
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DWYUyIIJqUwTE"
          width="100%"
          height="380"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Midias",
  data() {
    return {
      cycle: true,
      imagens: [
        {
          src: require("../../public/images/familia.jpg"),
        },

        {
          src: require("../../public/images/criança.jpg"),
        },

        {
          src: require("../../public/images/pandemia.jpg"),
        },

        {
          src: require("../../public/images/dentista.jpg"),
        },
      ],
    };
  },
};
</script>

<style>
.instagram {
  text-decoration: none;
}
</style>