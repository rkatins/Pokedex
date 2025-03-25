import {useState, useEffect} from "react";
import {PokedexLateral} from './assets/jsx/pokedexLateral'

import "./App.css";
import './assets/css/animacion.css'
import './assets/css/containers.css'
import './assets/css/textTransform.css'
import './assets/css/font.css'

export function App() {  
  const [pokemon, setPokemon] = useState(null);
  const [busqueda, setBusqueda] = useState("");
  const [error, setError] = useState(false); 

  const ENDPOINT = "https://pokeapi.co/api/v2/pokemon/";

  const enviarFormulario = (evento) => {
    evento.preventDefault();
    setError(false);
    buscarPokemon(busqueda.toLowerCase());
  };

  const handleChange = (evento) => {
    setBusqueda(evento.target.value);
  };

  const buscarPokemon = async (nombrePokemon) => {
    try {
      const respuesta = await fetch(ENDPOINT + nombrePokemon);

      if (!respuesta.ok) throw new Error("No encontrado");

      const json = await respuesta.json();

      setPokemon(json);
      setError(false);
    } catch (error) {
      setPokemon(null);
      setError(true);
    }
  };

  return (
    <>
      <PokedexLateral/>

      <header>
        <h1>Pokedex</h1>
        <form onSubmit={enviarFormulario}>
          <input value={busqueda} onChange={handleChange} type="text" name="pokemon" />
          <button type="submit">Buscar</button>
        </form>
      </header>

      <main>
        <h2>Datos Pokémon</h2>
        {error && <h3>No se encontró ningún Pokémon</h3>}
        {pokemon && (
          <div>
            <h3>Número en la Pokédex: {pokemon.id}</h3>
            <h3>Nombre: <span className="capitalLeter">{pokemon.name}</span></h3>
            <h4>Tipo: {pokemon.types[0].type.name} {pokemon.types[1] && (
              `, ${pokemon.types[1].type.name}`
            )}</h4>

            <h3>Altura: {pokemon.height/10}m</h3>
            <h3>Peso: {pokemon.weight/10}kg</h3>

            <div className="contenedorSprite">
              <div className="agrandarSprite">
                <img className="animarSprite" style={{width: '200px'}} src={pokemon.sprites.other.home.front_default} alt={pokemon.name} />
              </div>
              <div className="agrandarSprite">
                <img className="animarSprite" style={{width: '200px'}} src={pokemon.sprites.other.home.front_shiny} alt={pokemon.name} />
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
};