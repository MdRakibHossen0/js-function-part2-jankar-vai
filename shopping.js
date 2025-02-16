/**
 * Shirt price --> 500
 * pant price --> 300
 * shoe price --> 900
 */

function getShopping(quantityShirt,quantityPant,quantityShoe){
    const shirt = 500;
    const pant = 300;
    const shoe = 900;
 
    const totalShirt = shirt * quantityShirt;
    const totalPant = pant * quantityPant;
    const totalShoe = shoe * quantityShoe;

   const totalShoppingCost = totalShirt + totalPant + totalShoe;
   
   return totalShoppingCost;


}

const total = getShopping(5,1,5);
console.log(total);