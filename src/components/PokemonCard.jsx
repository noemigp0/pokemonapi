import { useEffect, useState } from "react";

export default function PokemonCard(props) {
  //const { img, name} = props  //use dry --Dont repeat yourself

  const [pokemon, setPokemon] = useState({});
  useEffect(() => {
    fetch(props.url)
      .then((response) => response.json())
      .then((json) => setPokemon(json));
  }, [props.url]);
  return (
    <article className="pokemon-card" onClick={props.onClick}>
      <header>
        <img src={pokemon?.sprites?.front_default} alt="pokemon" />
      </header>
      <footer>
        <p>{props.name}</p>
      </footer>
    </article>
  );
}
