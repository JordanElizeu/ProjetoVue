<template>
  <v-app>
    <v-main>
      <router-view/>
 
    </v-main>
    <AppFooter/>
  </v-app>
</template>

<script>
import AppFooter from './components/AppFooter.vue'
export default {
  name: 'App',
  
  data: () => ({
    
  }),
  components: {
    AppFooter
  }
};
</script>
