<template>
  <v-app>
    <AppTopBar/>
    <v-main >
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import AppTopBar from './components/AppTopBar.vue'

export default {
  name: 'App',
  components: {
    AppTopBar
  },
  data: () => ({
    //
  }),
};
</script>
<style>
#app{
  font-family: 'Roboto', serif;
}
</style>


