export const fetchPokemons = async (limit = 1025) => {
	try {
		const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = await response.json();

		return data.results;
	} catch (error) {
		console.error('Failed to fetch Pokémon:', error.message);
		return [];
	}
};

export const fetchPokemonDetails = async (url) => {
	try {
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Failed to fetch Pokémon details:', error.message);
		return {};
	}
};
