// for loop 

// for(let i=1; i<=5; i++){
//     console.log(i)
// }

// let sum = 0;

// for(let i=1; i<=5; i++){
//     sum = sum + i;
// }

// console.log(sum);
// console.log("loop ended.");

//while loop

// let i=1;
// while(i <= 5){
//     console.log("i=",i);
//     i++;
// }

// console.log("loop end.");

//do-while loop

// let i=1;
// do{
//     console.log("i=",i);
//     i++;
// }while(i <= 5);

//for of loop

// let str = "hello";
// let size = 0;

// for(let val of str){
//     console.log("val =",val);
//     size++;
// }
// console.log("total size of this string is :",size);  

//for in loop 

// let student = {
//     name : "raj Upala",
//     age  : 21,
//     cgpa : 7.7,
//     isPass : true,
// };

// for(let key in student){
//     console.log(key,student[key]);
// }

//Qs1 print all even 0 to 100 no.

// for(i=0; i<=100; i++){
//     if(i%2===1){
//         console.log("num",i);
//     }
// }

//Qs2 make game and check until the user not correct the right no.

let gameNum = 5;

let guessNum = prompt("Guess any game no :");

while(guessNum != gameNum){
    guessNum = prompt("you guess wrong no. Guess again");
}

console.log("Congrates you guess right no.");