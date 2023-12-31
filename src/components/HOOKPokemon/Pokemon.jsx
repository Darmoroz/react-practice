import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { PokemonForm } from './components/PokemonForm';
import { PokemonInfo } from './components/PokemonInfo';

export const Pokemon = () => {
  const [pokemonName, setPokemonName] = useState('');

  return (
    <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
      <PokemonForm onSubmit={setPokemonName} />
      <PokemonInfo pokemonName={pokemonName} />
      <ToastContainer autoClose={3000} />
    </div>
  );
};
