/**
 * Componentes en los que definir funciones que hacen uso del hook `useNavigate()`,
 * para que sean usados en otros componentes sin tener que definir las rutas de nuevo,
 * por asi decir aqui serian accesibles solo importando estas
 */

import { useNavigate } from 'react-router-dom'

export function useNavigateMenu() {
    const navigate = useNavigate();

    return () => navigate('/')
}

export function useNavigatePokedex() {
    const navigate = useNavigate();

    return () => navigate('/pokedex')
}

export function useNavigateEquipoPokemon() {
    const navigate = useNavigate();

    return () => navigate('/equipoPokemon')
}

export function useNavigateTarjetaEntrenador() {
    const navigate = useNavigate();

    return () => navigate('/tarjetaEntrenador')
}

export function useNavigateMochila() {
    const navigate = useNavigate();

    return () => navigate('/mochila')
}

export function useNavigateAjustes() {
    const navigate = useNavigate();

    return () => navigate('/ajustes')
}

export function useNavigateGuardar() {
    const navigate = useNavigate();

    return () => navigate('/guardar')
}