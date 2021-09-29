<template>
  <v-container> 
      <v-footer
    dark
    padless
    app
  >
    <v-card
      class="flex footer"
      flat
      tile
    >
      <v-card-title class="teal">
        <strong class="subheading">Obrigado pela visita! Volte Sempre!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        Todos os direitos reservados - {{ new Date().getFullYear() }}
      </v-card-text>
      <v-card-text class="py-2 white--text text-center">
        <strong> Devs - Andrew e Jordan</strong>
      </v-card-text>
    </v-card>
  </v-footer>


  </v-container>
</template>

<script>
export default {
    name: 'AppFooter',
     data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
}
</script>

<style>
</style>