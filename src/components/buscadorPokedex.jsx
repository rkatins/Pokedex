// import { useState } from "react";
// import {PokedexLateral} from './components/pokedexLateral'
import { fBarraBusqueda } from "../assets/scripts/buscadorPokedex";

import '../assets/css/animacion.css'
import '../assets/css/containers.css'
import '../assets/css/textTransform.css'

export function BuscadorPokedex() {  
  return (
    <>
      {/* <PokedexLateral/> */}

      <header>
        <h1>Pokedex</h1>
        <form>
        {/* <form onSubmit={enviarFormulario}> */}
          <input type="text" name="barraBusquedaPokedex" />
          {/* <input value={busqueda} onChange={ handleChange(this) } type="text" name="barraBusquedaPokedex" /> */}
          <button type="submit">Buscar</button>
        </form>
      </header>

        <h2>Datos Pokémon</h2>
        <h3>No se encontró ningún Pokémon</h3>
        {/* {error && <h3>No se encontró ningún Pokémon</h3>} */}
        {false && (
        // {pokemon && (
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
    </>
  );
};