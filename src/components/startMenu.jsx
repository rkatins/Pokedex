import { useEffect } from 'react';

import '../assets/css/lista.css'
import '../assets/css/hexagono.css'

import { hexagonoScript } from '../assets/scripts/js/hexagono.js'

import Pokedex from '../assets/images/menu/svg/list-select.svg'
import Pokeball from '../assets/images/menu/svg/pokeball.svg'
import TrainerCard from '../assets/images/menu/svg/credit-card.svg'
import Bag from '../assets/images/menu/svg/handbag.svg'
import Settings from '../assets/images/menu/svg/settings.svg'
import Save from '../assets/images/menu/svg/floppy-disk.svg'

export function StartMenu() {
	useEffect(() => {
		const cleanup = hexagonoScript()
		return cleanup
	}, [])

	return (<>
		<ul id="startList">
			<div id="columnaIzquierda">
				<li className="elementoLista">
					<div className="bordeHexagono">
						<div id='hexagono1' className="hexagono">
							<img src={Pokedex} alt="" />
						</div>
					</div>
				</li>
				<li className="elementoLista">
					<div className="bordeHexagono">
						<div id='hexagono3' className="hexagono">
							<img src={Bag} alt="" />
						</div>
					</div>
				</li>
			</div>

			<div id="columnaCentro">
				<li className="elementoLista">
					<div className="bordeHexagono">
						<div id='hexagono2' className="hexagono">
							<img src={Pokeball} alt="" />
						</div>
					</div>
				</li>
				<li>
					<div>
						<div></div>
					</div>
				</li>
				<li className="elementoLista">
					<div className="bordeHexagono">
						<div id='hexagono6' className="hexagono">
							<img src={Settings} alt="" />
						</div>
					</div>
				</li>
			</div>

			<div id="columnaDerecha">
				<li className="elementoLista">
					<div className="bordeHexagono">
						<div id='hexagono4' className="hexagono">
							<img src={TrainerCard} alt="" />
						</div>
					</div>
				</li>
				<li className="elementoLista">
					<div className="bordeHexagono">
						<div id='hexagono5' className="hexagono">
							<img src={Save} alt="" />
						</div>
					</div>
				</li>
			</div>
		</ul>
	</>)
}