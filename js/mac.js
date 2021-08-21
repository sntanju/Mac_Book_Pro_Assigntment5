
// first memory 
document.getElementById('first-memory-button').addEventListener('click', function(){
   const memoryInput = document.getElementById('memory-cost');
   memoryInput.innerText = 0;
   
})

// second memory
document.getElementById('second-memory-button').addEventListener('click', function(){
    const memoryInput = document.getElementById('memory-cost');
     memoryInput.innerText = 180;
   
    console.log(memoryInput);
})

// storage area 

document.getElementById('first-storage-button').addEventListener('click', function(){
    const storageInput = document.getElementById('storage-cost');
    storageInput.innerText = 0;
})
document.getElementById('second-storage-button').addEventListener('click', function(){
    const storageInput = document.getElementById('storage-cost');
    storageInput.innerText = 100;
})
document.getElementById('third-storage-button').addEventListener('click', function(){
    const storageInput = document.getElementById('storage-cost');
    storageInput.innerText = 180;
})

// delivery area 
document.getElementById('first-delivery-button').addEventListener('click', function(){
    const storageInput = document.getElementById('delivery-cost');
    storageInput.innerText = 0;
})
document.getElementById('second-delivery-button').addEventListener('click', function(){
    const storageInput = document.getElementById('delivery-cost');
    storageInput.innerText = 180;
})