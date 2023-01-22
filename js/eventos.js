let boton1 = document.getElementById('botonMas1');
let detalle1 = document.getElementById('detalle1');

boton1.onclick = function () {
    detalle1.classList.toggle('detallesShow');
    if(detalle1.classList.contains('detallesShow')){
        boton1.innerHTML = 'Leer menos';
    }else{
        boton1.innerHTML = 'Leer mas';
    }
}

let boton2 = document.getElementById('botonMas2');
let detalle2 = document.getElementById('detalle2');

boton2.onclick = function () {
    detalle2.classList.toggle('detallesShow');
    if(detalle2.classList.contains('detallesShow')){
        boton2.innerHTML = 'Leer menos';
    }else{
        boton2.innerHTML = 'Leer mas';
    }
}

let boton3 = document.getElementById('botonMas3');
let detalle3 = document.getElementById('detalle3');

boton3.onclick = function () {
    detalle3.classList.toggle('detallesShow');
    if(detalle3.classList.contains('detallesShow')){
        boton3.innerHTML = 'Leer menos';
    }else{
        boton3.innerHTML = 'Leer mas';
    }
}
