<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>
  <div v-else>
    <h1>¿Quien es este Pokemon?</h1>
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <PokemonOptions :pokemons="pokemonsArr" @selection-pokemon="checkAnswer" />
    <PokemonReset v-if="showPokemon" :pokemonName="pokemon.name" :correctAnswer="correctAnswer"
      @reset-game="resetGame" />
  </div>
</template>

<script>
import PokemonOptions from '../components/PokemonOptions.vue'
import PokemonPicture from '../components/PokemonPicture.vue'
import PokemonReset from '../components/PokemonReset.vue'

import getPokemonsOptions from '../helpers/getPokemons'

export default {
  data() {
    return {
      pokemonsArr: [],
      pokemon: null,
      showPokemon: false,
      correctAnswer: false
    }
  },
  components: {
    PokemonOptions,
    PokemonPicture,
    PokemonReset
  },
  methods: {
    async mixedPokemons() {
      this.pokemonsArr = await getPokemonsOptions();
      const rndNumber = Math.floor(Math.random() * 4)
      this.pokemon = this.pokemonsArr[rndNumber]
    },
    checkAnswer(receivePokemonId) {
      this.showPokemon = true
      if (receivePokemonId === this.pokemon.id) {
        this.correctAnswer = true
      } else {
        this.correctAnswer = false
      }

    },
    resetGame() {
      this.pokemonsArr = []
      this.pokemon = null
      this.showPokemon = false
      this.mixedPokemons()
    }

  },
  mounted() {
    this.mixedPokemons();
  }
}
</script>