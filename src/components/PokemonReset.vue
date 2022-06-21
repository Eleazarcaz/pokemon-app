<template>
  <h1 v-if="correctAnswer">Sí, es {{ pokemonName }} :D</h1>
  <h1 v-else>Uppss!! Es {{ pokemonName }} :(</h1>
  <button @click="$emit('resetGame')">Reiniciar</button>
</template>

<script>
export default {
  props: {
    pokemonName: null,
    correctAnswer: false,
  }
}
</script>

<style>
</style>