//extra Memory Price 
function extraMemmoryPrice(price) {
    const extraMemmory = document.getElementById('ex-memory');
    extraMemmory.innerText = price;
}

//extra Storage Price 
function extraStoragePrice(storagePrice) {
    const extraStorage = document.getElementById('ex-storage');
    extraStorage.innerText = storagePrice;
}

// Delivery 
function delivery(charge) {
    const deliverCharge = document.getElementById('deliver-charge');
    deliverCharge.innerText = charge;
}
// Price Sum 
function totalPrice() {
    const memory = parseInt(document.getElementById('ex-memory').innerText);
    const storage = parseInt(document.getElementById('ex-storage').innerText);
    const delivery = parseInt(document.getElementById('deliver-charge').innerText);
    const totalPrice = document.getElementById('total-after-promo');
    const total = document.getElementById('total-price');
    const price = 1299 + memory + storage + delivery;

    totalPrice.innerText = price;
    total.innerText = price;
    return price;
}

function promo() {
    const inputPromo = document.getElementById('promo-code');
    const currentPromo = document.getElementById('total-after-promo');
    const promocode = inputPromo.value;
    let mainPrice = totalPrice();

    if (promocode == 'stevekaku') {
        const promoPrice = parseInt(mainPrice - ((mainPrice * 20) / 100));
        currentPromo.innerText = promoPrice;
    }
}

//Extra Memory Price 
document.getElementById('memory-type').addEventListener('click', function() {
    extraMemmoryPrice(0);
    totalPrice();

})
document.getElementById('memory-type-16').addEventListener('click', function() {
    extraMemmoryPrice(180);
    totalPrice();
})


// extra Storage Price 
document.getElementById('storage-type').addEventListener('click', function() {
    extraStoragePrice(0)
    totalPrice()
})
document.getElementById('storage-type512').addEventListener('click', function() {
    extraStoragePrice(100);
    totalPrice()
})
document.getElementById('storage-type1TB').addEventListener('click', function() {
    extraStoragePrice(180);
    totalPrice()
})



// Handle Delivery charge 
document.getElementById('free-delivery').addEventListener('click', function() {
    delivery(0);
    totalPrice()
})
document.getElementById('paid-delivery').addEventListener('click', function() {
    delivery(20);
    totalPrice()
})

document.getElementById('promo-apply').addEventListener('click', function() {
    promo();
})