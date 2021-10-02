<template>
    <v-container fluid d-flex flex-column  align-center class="container">
         <v-img class="image"
      lazy-src="../../public/images/bg-2.png"
  max-width="250"
      src="../../public/images/bg-2.png"
      >
         </v-img>
    <div id="flex">
      <v-text class="text-lg-h6 text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet qui possimus nihil assumenda aut cumque eligendi non reprehenderit quidem, molestias velit nemo quae, a reiciendis, facere sunt illo nisi. Debitis!
      </v-text>
      
      <v-img class="image"
      lazy-src="../../public/images/bg.png"
      src="../../public/images/bg.png"
      >
      </v-img>
    </div>

    </v-container>
</template>

<script>
export default {
  name: 'Inicio'
}
</script>

<style scoped>

#flex {
  display: flex;
  justify-content: center;
}

.image {
  max-width: 100%;
  width: 50vw;
  display: block;
}

.text {
  max-width: 90%;
  font-size: 25px
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