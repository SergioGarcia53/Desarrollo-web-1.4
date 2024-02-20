const llamarada = function() {
    return "Atacando con llamarada";
}

const garraDragon = function() {
    return "Atacando con garra dragon";
}

const lanzallamas = function() {
    return "Atacando con lanzallamas";
}

const cuchillada = function() {
    return "Atacando con cuchillada";
}


const atacar = function(ataque) {
    return function(personaje) {
        return `${ataque()} a ${personaje}`;
    }
}

console.log(atacar(llamarada)("Charizard"));
console.log(atacar(garraDragon)("Blastoise"));
console.log(atacar(lanzallamas)("Venusaur"));
console.log(atacar(cuchillada)("Ampharos"));