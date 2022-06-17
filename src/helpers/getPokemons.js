import pokemonApi from "../api/pokemonApi"

const getPokemons = Array.from(Array(650))

const getPokemonsOptions = async () => {
  const mixedPokemons = getPokemons.map((_, index) => index + 1).sort(() => Math.random() - 0.5).splice(0, 4)
  const pokemons = mixedPokemons.map((pokemonId) => pokemonApi.get(`/${pokemonId}`))
  const [ p1 , p2, p3, p4 ] = await Promise.all(pokemons)

  return [{ id: p1.data.id, name: p1.data.name },
  { id: p2.data.id, name: p2.data.name },
  { id: p3.data.id, name: p3.data.name },
  { id: p4.data.id, name: p4.data.name },]
}

export default getPokemonsOptions