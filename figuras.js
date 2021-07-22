// Código del cuadrado
console.group("Cuadrados");

const perimetroCuadrado = (lado) => lado * 4;

const areaCuadrado = (lado) => lado * lado;

console.groupEnd()

// Código del triángulo

const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;

const areaTriangulo = (base, altura) => (base * altura) / 2;
    
console.groupEnd()
    
// Código del círculo
console.group("Círculos");

// Diametro
const diametroCirculo = (radio) => radio * 2;

// Circunferencia
const perimetroCirculo = (radio) => diametroCirculo(radio) * Math.PI;

// Area
const areaCirculo = (radio) => (radio * radio) * Math.PI;

console.groupEnd();