// Find the biggest number in the array

// const numbers = [22, 30, 42, 34, 62, 55, 72, 15, 85];

// let biggest = numbers[3];
// console.log("before loop: ",biggest);
// for (i = 0; i < numbers.length; i++) {
//     console.log("current number:", numbers[i], "biggest number: ",biggest);
//     if(numbers[i] > biggest){
//         biggest = numbers[i];
//     }
//     console.log("current biggest: ",biggest);
// }

// console.log("The biggest number =", biggest);

function giveBiggestNumber(array){
    if(!Array.isArray(array)){
        return "This is not an array"; // this is the error checking method
    }
    let biggest = array[0];
    for(i = 1; i <= array.length-1; i++){
        if(array[i] > biggest){
            biggest = array[i];
        }
    }
    return biggest;
}

const numbers = [22, 30, 42, 34, 62, 55, 72, 15, 85];
// const myName = "Chinmoy";
const result = giveBiggestNumber(numbers);
console.log("The biggest number is: ",result);