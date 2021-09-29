<template>
  <v-app>
    <AppTopBar/>
    <v-main>
      <router-view/>
 
    </v-main>
    <AppFooter/>
  </v-app>
</template>

<script>
import AppFooter from './components/AppFooter.vue'
import AppTopBar from './components/AppTopBar.vue'
export default {
  name: 'App',
  
  data: () => ({
    
  }),
  components: {
    AppTopBar,
    AppFooter
  }
}
</script>
