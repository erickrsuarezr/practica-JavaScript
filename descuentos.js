function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const PrecioConDescuento = (precio * porcentajePrecioConDescuento) /100;
    return PrecioConDescuento;
}  

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const price = inputPrice.value;
    const inputDiscount = document.getElementById("inputDiscount");
    const discount = inputDiscount.value;

    const PrecioConDescuento = calcularPrecioConDescuento(price,discount);

    const resultP = document.getElementById("ResultPrice");
    resultP.innerText= "El precio con descuento es: $" +  PrecioConDescuento;
}