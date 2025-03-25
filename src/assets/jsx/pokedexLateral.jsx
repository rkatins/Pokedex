import {useState, useEffect} from "react";

import '../css/font.css'
import '../css/pokedexLateral.css'

import {fSaludar} from '../scripts/pokedexLateral'

export function PokedexLateral() {
  const [pokedexLateral, setPokedexLateral] = useState([])

  const ENDPOINT = "https://pokeapi.co/api/v2/pokemon/";

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
                onClick={() => fSaludar(pokedex)}
            >
                <span className="capitalLeter">&nbsp;{pokedex.name}</span>
                <img src={pokedex.sprites.front_default} alt={pokedex.name} />
            </li>
            ))}
        </ul>
    </>
  );
};