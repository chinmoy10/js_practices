// function createEmail (info){
//     if(typeof info !== "object"){
//         return "This is not a valid object. Please give me a valid object";
//     }
//     // const result = info.name+"@"+info.address+".com";
//     const result = `${info.name}@${info.address}.com`
//     return result;
// }

// const person = {
//     name : "chinmoypodder",
//     address: "narayanganj"
// }

// // const person = "chinmoypodder";

// const givenResult = createEmail(person);
// console.log(givenResult);


// another problem

function calculateSavings(money){
    if(typeof money !== "number"){
        return "Give me a valid integer number";
    }
    const houseRent = 5000;
    const foodCost = 3000;
    const personalCost = 2000;

    const totalExpence = houseRent + foodCost + personalCost;

    if(money<=totalExpence){
        return "Sorry I can not have any savings money";
    }
    const savingMoney = money - totalExpence;
    return savingMoney;
}

const monthlySalary = calculateSavings(10000);
// console.log("Monthly Savings: ",monthlySalary);


// problem 3

function rickshawCost(passenger){
    const busSit = 50;
    const microSit = 15;
    const rickshawPrice = 20;

    const remainingPAfterBus = passenger % busSit;
    const remainingPAfterMicro = remainingPAfterBus % microSit;
    const totalRickshawExpense = remainingPAfterMicro * rickshawPrice;
    return totalRickshawExpense;
}

const totalPassenger = rickshawCost(235);
console.log(totalPassenger);


 