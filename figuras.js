// Código del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

console.groupEnd()
// Código del triángulo

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base*altura)/2;
} 
    
console.groupEnd()
    
// Código del círculo
console.group("Círculos");

// Diametro
function diametroCirculo(radio){
    return radio*2;
}

// Pi
const Pi=Math.PI;
console.log("Pi es: "+ Pi + "cm");

// Circunferencia
function perimetroCirculo (radio) {
    const diametro = diametroCirculo(radio);
    return diametro * Pi;
}

// Area
function areaCirculo(radio){
    return (radio*radio)*Pi;
}

console.groupEnd();