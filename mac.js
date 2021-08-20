function getUpdatedPrice(getIdName,price)
{
    const extraMemoryCost= document.getElementById(getIdName);
    extraMemoryCost.innerText=parseInt(price);
}

function calculateTotalPrice(){
    
}
//----------------memory-------------------
// default memory button
document.getElementById('default-memory-selection-btn').addEventListener('click',function(){
    getUpdatedPrice('memory-cost',0);
})

// extra memory button
    document.getElementById('extra-memory-selection-btn').addEventListener('click',function(){
    getUpdatedPrice('memory-cost',180);
})

//------------------storage------------------------
// default storage button
    document.getElementById('default-storage-btn').addEventListener('click',function(){
    getUpdatedPrice('storage-cost',0);
})
//512GB storage button
    document.getElementById('storage-512GB-btn').addEventListener('click',function(){
    getUpdatedPrice('storage-cost',100);
})
//1TB storage button
    document.getElementById('storage-1TB-btn').addEventListener('click',function(){
    getUpdatedPrice('storage-cost',180);
})

//------------------delivary-------------------------
// default delivary date button
document.getElementById('prime-delivary-btn').addEventListener('click',function(){
    getUpdatedPrice('delivary-charge',0);
})

// Pre delivary date button
    document.getElementById('pre-delivary-btn').addEventListener('click',function(){
    getUpdatedPrice('delivary-charge',20);
})

