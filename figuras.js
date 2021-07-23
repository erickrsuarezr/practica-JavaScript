// Código del cuadrado
console.group("Cuadrados");

const perimetroCuadrado = (lado) => lado * 4;

const areaCuadrado = (lado) => lado * lado;

console.groupEnd()

// Código del triángulo
console.group("Triángulos");

const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;

const areaTriangulo = (base, altura) => (base * altura) / 2;
    
console.groupEnd()

//Altura triángulo isósceles

const alturaTrianguloIsosceles = function (a, b, c) {
    let A;
    if(a > b && b === c && a >= 2*b || b > a && a === c && b >= 2*a || c > a && a === b && c >= 2*a) {
        alert('Valores no congruentes');
    } else if(a > b && a === c || a < b && a === c) {
        A = Math.sqrt(Math.pow(a,2) - Math.pow(b/2, 2));
        return A;
    } else if(a > c && a === b || a < c && a === b) {
        A = Math.sqrt(Math.pow(a,2) - Math.pow(c/2, 2));
        return A;
    } else if(b > a && b === c || b < a && b === c) {
        A = Math.sqrt(Math.pow(b,2) - Math.pow(a/2, 2));
        return A;
    } else {
        alert('El triangulo no es Isósceles');
    }
}  

function alturaTrianguloIsoscelesPlatzi(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}
    
// Código del círculo
console.group("Círculos");

// Diametro
const diametroCirculo = (radio) => radio * 2;

// Circunferencia
const perimetroCirculo = (radio) => diametroCirculo(radio) * Math.PI;

// Area
const areaCirculo = (radio) => (radio * radio) * Math.PI;

console.groupEnd();

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert (perimetro);
};

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert (area);
};


function calcularPerimetroTriangulo(){
    const l1 = document.getElementById("InputTriangulo1");
    const lado1 = parseFloat(l1.value);
    const l2 = document.getElementById("InputTriangulo2");
    const lado2 = parseFloat(l2.value);
    const lb = document.getElementById("InputTriangulob");
    const ladob = parseFloat(lb.value);
    const perimetro = perimetroTriangulo(lado1, lado2, ladob);
    alert (perimetro);
};

function calcularAreaTriangulo() {
    const lb = document.getElementById("InputTriangulob");
    const ladob = parseFloat(lb.value);
    const lh = document.getElementById("InputTrianguloh");
    const ladoh = parseFloat(lh.value);
    const area = areaTriangulo(ladob, ladoh);
    alert (area);
};


function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert (perimetro);
};

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    alert (area);
};