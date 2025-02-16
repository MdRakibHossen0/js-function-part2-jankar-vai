//Altarnative way solved me

function getShoppingCart(
  shampooQuantity,
  chiruniQuantity,
  shirtQuantity,
  pantQuantity
) {
  const pShampoo = 300;
  const pChiruni = 100;
  const pShirt = 700;
  const pPant = 1200;

  const pShampooTotal = pShampoo * shampooQuantity;
  const pChiruniTotal = pChiruni * chiruniQuantity;
  const pShirtTotal = pShirt * shirtQuantity;
  const pPantTotal = pPant * pantQuantity;

  const total = pShampooTotal + pChiruniTotal + pShirtTotal + pPantTotal;
  return total;
}
const total = getShoppingCart(2, 3, 5, 1);
console.log(total);
