function getUpdatedPrice(getIdName,productPrice)
{
    const extraMemoryCost= document.getElementById(getIdName);
    extraMemoryCost.innerText=productPrice;
    const price=parseFloat(productPrice);
    calculateTotalPrice(price);
}

function calculateTotalPrice(price){
    
  
 const bestPriceText=document.getElementById('best-price').innerText;
 const bestPrice=parseFloat(bestPriceText);
 const totalPrice= bestPrice+price;

 const totalPriceText=document.getElementById('total-price');
 totalPriceText.innerText=totalPrice;
 
 //total 
 const totalText=document.getElementById('total');
 totalText.innerText=totalPrice;

 return totalPrice;

 //total price with 20% vat
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

const promoCode= document.getElementById('promo-code-field').value;
if(promoCode =='stevekaku'){
 document.getElementById('apply-btn').addEventListener('click',function()
 {
   const totalText =  document.getElementById('total').innerText;
   const total=parseFloat(totalText);
   console.log(total);
  const discountPrice=total*0.2;
  totalText.innerText=discountPrice;
 })

}

