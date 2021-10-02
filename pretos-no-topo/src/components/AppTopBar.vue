<template>
  <div>
    <v-app-bar color="rgb(165,42,42,.9)" dense light height="80">
      <router-link to="/">
        <img class="mr-3" :src="require('../assets/logo.png')" height="70"/>
      </router-link>
      
      <v-spacer></v-spacer>

      <v-app-bar-nav-icon>
        <v-menu left bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </template>

          <v-list class="app-top-bar">
            <v-list-item-group
              v-model="group"
              active-class="brown"
            >
              <router-link to="/teste1">
                <v-list-item>
                  <v-list-item-title>Teste</v-list-item-title>
                </v-list-item>
              </router-link>

              <router-link to="/teste">
                <v-list-item>
                  <v-list-item-title>Teste</v-list-item-title>
                </v-list-item>
              </router-link>

              <router-link to="/teste">
                <v-list-item>
                  <v-list-item-title>Teste</v-list-item-title>
                </v-list-item>
              </router-link>
            </v-list-item-group>
          </v-list>
        </v-menu>
      </v-app-bar-nav-icon>
    </v-app-bar>
  </div>
</template>



<script>
export default {
  name: "AppTopBar",
};
</script>

<style scoped>
.app-top-bar a {
  text-decoration: none;
}
</style>
