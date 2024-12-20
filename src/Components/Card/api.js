export const fetchPokemons = async (limit = 151) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
  
      // Handle HTTP errors
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
    //   console.log(data.results);
      
      return data.results; // Return the list of Pokémon
    } catch (error) {
      // Log and return an error message
      console.error("Failed to fetch Pokémon:", error.message);
      return [];
    }
  };
  

  export const fetchPokemonDetails = async (url) => {
    try {
      const response = await fetch(url);

      // Handle HTTP errors
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      // Log and return an error message
      console.error("Failed to fetch Pokémon details:", error.message);
      return {};
    }
  };