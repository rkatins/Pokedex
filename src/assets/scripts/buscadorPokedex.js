// import { Error404 } from '../../components/adds/error404'
// import { Error500 } from '../../components/adds/error500

const jsonPokeAPI = null

const ENDPOINT = "https://pokeapi.co/api/v2/pokemon/";

export async function fBarraBusqueda(nombreIntroducido) {
  if (nombreIntroducido === '') {
    alert('❌ El nombre del Pokémon no puede estar vacío.');

    // Fuerza la salida de la función
    return;
  } else {
    // alert(nombreIntroducido)
    return await fConsumirAPIBuscarPokemon(nombreIntroducido)
  }
}

async function fConsumirAPIBuscarPokemon(nombreIntroducido) {
  // Si o si, esta funcion se va a encargar de "traducir" a como requiere
  var nombrePokemon = nombreIntroducido.toLowerCase()
  
  var pokeAPI = null

  try {
    pokeAPI = await fetch(ENDPOINT + nombrePokemon)
    return await pokeAPI.json()
  } catch (e) {
    console.log('⚠️ No se pudo consultar la API -> ' + e);
  }
}