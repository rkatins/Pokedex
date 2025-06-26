// import { Error404 } from '../../components/adds/error404'
// import { Error500 } from '../../components/adds/error500

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

async function fConsumirAPIBuscarPokemon(nombreIntroducido) {
  const nombrePokemon = nombreIntroducido.toLowerCase();
  
  // var pokeAPIResponse;

  try {
     var pokeAPIResponse = await fetch(ENDPOINT + nombrePokemon);

    // Verificar si la respuesta HTTP es exitosa (código 2xx)
    if (!pokeAPIResponse.ok) {
      const status = pokeAPIResponse.status;
      let errorMessage = '';
      
      // Intentar leer más detalles del error si la respuesta tiene cuerpo JSON
      let errorDetails = {};
      try {
        var errorDetails = await pokeAPIResponse.json(); // Intentar parsear el error JSON
      } catch (jsonError) {
        // Ignorar si no es JSON válido, simplemente no tendremos más detalles
        console.warn('No se pudo parsear el cuerpo del error como JSON:', jsonError);
      }

      // Construir un mensaje de error más útil
      if (status === 404) {
        errorMessage = `El Pokémon "${nombreIntroducido}" no fue encontrado. Verifica el nombre.`;
      } else if (status >= 400 && status < 500) {
        errorMessage = `Error del cliente (código ${status}): ${errorDetails.detail || pokeAPIResponse.statusText || 'Solicitud inválida.'}`;
      } else if (status >= 500 && status < 600) {
        errorMessage = `Error del servidor (código ${status}): Lo sentimos, el servidor de Pokémon tuvo un problema.`;
      } else {
        errorMessage = `Ocurrió un error HTTP inesperado (código ${status}): ${pokeAPIResponse.statusText}`;
      }
      
      // ✅ Lanzar un error para que pueda ser capturado por la función que llama (fBarraBusqueda y luego BuscadorPokedex)
      throw new Error(errorMessage); 
    }

    // ✅ Si la respuesta fue exitosa (pokeAPIResponse.ok es true), parsear y devolver el JSON
    return await pokeAPIResponse.json();

  } catch (e) {
    // ✅ Este catch capturará errores de red (ej. si no hay conexión a internet)
    // o errores que ocurran si pokeAPIResponse.json() falla por un JSON malformado.
    console.error('⚠️ Error en fConsumirAPIBuscarPokemon:', e);
    
    // ✅ RELANZAR el error para que sea capturado por el try/catch en el componente React.
    if (e instanceof TypeError) { // Típicamente un error de red
      throw new Error('No se pudo conectar con la API. Verifica tu conexión a internet.');
    } else {
      // Propagar el error original si no es un TypeError (ej. un error lanzado por '!pokeAPIResponse.ok')
      throw e;
    }
  }
}