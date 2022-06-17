<template>
  <h1>¿Quien es este Pokemon?</h1>
  <PokemonPicture :pokemonId="150" :showPokemon="true" />
  <PokemonOptions :pokemons="pokemonsArr" />
</template>

<script>
import PokemonOptions from '../components/PokemonOptions.vue'
import PokemonPicture from '../components/PokemonPicture.vue'

import getPokemonsOptions from '../helpers/getPokemons'

export default {
  data() {
    return {
      pokemonsArr: []
    }
  },
  components: {
    PokemonOptions,
    PokemonPicture
  },
  methods: {
    async mixedPokemons() {
      this.pokemonsArr = await getPokemonsOptions();
    }

  },
  mounted() {
    this.mixedPokemons();
  }
}
</script>