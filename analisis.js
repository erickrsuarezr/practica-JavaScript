// Helpers o Utils
function esPar(numero) {
    // if (numero % 2 === 0){
    //     return true;
    // } else {
    //     return false;
    // }
    return (numero % 2 === 0);
};

function calcularMediaAritmética(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

// Calculadora de Medianas
function  medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];
        
        const media = calcularMediaAritmética([personaMitad1, personaMitad2]);
        return media;
        
    }else{
        const personaMitad = lista[mitad];
        return personaMitad
    }
}

// Mediana General
const salariosMex = mexico.map(
    function (persona) {
        return persona.salary;
    }
);

const salariosMexSorted = salariosMex.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);
const medianaGeneralMex = medianaSalarios(salariosMexSorted);

// Mediana del top 10%
const spliceStart = (salariosMexSorted.length * 90) /100;
const spliceCount = salariosMexSorted.length - spliceStart;

const salariosMexTop10 = salariosMexSorted.splice(
    spliceStart,
    spliceCount
); //Recibe como parametros donde comienza a sacar inf y donde termina

const medianaTop10Mex = medianaSalarios(salariosMexTop10);

console.log(
    medianaGeneralMex,
    medianaTop10Mex
);