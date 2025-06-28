import { Routes, Route } from 'react-router-dom'

import { StartMenu } from './components/startMenu'
import { Pokedex } from './components/pokedex'
import { EquipoPokemon } from './components/equipoPokemon'
import { TarjetaEntrenador } from './components/tarjetaEntrenador'
import { Mochila } from './components/mochila'
import { Ajustes } from './components/ajustes'
import { Guardar } from './components/guardar'

import "./App.css";
import './assets/css/animacion.css'
import './assets/css/containers.css'
import './assets/css/textTransform.css'
import './assets/css/font.css'

export function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<StartMenu />} />
        <Route path='/pokedex' element={<Pokedex />} />
        <Route path='/equipoPokemon' element={<EquipoPokemon />} />
        <Route path='/tarjetaEntrenador' element={<TarjetaEntrenador />} />
        <Route path='/mochila' element={<Mochila />} />
        <Route path='/ajustes' element={<Ajustes />} />
        <Route path='/guardar' element={<Guardar />} />
    </Routes>
    </>
  );
};