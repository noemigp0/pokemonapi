import { useEffect, useState } from "react";
import PokemonCard from "./components/PokemonCard";
import Pokemodal  from "./components/Pokemodal";


function App() {
  const [ pokemons , setPokemons ] = useState([])
  const [ pokemonSelected, setPokemonSelected] = useState("")
  useEffect( () => {
    fetch('https://pokeapi.co/api/v2/pokemon')
    .then((response) => response.json())
    .then((json) =>{ setPokemons(json.results)} )
    
  }, [])
  
  const updateSelectedPokemon = (url) => {
    setPokemonSelected(url)
    console.log('url:', url)
  }

  return (
    <>
      { pokemonSelected && <Pokemodal url={pokemonSelected} onClose={() => setPokemonSelected("")}/> }
      {/* <Pokemodal /> */}
      <header className="header-logo">
        <img src="https://avatars.githubusercontent.com/u/64151210?v=4" alt="pokeapi-logo" />
      </header>
        <main className="pokemon-list">
          
          {
            pokemons.map((pokemon, index) => {
              return <PokemonCard 
              key={`pokemon-card-${index}`} 
              name={pokemon.name} 
              url={pokemon.url}
              onClick = {() => updateSelectedPokemon(pokemon.url)}
               />
            })
          }
        </main>

      
    </>
  );
}

export default App;
