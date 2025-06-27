export function hexagonoScript() {
    const hexagonos = document.getElementsByClassName('hexagono')

    for (let i = 0; i < hexagonos.length; i++) {
        hexagonos[i].addEventListener('mouseover', fCambiaColorHexagono)
        hexagonos[i].addEventListener('mouseout', fVuelveColorHexagono)
    }

    function fCambiaColorHexagono() {
      	switch (this.id) {
            case 'hexagono1':
                this.style.backgroundColor = '#B84A49'
                break;
            case 'hexagono2':
                this.style.backgroundColor = '#B82E3B'
                break;
            case 'hexagono3':
                this.style.backgroundColor = '#007794'
                break;
            case 'hexagono4':
                this.style.backgroundColor = '#B36300'
                break;
            case 'hexagono5':
                this.style.backgroundColor = '#AD91CD'
                break;
            case 'hexagono6':
                this.style.backgroundColor = '#3BA76B'
                break;
        }
    }

    function fVuelveColorHexagono() {
        this.style.backgroundColor = '#5d5d5d'
    }
}