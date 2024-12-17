import { useEffect, useState } from "react"; // Import React hooks
import HeartButton from "../Button/Button";
import { fetchPokemons } from "./api"; // Import the fetchPokemons function
import "./_card.scss";

export default function Card() {
  const [pokemons, setPokemons] = useState([]); // State to store Pokémon data

  // Use useEffect to fetch data when the component mounts
  useEffect(() => {
    const getPokemons = async () => {
      const data = await fetchPokemons(); // Call fetchPokemons
      setPokemons(data); // Store the fetched Pokémon data in state
    };

    getPokemons(); // Call the asynchronous function
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  return (
    <div className="card">
      <div className="heart-number">
        <HeartButton />
        <p className="card-number"># 000</p>
      </div>

      {/* Render Pokémon data once it's available */}
      {pokemons.length > 0 ? (
        <>
          <img
            className="card-img"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemons[0].url.split('/')[6]}.png`}
            alt={pokemons[0].name}
          />
          <p className="card-name">{pokemons[0].name}</p>
        </>
      ) : (
        <p>Loading...</p> // Show loading text while data is being fetched
      )}
    </div>
  );
}
