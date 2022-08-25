import { useEffect, useState } from "react";
import PokemonCard from "./components/PokemonCard";


// const pokemons =[
//   {
//   img: "https://assets.stickpng.com/thumbs/585961604f6ae202fedf285a.png",
//   name: "jigglypuff"
// },
// {
//   img: "https://www.megaidea.net/wp-content/uploads/2021/08/Pokemon02-956x1024.png",
//   name: "bulbasaur"
// },
// {
//   img: "https://flyclipart.com/thumbs/view-1394452104763-pokemon-chikorita-1677248.png",
//   name: "chikorita"
// },
// {
//   img: "https://i.pinimg.com/736x/85/1e/cf/851ecf1b1c06cb071c37fb3c6de2ea4a.jpg",
//   name: "psydock"
// },

// ]





function App() {
  const [ pokemons , setPokemons ] = useState([])
  useEffect( () => {
    fetch('https://pokeapi.co/api/v2/pokemon')
    .then((response) => response.json())
    .then((json) =>{ setPokemons(json.results)} )
    
  }, [])
  
  
  return (
    <>
      <header className="header-logo">
        <img src="https://avatars.githubusercontent.com/u/64151210?v=4" alt="pokeapi-logo" />
      </header>
        <main className="pokemon-list">
          
          {
            pokemons.map(pokemon => {
              return <PokemonCard name={pokemon.name} url={pokemon.url} />
            })
          }
        </main>

      
    </>
  );
}

export default App;
