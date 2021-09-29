<template>
<v-container>
    <v-footer
      v-bind="localAttrs"
      :padless="padless"
      app
    >
      <v-card
        flat
        tile
        width="100%"
        class="red lighten-1 text-center"
      >
        <v-card-text>
            <router-link to="/"> 
                <v-icon size="24px" class="icons">
                 mdi-home
            </v-icon>
            </router-link>
            <router-link to="/produtos">
                <v-icon size="24px" class="icons">    
                mdi-email
                </v-icon> 
            </router-link>
            <router-link to="/produtos">
                <v-icon size="24px" class="icons">
                mdi-calendar
                </v-icon>
            </router-link>  
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
            <p>{{ new Date().getFullYear() }} — Todos os direitos reservados!</p>
           <strong>Devs - Andrew - Jordan</strong>
        </v-card-text>
      </v-card>
    </v-footer>


  </v-container>
</template>

<script>
export default {
    name: 'AppFooter',
     data: () => ({
      items: [
        'default',
        'absolute',
        'fixed',
      ],
      padless: false,
      variant: 'default',
    }),
    computed: {
      localAttrs () {
        const attrs = {}

        if (this.variant === 'default') {
          attrs.absolute = false
          attrs.fixed = false
        } else {
          attrs[this.variant] = true
        }
        return attrs
      },
    },
}
</script>

<style>
.icons{
    padding: 0px 10px;
}
a{
    text-decoration: none;
}
</style>