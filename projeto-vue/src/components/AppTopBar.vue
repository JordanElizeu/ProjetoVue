<template>
    <div class="app-top-bar">
      <v-app-bar
      color="green lighten-1"
      dense
      dark
    >
      <v-app-bar-nav-icon @click="drawer=true"></v-app-bar-nav-icon>

      <v-toolbar-title class="text-center">{{title}}</v-toolbar-title>
    </v-app-bar>
    
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary>
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="green--text text--lighten-2"
        >
        <router-link to="/">
          <v-list-item @click="title='Home'">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
        </router-link>
        <router-link to="/vendas">
          <v-list-item @click="title='Tabela de Vendas'">
            <v-list-item-icon>
              <v-icon>mdi-shopping</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Vendas</v-list-item-title>
          </v-list-item>
        </router-link>
        <router-link to="/produtos">
          <v-list-item @click="title='Tabela de Produtos'">
            <v-list-item-icon>
              <v-icon>mdi-cart</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Produtos</v-list-item-title>
          </v-list-item>
        </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    name:'AppTopBar',
    data(){
        return{
            title:'Home',
            drawer: false,
            group: null,
        }
    },
}
</script>

<style scoped>
.app-top-bar a{
  text-decoration: none;
}
</style>