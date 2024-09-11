// DOM: Obtener elementos
let tablero = document.getElementById("tablero");
let boton_Inicio = document.getElementById("boton_Inicio");
let boton_Pausa = document.getElementById("boton_Pausa");
let boton_Reiniciar = document.getElementById("boton_Reiniciar");
let boton_Vuelta = document.getElementById("boton_Vuelta");

// Estados Cronometro
let esta_activo = false;
let time = {
decimas : 0,
segundos : 0,
minutos : 0
}

// Funcion Actualizar
function formato(numero){
    if(numero<10){
    return "0"+numero;
    }
    else{
    return numero;
    }
    }

function actualizar(){
        time.decimas++;
        if(time.decimas == 10){
        time.decimas = 0;
        time.segundos++;
        }
        if(time.segundos == 60){
        time.segundos = 0;
        time.minutos++;
        }
        tablero.innerHTML = `${formato(time.minutos)}:${formato(time.segundos)}:${time.decimas}
        `
        if(esta_activo == true){
        setTimeout(actualizar,100);
        }
        }   

// Funciones Botones
function Inicio(){
    if(esta_activo == false){
    esta_activo = true;
    actualizar();
    }
    }
function Pausa(){
    esta_activo = false;
    }
function Reiniciar(){
    time.decimas = 0;
    time.segundos = 0;
    time.minutos = 0;
    tablero.innerHTML = `${formato(time.minutos)}:${formato(time.segundos)}:${time.decimas}
    `
    }
function Vuelta(){


// Escuchar Eventos
boton_Inicio.addEventListener('click', Inicio);
boton_Pausa.addEventListener('click', Pausa);
boton_Reiniciar.addEventListener('click', Reiniciar);
boton_Vuelta.addEventListener('click', Vuelta);
