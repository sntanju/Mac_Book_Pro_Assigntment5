let secondMemoryTaken = false;
let secondStorageTaken = false,thirdStorageTaken = false;
let chargedDelivery = false;

//Functional Input

function selector(inputValue){
   return document.getElementById(inputValue);
}
 
//Making total value dyanamic

function changeTotal(value){
    const totalPrice = document.getElementById('total-cost');
    let totalPriceValue = parseInt(totalPrice.innerText);
    totalPrice.innerText = totalPriceValue + value;
    return totalPrice.innerText;
}

//BottomTotal Updating

function bottomTotal(value){
    const bottomTotalValue = selector('total-for-pay');
    bottomTotalValue.innerText = value;
}
//Applying Promo Code
function applyPromoToTotal(){
    const bottomTotalValue = selector('total-for-pay');
    bottomTotalValue.innerText -= (bottomTotalValue.innerText * 0.2);
}

//First Memory Cost

    document.getElementById('first-memory-button').addEventListener('click', function(){
    const memoryInput = selector('memory-cost');
    memoryInput.innerText = 0;
    if(secondMemoryTaken == true){
        secondMemoryTaken = false;
        const updatedTotal = changeTotal(-180);
        bottomTotal(updatedTotal);
    }
})

//Second Memory Cost

document.getElementById('second-memory-button').addEventListener('click', function(){
    const memoryInput = selector('memory-cost');
     memoryInput.innerText = 180;
     let memoryInputValue =  parseInt(memoryInput.innerText);
     if(secondMemoryTaken == false){
        secondMemoryTaken = true;
        const updatedTotal = changeTotal(memoryInputValue);
        bottomTotal(updatedTotal);
     }
})

//First Storage Cost

document.getElementById('first-storage-button').addEventListener('click', function(){
    const storageInput = selector('storage-cost');
    storageInput.innerText = 0;
    if(secondStorageTaken == true || thirdStorageTaken == true){
        if(secondStorageTaken == true){
            const updatedTotal = changeTotal(-100);
            bottomTotal(updatedTotal);
            secondStorageTaken = false;
            thirdStorageTaken = false
        }
        else{
            const updatedTotal = changeTotal(-180);
            bottomTotal(updatedTotal);
            thirdStorageTaken = false;
        }
    }
})

//Second Storage Cost

document.getElementById('second-storage-button').addEventListener('click', function(){
    const storageInput = selector('storage-cost');
    storageInput.innerText = 100;
    let storageInputValue =  parseInt(storageInput.innerText);
    if(secondStorageTaken == false && thirdStorageTaken == false){
        const updatedTotal = changeTotal(storageInputValue);
        bottomTotal(updatedTotal);
        secondStorageTaken = true;
    }
    else if(secondStorageTaken == false && thirdStorageTaken == true){
        const updatedTotal=changeTotal(-180);
        changeTotal(storageInputValue);
        bottomTotal(updatedTotal);
        secondStorageTaken = true;
        thirdStorageTaken = false;
    } 
})
//Third Storage Cost

document.getElementById('third-storage-button').addEventListener('click', function(){
    const storageInput = selector('storage-cost');
    storageInput.innerText = 180;
    let storageInputValue =  parseInt(storageInput.innerText);
    if(thirdStorageTaken == false && secondStorageTaken == false){
        const updatedTotal = changeTotal(storageInputValue);
        bottomTotal(updatedTotal);
        thirdStorageTaken = true;
    }
    else if(thirdStorageTaken == false && secondStorageTaken == true){
        const updatedTotal = changeTotal(-100);
        changeTotal(storageInputValue);
        bottomTotal(updatedTotal);
        thirdStorageTaken = true;
        secondStorageTaken = false;
    }
})

//First Delivery Cost 

document.getElementById('first-delivery-button').addEventListener('click', function(){
    const deliveryInput = selector('delivery-cost');
    deliveryInput.innerText = 0;
    if(chargedDelivery == true){
        const updatedTotal = changeTotal(-20);
        bottomTotal(updatedTotal);
        chargedDelivery = false;
    }
})

//Second Delivery Cost 

document.getElementById('second-delivery-button').addEventListener('click', function(){
    const deliveryInput = selector('delivery-cost');
    deliveryInput.innerText = 20;
    if(chargedDelivery == false){
        const updatedTotal = changeTotal(20)
        bottomTotal(updatedTotal);
        chargedDelivery = true;
    }
})

//Use Promo Code

document.getElementById('promo-button').addEventListener('click', function(){
    const promoInput = document.getElementById('promo-code');
    let promoInputedText = promoInput.value;
    if(promoInputedText == 'stevekaku'){
        console.log('clicked');
        applyPromoToTotal();
    }
    promoInput.value = '';
})
