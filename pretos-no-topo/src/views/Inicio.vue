<template>
  <div>
  <v-container fluid d-flex flex-column align-center class="container">
    <v-row>
      <v-img
        class="image"
        lazy-src="../../public/images/bg-2.png"
        max-width="250"
        src="../../public/images/bg-2.png"
      >
      </v-img>
    </v-row>
    <v-row>
      <div id="flex">
        <v-text class="text-sm-body-3 px-5 text">
          Olá, bem vindos(as) ao Pretos No Topo. Esse projeto foi criado com a
          intenção de enaltecer a cultura preta. E como fazemos isso? Com muita
          informação! Aqui você poderá encontrar algumas potências negras,
          livros, artigos, videos e muito mais!
          <blockquote class="sidekick mt-4">
            Eu tenho um sonho. O sonho de ver meus filhos julgados por sua
            personalidade, não pela cor de sua pele.
            <cite> (Martin Luther King)</cite>
          </blockquote>
        </v-text>

        <v-img
          class="image"
          lazy-src="../../public/images/bg.png"
          src="../../public/images/bg.png"
        >
        </v-img>
      </div>
    </v-row>
  </v-container>
  <v-container>
        <v-row class="justify-center py-2">
      <div class="video-wrapper">
        <iframe
          class="responsive-iframe"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/n7DcbOpKUw8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </v-row>
  </v-container>
  </div>
</template>

<script>
export default {
  name: "Inicio",
};
</script>

<style scoped>

.video-wrapper{
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
}

.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}

#flex {
  display: flex;
  justify-content: center;
}

.sidekick {
  position: relative;
  padding-left: 1em;
  border-left: 0.2em solid brown;
  font-family: "Roboto", serif;
  font-size: 1.5em;
  line-height: 1.3em;
  font-weight: 100;
}
.sidekick:before,
.sidekick:after {
  font-family: Calibri;
  color: brown;
  font-size: 34px;
}
.sidekick:before {
  content: "\201e";
}
.sidekick:after {
  content: "\201c";
}
.sidekick cite {
  font-size: 50%;
  text-align: center;
  top: 50%;
}
.sidekick cite:before {
  content: " \2015 ";
}
.image {
  max-width: 100%;
  width: 50vw;
  display: block;
}

.text {
  max-width: 90%;
  font-size: 25px;
  font-family: "Roboto", serif;
}

@media (max-width: 768px) {
  .image {
    width: 90vw;
  }
  #flex {
    flex-direction: column-reverse;
  }
}
</style>