// shopping cart simple calculation
function updatePrice(isIncreasing) {
    const input = document.getElementById('plus-number');
    let inputValue = input.value;
    if (isIncreasing == true) {
        inputValue = parseInt(inputValue) + 1;
    }
    else if (inputValue > 0) {
        inputValue = parseInt(inputValue) - 1;
    }
    input.value = inputValue;
    const price = document.getElementById('fiftyNine');
    const multiplePrice = parseInt(inputValue) * 59;
    price.innerText = multiplePrice;
}
document.getElementById('plus').addEventListener('click', function () {
    updatePrice(true);
    subtotal()
})
document.getElementById('minus').addEventListener('click', function () {
    updatePrice(false);
    subtotal()
})
//subtotal Amount
function caseSubtotal() {
    const Product = document.getElementById('plus-number');
    let productValue = Product.value;
    let productPrice = parseInt(productValue) * 59;
    return productPrice;
}
function phoneSubtotal() {
    const Product = document.getElementById('pluss-number');
    let ProductValue = Product.value;
    let ProductPrice = parseInt(ProductValue) * 1219;
    return ProductPrice;
}
function subtotal() {
    const subtotal = caseSubtotal() + phoneSubtotal();
    const tax=subtotal/10;
    const total=subtotal+tax;
// tax and total calculation
    document.getElementById('sub-total').innerText = subtotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total').innerText = total;
}
///updateCasaeprice
function updateCasaeprice(plusing) {
    const boxInput = document.getElementById('pluss-number');
    let boxInputValue = boxInput.value;
    if (plusing == true) {
        boxInputValue = parseInt(boxInputValue) + 1;
    }
    else if (boxInputValue > 0) {
        boxInputValue = parseInt(boxInputValue) - 1;
    }
    boxInput.value = boxInputValue;
    const dameOFThePhone = document.getElementById('twelve');
    const doubleWhenClick = parseInt(boxInputValue) * 1219;
    dameOFThePhone.innerText = doubleWhenClick;
}
document.getElementById('pluss').addEventListener('click', function () {
    updateCasaeprice(true);
    subtotal();
})
document.getElementById('minuss').addEventListener('click', function () {
    updateCasaeprice(false);
    subtotal();
})