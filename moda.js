// const lista1 = [
//     1,2,2,3,4,4,5,6,6,7,7,8,8,8,8,8,9,9,9,9,9,9,9,9,10,10,10,1,1,1,1,2,2,2,3,3,3,4,4,4,4,5,5,5,5,5
// ];

// const lista1Count = {};

// lista1.map(
//     function (elemento) {
//         if(lista1Count[elemento]){
//             lista1Count[elemento]  += 1; //El += es "lista1Count[elemento] + 1";
//         }else{
//             lista1Count[elemento]= 1;
//         }
//     }
// );

// const lista1Array = Object.entries(lista1Count).sort( //"entries" convierte a Array de arrays
//     function (valorAcumulado, nuevoValor) {
//         return valorAcumulado[1] - nuevoValor[1]; 
//     }
// ); 

// const moda = lista1Array[lista1Array.length -1];

function calcularModa(lista) {
    const listaCount = {};
    lista.map(
        function (elemento) {
            if(listaCount[elemento]){
                listaCount[elemento]  += 1; //El += es "listaCount[elemento] + 1";
            }else{
                listaCount[elemento]= 1;
            }
        }
    );

    const listaArray = Object.entries(listaCount).sort( //"entries" convierte a Array de arrays
    function (valorAcumulado, nuevoValor) {
        return valorAcumulado[1] - nuevoValor[1]; 
    }
    ); 

    const moda = listaArray[listaArray.length -1];
    
    return moda;
}