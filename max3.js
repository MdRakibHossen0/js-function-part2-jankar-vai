const jim = 66;
const tim = 89;
const kim = 68;

if (jim > tim && jim > kim) {
  console.log("jim get max number");
} else if (tim > jim && tim > kim) {
  console.log("tim get max number");
} else {
  console.log("kim get max number");
}

//I can solve this problem using the function.

function maxOfThree(jim, kim, tim) {
  if (jim > kim && jim > tim) {
    return jim;
  } else if (kim > jim && kim > tim) {
    return kim;
  } else {
    return tim;
  }
}

const max = maxOfThree(66, 89, 168);
console.log('Max of three:',max);


//any thousands of number input Math.max() just console.log magic 
const maximum = Math.max(12,34,576,8,56,34,4556);
console.log("max number Math.max", maximum);
