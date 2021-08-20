function getUpdatedPrice(getIdName,productPrice)
{
    const extraMemoryCost= document.getElementById(getIdName);
    extraMemoryCost.innerText=productPrice;
    calculateTotalPrice();
}

function getPriceElement(idName)
{
    const priceText=document.getElementById(idName).innerText;
    const price=parseFloat(priceText);
    return price;
}

function calculateTotalPrice(){
    
 const bestPrice= getPriceElement('best-price');
 const  memoryCost= getPriceElement('memory-cost');
 const storageCost= getPriceElement('storage-cost');
 const  delivaryCharge= getPriceElement('delivary-charge');

 const totalPrice= bestPrice+memoryCost+storageCost+delivaryCharge;

 const totalPriceText=document.getElementById('total-price');
 totalPriceText.innerText=totalPrice;
 
 //total 
 const totalText=document.getElementById('total');
 totalText.innerText=totalPrice;

 return totalPrice;
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
//20% discount
const applyButton = document.getElementById('apply-btn').addEventListener('click',function(){
const promoCodeField= document.getElementById('promo-code-field')
const promoCode=promoCodeField.value;
if(promoCode =='stevekaku')
 
 {
   const totalPriceText =  document.getElementById('total-price');
   const totalPrice=parseFloat(totalPriceText.innerText);
   const discountPrice=totalPrice-totalPrice*0.2;

   const totalText =  document.getElementById('total');
   totalText.innerText=discountPrice;
   promoCodeField.value='';
  
 }

 
 })



