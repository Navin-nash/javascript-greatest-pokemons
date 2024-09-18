// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons
function getAllFirePokemons(pokemons) {
    return pokemons.filter(pokemon => pokemon.type.includes("Fire"));
  }

// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon
function shortestPokemon(pokemons) {
    if (pokemons.length === 0) {
        return 0; // Return 0 if the array is empty
      }
    
      // Find the shortest Pokémon
      const shortest = pokemons.reduce((shortest, pokemon) => {
        const heightMatch = pokemon.height.match(/([\d.]+) m/);
        const height = heightMatch ? parseFloat(heightMatch[1]) : Infinity;
        
        if (height < (shortest.height || Infinity)) {
          return { name: pokemon.name, height: height };
        }
        return shortest;
      }, { height: Infinity });
    
      return shortest.name || 0;; // Return the name of the shortest Pokémon
  }

// Iteration 3: candy_count average - average of `candy_count` for all the pokemons
function candyAverage(pokemons) {
    // Filter out Pokémon that have a candy_count property
    const validPokemons = pokemons.filter(pokemon => pokemon.candy_count !== undefined);
  
    // If no Pokémon with candy_count, return 0
    if (validPokemons.length === 0) {
      return 0;
    }
  
    // Calculate the sum of candy_count values
    const totalCandy = validPokemons.reduce((sum, pokemon) => sum + pokemon.candy_count, 0);
  
    // Calculate the average
    const average = totalCandy / validPokemons.length;
  
    // Return the average rounded to 2 decimal places
    return Math.round(average * 100) / 100;
  }
  

// Iteration 4: images for the first 10 `Ground`  Pokemons
function getGroundPokeImg(pokemons) {
    const groundPokemons = pokemons.filter(pokemon => pokemon.type.includes('Ground'));
  
    if (groundPokemons.length === 0) {
      return 0; // Return 0 if no Ground Pokémon
    }
  
    return groundPokemons.slice(0, 10).map(pokemon => pokemon.img); // Extract the image URL
}

// Iteration 5: Find all pokemon names heavier than Pikachu
function getHeavyPokemons(pokemons) {
    // Step 1: Find Pikachu's weight
    const pikachuWeight = pokemons.find(pokemon => pokemon.name === 'Pikachu')?.weight;

    if (!pikachuWeight || pokemons.length === 0) {
      return 0; // Return 0 if Pikachu is not found or array is empty
    }
  
    const pikachuWeightNumber = parseFloat(pikachuWeight.split(' ')[0].replace(',', '.'));
  
    return pokemons
      .filter(pokemon => {
        const weightNumber = parseFloat(pokemon.weight.split(' ')[0].replace(',', '.'));
        return weightNumber > pikachuWeightNumber;
      })
      .map(pokemon => pokemon.name); // Return names of the heavier Pokémon
  }

// Iteration 6: Alphabetic Order - Order by name and print the first 20 names
function orderAlphabetically(pokemons) {
    return pokemons
      .slice() // Create a shallow copy to avoid mutating the original array
      .sort((a, b) => a.name.localeCompare(b.name)) // Sort alphabetically by name
      .slice(0, 20) // Get the first 20 Pokémon
      .map(pokemon => pokemon.name); // Extract the names
  }

// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them 
function strongPokemons(pokemons) {
    return pokemons
      .filter(pokemon => pokemon.weaknesses && pokemon.weaknesses.length === 1) // Filter Pokémon with exactly one weakness
      .slice(0, 15) // Get the first 15 Pokémon
      .map(pokemon => pokemon.name); // Extract the names
  }
