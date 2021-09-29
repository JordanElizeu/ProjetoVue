<template>
    <div class="classificacao">
        <v-simple-table v-for="produtos of viewProdutos" :key="produtos.id">
    <template v-slot:default>
      <tbody>
        <v-card
        class="mx-auto mt-5 mb-5"
        max-width="250"
    >
        <v-img
        :src="produtos.download1"
        ></v-img>
        <v-card-title>
        {{produtos.descricao}}
        </v-card-title>

        <p id="valor" class="ml-4">
        {{produtos.venda}}
        </p>

        <v-card-actions>
        <v-btn
            color="orange lighten-2"
            text
        >
            Explorar mais
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn
            icon
            @click="show = !show"
        >
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
        </v-card-actions>

        <v-expand-transition>
        <div v-show="show">
            <p class="Desc">
                Marca: {{produtos.marca}}
            </p>
            <p class="Desc">
                Produto: {{produtos.produto}}
            </p>
            <p class="Desc">
                Quantidade disponível: {{produtos.quantidade}}
            </p>
            <p class="Desc">
                Validade: {{produtos.data}}
            </p>
        </div>
        </v-expand-transition>
    </v-card>
      </tbody>
    </template>
  </v-simple-table>
    </div>
</template>

<script>
export default {
    name:'Classificacao',
    data(){
        return{
            show: false,
            viewProdutos: []
        }
    },
    created(){
        fetch('https://jordanelizeu.github.io/Data/produtos.json')
        .then((resultado) => resultado.json())
        .then((json) => {
            this.viewProdutos = json;
        });
    }
}
</script>

<style scoped>
#valor{
    color: red;
}
.Desc{
    margin: 0;
    margin-left: 18px;
    margin-bottom: 5px;
}
</style>