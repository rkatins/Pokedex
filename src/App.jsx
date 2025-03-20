import {useState, useEffect} from "react";

import "./App.css";
import './assets/css/animacion.css'
import './assets/css/containers.css'
import './assets/css/textTransform.css'
import './assets/css/font.css'
import './assets/css/pokedexLateral.css'

import {fSaludar} from './assets/scripts/pokedexLateral'

function App() {  
  const [pokemon, setPokemon] = useState(null);
  const [pokedexLateral, setPokedexLateral] = useState([])
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

  const fRellenarPokedexLateral = async() => {
    var idPokedex = 1
    var pokedexTemporal = []

    while (true) {
      try {
        const respuesta = await fetch(ENDPOINT + idPokedex);
        
        // Si no hay más Pokémon, termina la función
        if (!respuesta.ok) {
          return setPokedexLateral(pokedexTemporal)
        }
  
        const respuestJSON = await respuesta.json()
        pokedexTemporal.push(respuestJSON)
        
        idPokedex++;
      } catch (error) {
        console.error("El fetch de la pokedex lateral a fallado:", error);
      }
      /**
       * A mi tambien me desconcirta el ponerlo aqui dentro del
       * bucle while la siguiente linea
       * Pero esto se debe a que nos interesa que haya registros
       * desde un principio, y no esperar a que carguen todos los
       * registros obtenidos para enviar los registros a
       * `pokedexLateral`
       */      
      setPokedexLateral(pokedexTemporal)
    }    
  }

  useEffect(() => {
    fRellenarPokedexLateral();
  }, []);

  return (
    <>
      <ul id="pokedexLateral">
        {pokedexLateral.map((pokedex, index) => (
          <li key = {index} data-list-icon = {pokedex.id}
           onClick={fSaludar}
          >
            <span className="capitalLeter">&nbsp;{pokedex.name}</span>
            <img src={pokedex.sprites.front_default} alt={pokedex.name} />
          </li>
        ))}
      </ul>

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

            <div className="contenedorSprite">
              <div className="agrandarSprite">
                <img className="animarSprite" style={{width: '200px'}} src={pokemon.sprites.front_default} alt={pokemon.name} />
              </div>
              <div className="agrandarSprite">
                <img className="animarSprite" style={{width: '200px'}} src={pokemon.sprites.front_shiny} alt={pokemon.name} />
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default App;