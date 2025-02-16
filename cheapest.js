const phones = [
  { name: "samsung", price: 20000, camera: "12mp", color: "black" },
  { name: "xoami", price: 2000, camera: "12mp", color: "red and black" },
  { name: "oppo", price: 12000, camera: "12mp", color: "black" },
  { name: "walton", price: 9000, camera: "12mp", color: "black" },
  { name: "Iphone", price: 120000, camera: "12mp", color: "black" },
];

function getCheapestPhone(phones) {
  let min = phones[0];
  for(const phone of phones){
   if(phone.price < min.price){
    min = phone;
   }

  }
  return min;
}
const cheap = getCheapestPhone(phones);
console.log("cheapest phone is: ", cheap);


//H.w task jhankar vai

const mobiles = [
  { name: "samsung", price: 20000, camera: "12mp", color: "black" },
  { name: "xoami", price: 2000, camera: "12mp", color: "black" },
  { name: "oppo", price: 12000, camera: "12mp", color: "black" },
  { name: "walton", price: 9000, camera: "12mp", color: "black" },
  { name: "Iphone", price: 120000, camera: "12mp", color: "titanium black"},
];

function getMobile(){
    let max = mobiles[0]; 

    for(const mobile of mobiles){

        if(mobile.price > max.price ){
            max = mobile;
        }

    }
    return max;

}
const highPrice= getMobile();
console.log('Height price mobile:',highPrice)

