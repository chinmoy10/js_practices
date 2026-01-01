//5. Print the multiplication table of 5.

// for(i = 1; i<=10; i++){
//     console.log(`5 x ${i} = ${5*i}`);
// }

//6. Find the sum of numbers from 1 to 100.

// let sum = 0;
// for(i= 1; i<=100; i++){
//     sum = sum + i
// }
// console.log("sum = ",sum);

//7. Print all numbers that are divisible by 3 from 1 to 50

// let numbers = [];
// for(i = 1; i<=50; i++){
//     if(i%3===0){
//         numbers.push(i);
//     }
// }
// console.log("number: ", numbers);

// 8. Print the square of numbers from 1 to 10.

// let square_num = [];
// for (i = 1; i<=10; i++){
//     let j = i**2;
//     square_num.push(j);
// }
// console.log("square_num:", square_num);

// 9. Count how many numbers are between 1 and 50.

// let count = 0;

// for(i=1; i<=50; i++){
//     count++;
// }

// console.log("count = ", count);

// let i = 1;
// while(i<=50){
//     count++;
//     i++;
// }
// console.log("count = ", count);

// 10. Print all numbers except 5 from 1 to 10.

// let number = [];
// for(i=1; i<=10; i++){
//     if(i !== 5){
//         number.push(i);
//     }
// }
// console.log(number)

// 11. Find the factorial of a number (e.g., 5).

// let number = 1;
// for (i = 1; i <= 5; i++) {
//     number = number * i;
// }

// console.log(number);

// 12. Reverse a given number (e.g., 123->321).

let number = 123;
// let reverse = 0
while(number>0){
    number.reverse();
}
console.log(number);