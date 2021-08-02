function calcularMediaAritmética(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}


function calcularMediana(lista) {
    lista.sort((a, b) => a - b);// 12, 23, 3 --> 3, 12, 23
    const mitadLista = parseInt(lista.length /2);
    
    function esPar(numerito) {
        if(numerito % 2 === 0){
            return true;
        }else{
            return false;
        }
    }
    
    let mediana;
    
    if(esPar(lista.length)){
        const elemento1=lista[mitadLista - 1];
        const elemento2=lista[mitadLista];
    
        const Promedio=calcularMediaAritmética([
            elemento1,
            elemento2,
        ]);
    
        mediana = Promedio;
    
    }else{
        mediana = lista[mitadLista];
    }
    return mediana;
}
