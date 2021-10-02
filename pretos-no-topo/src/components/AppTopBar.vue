<template>
  <div>
    <v-app-bar color="rgb(165,42,42,.9)" dense light height="80">
      <router-link to="/">
        <img class="mr-3" :src="require('../assets/logo.png')" height="70" />
      </router-link>

      <v-spacer></v-spacer>

      <v-app-bar-nav-icon>
        <v-menu left bottom color="rgb(165,42,42,.9)" dense light height="80">
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </template>

          <v-list class="app-top-bar">
            <v-list-item-group 
            v-model="group" 
            active-class="app-text-selection">

              <router-link to="/">
                <v-list-item>
                  <v-list-item-title>Início</v-list-item-title>
                </v-list-item>
              </router-link>

              <router-link to="/midias">
                <v-list-item>
                  <v-list-item-title>Mídias</v-list-item-title>
                </v-list-item>
              </router-link>

              <router-link to="/indicacoes">
                <v-list-item>
                  <v-list-item-title>Indicações</v-list-item-title>
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
.app-text-selection {
 background-color: #A0522D;
 color: #fff !important;

}
</style>
