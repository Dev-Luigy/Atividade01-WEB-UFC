import React, { useEffect, useState } from "react";

interface Questao02BProps {
  pokemonId: number;
  isPokemonLookingFront: boolean;
}

export const Questao02B: React.FC<Questao02BProps> = ({ pokemonId, isPokemonLookingFront }) => {
  // State to control
  const [lookingFront, setLookingFront] = useState<boolean>(isPokemonLookingFront);
  const [image, setImage] = useState<string>('');

  useEffect(() => {
    // Fetch image URL
    // Fetching Pokemon data from the PokeAPI to load the Pokemon and reload component.
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then(response => response.json())
      .then(data => {
        const frontImage = data.sprites.front_default;
        const backImage = data.sprites.back_default;
        setImage(lookingFront ? frontImage : backImage);
      })
      .catch(error => {
        console.error("Error fetching Pokemon data:", error);
      });
  }, [pokemonId, lookingFront]);

  // Return the component
  return (
    <div
      style={{
        width: '500px',
        padding: '10px',
        border: '1px solid #000',
        borderRadius: '5px',
        height: '200px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <h2>Questão 02:</h2>
      <img src={image} alt="Pokemon" />
      {/* // Button to change the Pokemon image from front to back and vice versa. */}
      <button onClick={() => setLookingFront(!lookingFront)}>
        Mostrar Pokémon {lookingFront ? 'Verso' : 'Frente'}
      </button>
    </div>
  );
}
