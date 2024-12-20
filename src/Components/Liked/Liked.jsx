/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "../Card/_card.scss";
import Card from "../Card/Card";

export default function Liked({ search, sortType = "id" }) {
  const [likedPokemons, setLikedPokemons] = useState([]);

  useEffect(() => {
    // Get the favorite Pokémon names from localStorage
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setLikedPokemons(favorites);
    // Listen for storage events and update the likedPokemons state
    window.addEventListener("storage", () => {
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      setLikedPokemons(favorites);
    });
    return () => {
      window.removeEventListener("storage", () => {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setLikedPokemons(favorites);
      });
    };
  }, []);

  const filteredPokemons = likedPokemons.filter((pokemon) =>
    pokemon.toLowerCase().startsWith(search.toLowerCase())
  );

  return (
    <div className="liked-container">
      {filteredPokemons.length > 0 ? (
        <Card filter={filteredPokemons} sortType={sortType} />
      ) : (
        <h1>No favorites yet!</h1>
      )}
    </div>
  );
}