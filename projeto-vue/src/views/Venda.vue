<template>
  <v-container>

      <h1 class="text-center">Vendas</h1>
      <v-img src="../img/venda.jpg" alt=""> </v-img>
      
      <h2 class="mt-2 mb-2 text-center">Abaixo uma lista de vendas que fizemos ultimamente</h2>
      <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Data
          </th>
          <th class="text-left">
            Nome
          </th>
          <th class="text-left">
            Produto
          </th>
          <th class="text-left">
            Valor
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="venda of vendas" :key="venda.id">
          <td>{{venda.Data}}</td>
          <td>{{venda.Nome_Cliente}}</td>
          <td>{{venda.Nome_Produto}}</td>
          <td>{{venda.Valor_Venda}}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  
  </v-container>
</template>

<script>
export default {
    name : 'Time',
    data(){
      return{
        vendas : []
      }
    },
    created(){
      fetch('https://jordanelizeu.github.io/Data/vendas.json')
      .then(resultado => resultado.json())
      .then(json => {
        this.vendas = json;
      })
    }
}
</script>

<style scoped>

</style>
