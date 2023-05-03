document.getElementById("sixteenGB").addEventListener("click", function(){
    // const memoryCost = document.getElementById("memory-cost");
    // memoryCost.innerText = 200;

    // const bestPrice = document.getElementById("best-price");
    // const memoryPrice = document.getElementById("memory-cost");
    // const storagePrice = document.getElementById("storage-cost");
    // const deliveryPrice = document.getElementById("delivery-cost");

    // const totalPrice = parseInt(bestPrice.innerText) + parseInt(memoryCost.innerText) +parseInt(storagePrice.innerText) + parseInt(deliveryPrice.innerText);

    // const total = document.getElementById("total-price");
    // total.innerText = totalPrice;

    updatePrice('memory-cost', 200);
})

onClick('eightGB', 'memory-cost', 0);
onClick('sixteenGB', 'memory-cost', 200);
onClick('ssd1', 'storage-cost', 0);
onClick('ssd2', 'storage-cost', 100);
onClick('ssd3', 'storage-cost', 300);
onClick('free-delivery', 'delivery-cost', 0);
onClick('paid-delivery', 'delivery-cost', 20);

// document.getElementById("eightGB").addEventListener("click", function(){
//     updatePrice('memory-cost', 0);
// })
// document.getElementById("ssd1").addEventListener("click", function(){
//     updatePrice('storage-cost', 0);
// })
// document.getElementById("ssd2").addEventListener("click", function(){
//     updatePrice('storage-cost', 100);
// })
// document.getElementById("ssd3").addEventListener("click", function(){
//     updatePrice('storage-cost', 300);
// })
// document.getElementById("free-delivery").addEventListener("click", function(){
//     updatePrice('delivery-cost', 0);
// })
// document.getElementById("paid-delivery").addEventListener("click", function(){
//     updatePrice('delivery-cost', 20);
// })
// add Eventlistener click using function

function onClick(clickID, updateID, price){
    document.getElementById(clickID).addEventListener('click', function(){
        updatePrice(updateID, price);
        document.getElementById(clickID).style.backgroundColor = "cornflowerblue";
    })
}

function updatePrice (itemID, price){
    const memoryCost = document.getElementById(itemID);
    memoryCost.innerText = price;

    const bestPrice = document.getElementById("best-price");
    const memoryPrice = document.getElementById("memory-cost");
    const storagePrice = document.getElementById("storage-cost");
    const deliveryPrice = document.getElementById("delivery-cost");

    const totalPrice = parseInt(bestPrice.innerText) + parseInt(memoryPrice.innerText) +parseInt(storagePrice.innerText) + parseInt(deliveryPrice.innerText);

    const total = document.getElementById("total-price");
    total.innerText = totalPrice;
}

const fakeCode = "naIem";

document.getElementById("apply-btn").addEventListener("click", function(){
     const code = document.getElementById("promo-input").value;
      
     if(code === fakeCode){
        const total = document.getElementById("total-price");
        let totalPrice = parseFloat(total.innerText);

        const discount = (totalPrice*20)/100;

         totalPrice = (totalPrice - discount).toFixed(2);
         total.innerText = totalPrice;
         


     }
     else{
        alert('Sorry You Cannot advantage of discount');
     }
})