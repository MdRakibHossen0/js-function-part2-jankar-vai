/**
 * chair ---> 3 cft
 * table --> 10 cft
 * bed --> 50 cft 
 * 
 */

function woodQuantity(chairQuantity,tableQuantity,bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBed = 50;

    const chairTotalWood = perChairWood * chairQuantity;
    const tableTotalWood = perTableWood * tableQuantity;
    const perTotalBed    =  perBed * bedQuantity; 
    const totalWood = chairTotalWood + tableTotalWood + perTotalBed; 

    return totalWood
}

const wood = woodQuantity(4,0,1);
console.log('Wood Needed',wood);


