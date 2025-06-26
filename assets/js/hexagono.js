const hexagonos = document.getElementsByClassName('hexagono')

for (let i = 0; i < hexagonos.length; i++) {
    hexagonos[i].addEventListener('mouseover', fCambiaColorHexagono)
}

for (let i = 0; i < hexagonos.length; i++) {
    hexagonos[i].addEventListener('mouseout', fVuelveColorHexagono)
}

function fCambiaColorHexagono() {
    console.log(this.id);
    
    switch (this.id) {
        case 'hexagono1':
            hexagonos[0].style.backgroundColor = '#B84A49'
            break;
        case 'hexagono2':
            hexagonos[2].style.backgroundColor = '#B82E3B'
            break;
        case 'hexagono3':
            hexagonos[1].style.backgroundColor = '#007794'
            break;
        case 'hexagono4':
            hexagonos[4].style.backgroundColor = '#B36300'
            break;
        case 'hexagono5':
            hexagonos[5].style.backgroundColor = '#AD91CD'
            break;
        case 'hexagono6':
            hexagonos[3].style.backgroundColor = '#3BA76B'
            break;
    }
}

function fVuelveColorHexagono() {
    this.style.backgroundColor = '#5d5d5d'
}