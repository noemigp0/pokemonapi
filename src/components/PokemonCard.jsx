import { useEffect, useState } from "react"

export default function PokemonCard(props) {
    const { img, name} = props  //use dry --Dont repeat yourself
    
    const [pokemon, setPokemon] = useState({ sprites: {front_default: ""}})
    useEffect(() => {
        fetch(props.url)
        .then((response) => response.json())
        .then((json) => setPokemon(json) ) 
    }, [])
    return (
        <article className="pokemon-card">
        <header>
          <img src={pokemon.sprites.front_default} alt="pokemon image"></img>
        </header>
        <footer>
          <p>{props.name}</p>
        </footer>
      </article>
    )
}