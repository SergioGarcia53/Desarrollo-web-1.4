let N;
try {
    const args = process.argv;
    if (args.length >= 3) {
        const dato = args[2];
        N = parseInt(dato);
        
        if (isNaN(N) || N <= 0) {
            throw new Error("El valor ingresado no es válido.");
        }
    } else {
        throw new Error("No se ha ingresado ningún dato.");
    }
} catch (error) {
    console.error(error.message);
}

const nombres=["Sistemas de control","Electronica aplicada","Circuitos digitales","Circuitos electricos","Ingeniera economica","Electronica avanzada","Microcontroladores","Diseño digital","Calculo diferencial"];
const claves=[11598,73699,33302,80012,46570,24856,97888,67752,58466];
let registros=[];
for(let i=0;i<N;i++){
    let asignatura= new Object();
    let x=Math.floor(Math.random()*9);
    asignatura.clave=claves[x];
    asignatura.creditos=Math.floor(Math.random()*5)+4;
    asignatura.nombre=nombres[x];
    asignatura.calificacion=Math.random()*101;
    asignatura.fecha=generarFechaAleatoria();
    registros.push(asignatura);
}

function generarFechaAleatoria() {
    let fechaInicio = new Date('2021-01-01').getTime();
    let fechaFin = new Date('2023-06-30').getTime();
    let rango = fechaFin - fechaInicio;
    let tiempoAleatorio = Math.random() * rango;
    let fechaAleatoria = new Date(fechaInicio + tiempoAleatorio);
    return fechaAleatoria;
}
//Filtra asiganturas con fecha del 2022 y calificacion mayor a 50
const registrosFiltrados = registros.filter(registro =>
    registro.calificacion > 50 &&
    new Date(registro.fecha).getFullYear() === 2022
).map(registro => {
    const { clave, creditos, nombre, calificacion } = registro;
    const fechaStr = formatoFecha(registro.fecha);
    return { clave, creditos, nombre, calificacion, fechaStr };
});

function formatoFecha(fecha) {
    const fechaObj = new Date(fecha);
    const dia = fechaObj.getDate();
    const mes = fechaObj.getMonth() + 1;
    const año = fechaObj.getFullYear();
    return `${dia}/${mes}/${año}`;
}

registrosFiltrados.forEach(registro => {
    console.log(registro);
});










