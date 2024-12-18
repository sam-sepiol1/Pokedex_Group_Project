import { useEffect, useState } from "react"; // Import React hooks
import HeartButton from "../Button/Button";
import { fetchPokemons } from "./api"; // Import the fetchPokemons function
import "./_card.scss";

export default function Card({ filter = [] }) {
  const [pokemons, setPokemons] = useState([]); 

  useEffect(() => {
    const getPokemons = async () => {
      const data = await fetchPokemons(); 
      
      // If a filter is provided, filter the Pokémon list
      if (filter.length > 0) {
        setPokemons(data.filter((pokemon) => filter.includes(pokemon.name)));
      } else {
        setPokemons(data);
      }
    };
    getPokemons();
  }, [filter]);

  return (
    <div className="cards">
      {pokemons.map((pokemon) => (
        <div className="card" key={pokemon.name}>
          <div className="heart-number">
            <HeartButton name={pokemon.name} />
            <p className="card-number">
              {`#${String(pokemon.url.split('/')[6]).padStart(3, '0')}`}
            </p>
          </div>
          {pokemons.length > 0 ? (
            <>
              <img
                className="card-img"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url.split('/')[6]}.png`}
                alt={pokemon.name}
              />
              <p className="card-name">{pokemon.name}</p>
            </>
          ) : (
            <p>Loading...</p> // Show loading text while data is being fetched
          )}
        </div>
      ))}
    </div>
  );
}
