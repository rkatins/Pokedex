import { useState } from "react";
// import {PokedexLateral} from './components/pokedexLateral'
import { fBarraBusqueda } from "../assets/scripts/buscadorPokedex";

import '../assets/css/animacion.css'
import '../assets/css/containers.css'
import '../assets/css/textTransform.css'

export function BuscadorPokedex() {  
  const [barraBusqueda, setBarraBusqueda] = useState('')
  const [pokemon, setPokemon] = useState(null)
  const [mostrarDatos, setMostrarDatos] = useState(false)

  const actualizarValorBusqueda = (evento) => {
    setBarraBusqueda(evento.target.value);
  };

  const buscarPokemon = async (evento) => {
    evento.preventDefault()

    // Al hacer un `.preventDefault()`, las funciones a las que llama no necesitan de usarlo
    setPokemon(fBarraBusqueda(barraBusqueda))

    if (pokemon) {
      setMostrarDatos(true)
    } else {
      setMostrarDatos(false)
    }
  }

  return (
    <>
      {/* <PokedexLateral/> */}

      <header>
        <h1>Pokedex</h1>
        <form onSubmit={ buscarPokemon }>
          <input value={ barraBusqueda } onChange={ actualizarValorBusqueda } type="text" name="barraBusquedaPokedex" />
          <button type="submit">Buscar</button>
        </form>
      </header>

      {/* { barraBusqueda === '' ? setMostrarDatos(false) : null } */}
      { mostrarDatos ? (<p>Buscanso ...</p>) : null}

      {/* { pokemon ? 
            (
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
            </div>) : (<div>
                <h3>No se encontró ningún Pokémon</h3>

                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/772.png" alt="" />
              </div>
            )
          } */}
    </>
  )
}