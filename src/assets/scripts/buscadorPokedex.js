import { Error404 } from '../../components/adds/error404'
import { Error500 } from '../../components/adds/error500'

const ENDPOINT = "https://pokeapi.co/api/v2/pokemon/";

export async function fBarraBusqueda(evento) {
  evento.preventDefault()

  var nombrePokemon = fObtenerNombre(evento)

  if (!nombrePokemon) {
    console.log('❌ El nombre del Pokémon no puede estar vacío.');

    // Fuerza la salida de la función
    return;
  }

  return jsonPokeAPI = await fConsumirAPIBuscarPokemon(nombrePokemon)
}

function fObtenerNombre(evento) {
  var nombrePokemon = evento.target.value

  return nombrePokemon
}

async function fConsumirAPIBuscarPokemon(nombrePokemon) {
  // Si o si, esta funcion se va a encargar de "traducir" a como requiere
  nombrePokemon.toLowerCase()
  
  var pokeAPI = null

  // No respuestas HTTP 2xx
  if (!pokeAPIResponse.ok) {
    // Obtener el código de error HTTP
    const status = pokeAPIResponse.status;

    if (status >= 400 && status < 500) {
      if (status === 404) {
        userMessage = 'El Pokémon ' + nombrePokemon + ' no fue encontrado. Verifica el nombre';
        return <Error404/>
      }
    } else if (status >= 500 && status < 600) {
      return <Error500/>
    } else {
      console.log('❓ Error HTTP inesperado (' + pokeAPIResponse + '): ' + pokeAPIResponse.statusText + '-' + pokeAPIResponse.apiErrorMessage)
    }
  }

  try {
    pokeAPI = await fetch(ENDPOINT + nombrePokemon)
    return jsonPokeAPI = await pokeAPI.json()
  } catch (e) {
    console.log('⚠️ No se pudo consultar la API -> ' + e);
  }
}