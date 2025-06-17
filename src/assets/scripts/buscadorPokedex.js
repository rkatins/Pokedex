// import { Error404 } from '../../components/adds/error404'
// import { Error500 } from '../../components/adds/error500

const jsonPokeAPI = null

const ENDPOINT = "https://pokeapi.co/api/v2/pokemon/";

export async function fBarraBusqueda(evento, nombreIntroducido) {
  var nombrePokemon = nombreIntroducido.toLowerCase()

  if (!nombrePokemon) {
    console.log('❌ El nombre del Pokémon no puede estar vacío.');

    // Fuerza la salida de la función
    return;
  }

  return await fConsumirAPIBuscarPokemon(nombrePokemon)
}

async function fConsumirAPIBuscarPokemon(nombrePokemon) {
  // Si o si, esta funcion se va a encargar de "traducir" a como requiere
  nombrePokemon.toLowerCase()
  
  var pokeAPI = null

  try {
    pokeAPI = await fetch(ENDPOINT + nombrePokemon)
    return await pokeAPI.json()
  } catch (e) {
    console.log('⚠️ No se pudo consultar la API -> ' + e);
  }
}