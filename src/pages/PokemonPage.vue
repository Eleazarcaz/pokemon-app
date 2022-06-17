<template>
  <h1>¿Quien es este Pokemon?</h1>
  <PokemonPicture :pokemonId="150" :showPokemon="true" />
  <PokemonOptions />
</template>

<script>
import PokemonOptions from '../components/PokemonOptions.vue'
import PokemonPicture from '../components/PokemonPicture.vue'

export default {
  data() {
    return {}
  },
  components: {
    PokemonOptions,
    PokemonPicture
  }
}
</script>