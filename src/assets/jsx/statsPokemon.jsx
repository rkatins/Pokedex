import { useState } from "react";
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import {Radar} from 'react-chartjs-2';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

const ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/ditto'

const [data, setData] = useState({
    labels: ["Vida", "Ataque", "Defensa", "Ataque especial", "Defensa especial", "Velocidad"],
    datasets: [{
        label: "Estadísticas",
        data: [],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
    }]
});

const fetchPokemon = async() => {
    try {
        const respuesta = await fetch(ENDPOINT)
        const pokemonInfo = await respuesta.json()
        // Extraer estadísticas del Pokémon
        const stats = pokemonInfo.stats.map((stat) => stat.base_stat)
        // Actualizar el estado
        setData((prevData) => ({
            // En todo objeto, de este se debe hacer una copia
            ...prevData,
            datasets: [{
                // Este al ser un ojeto (aunque está dentro de un objeto) se debe hacer una copia de este
                // Y ya dentro del objeto `dataset` modificar el valor de `data`
                ...prevData.datasets[0],
                data: stats,
            }]
        }))
    } catch (error) {
        console.error("Error al obtener los datos:", error);
    }
}

export function statsPokemon() {

    return (
        <>

        </>
    )
}
