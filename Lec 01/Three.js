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

// let gameNum = 5;

// let guessNum = prompt("Guess any game no :");

// while(guessNum != gameNum){
//     guessNum = prompt("you guess wrong no. Guess again");
// }

// console.log("Congrates you guess right no.");

//Learn Strings

// let str = "Raj Upala";

// -> Template Literals 

// let obj = {
//     itemName    : "Football",
//     price       : 499,
// };

// let output = (`My ${obj.itemName} price is ${obj.price} Rupess.`);
// console.log(output);  This is a way to write a Template literal... 

// console.log("my",obj.itemName, "price is ",obj.price,"Rupess."); Simple and complex things as compared to template literals.
// console.log ("hell\too");

// -> Strings Methods (Method means Do some work)

// let str = "raj upala";
// // str =  str.toUpperCase(); // make new string or also add thoses changes in old string. (In JS strings are immutable means it's not changable.) so if you do some changes so make new strings. old strings values never changed and its changed if we stroed it on same name.
// str =  str.toLowerCase();
// console.log(str);

// let str = "apnacollege through learn js";

// console.log(str);
// console.log(str.trim());

// console.log(str.slice(1,5)); (used to take slice of the character.)


// let str = "apnacollege through ";
// let str2 =  "learn js";


// console.log(str.concat(str2)); (Used for joint the strings.)

// let str = "CodeWithHarry is good channel";

// console.log(str);
// str = (str.replace("CodeWithHarry","apnacollege")); (it's used to replace old value to new value.)
// console.log(str);

// let str = "IloveJs";

// console.log(str.charAt(3)); (it's help to find what character extis at that position.)

// let str = "raj";
// str[0] = "a"; ( remember it's not working.)
// str = (str.replace("r","a")); (this way we change it any character in str. )
// console.log(str); 
 


