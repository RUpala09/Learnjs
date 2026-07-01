// functions 

// function myFunction() { // myFunction is my function name. Here my function print the writen line. 
//     console.log("Welcome to apna college.");
//     console.log("We are learning Js :) ");
// }

// myFunction(); // this way we call our function.

// extra 

// function myFun(msg){ // msg is my input and it's called as a parameters.
//     console.log(msg);
// }

// myFun("I love Js."); // here is my argument.

// using function 2 number sum do it.

// function sum(x,y){  // x,y is our input and it's called as a parameters. REMEMBER -> This x,y parameters are alive in the block of scope {}.
//     s = x + y;
//     // console.log(s);
//     return s; // it's return the value.(only one => if in array or anything  else is contain more value so its return it)
// }

// let finalAns = sum(5,5); // here i passess my argument. 
// console.log(finalAns);

// Arrow Function =>

// sum function

// const arrowSum = (a,b) => {
//     console.log(a + b);
// }

// mul function

// const arrowMul = (x,y)=>{
//     console.log(x * y);
// }

// printHello

// const printHello = () =>{
//     console.log("Hello Dear,");
// }

//pr-1

// function countVolwels(str){
//     let count = 0;
//     for(const char of str){
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//             count++;
//         }
//     }
//        console.log(count);
// }

//  pr-2

// let arrowcountVowels = (str)=>{
//     let count= 0;
//     for(const char of str){
//         if(char === "a"|| char === "e" || char === "i" || char === "o" || char==="u"){
//             count++;
//         }
//     }
//     console.log(count);
// }

// forEach Function
//=> callback function :

    // function str(){ // str is a function
    //     console.log("Hello");
    // }

    // function myFun(str){ // str is a passed as an argument.
    //     return str;
    // }

    // str();

    // forEach fun:

    // let arr = ["Pune","Mumbai","Ahmedabad","Delhi","Gandhinagar"];

    // arr.forEach(function printCitys(val,idx,arr){ // don't use this ways..
    //     console.log(val,idx,arr);
    // });

    // arr.forEach((val)=>{ // this way we write our callbackFunction as an arrow form.
    //     console.log(val.toUpperCase());
    // })

    //ex 

    // let arr = [1,2,3,4,5];

    // arr.forEach((val,idx,arr)=>{
    //     console.log(val,idx,arr); 
    // });

    // pr1

    // let nums = [25,65,70];
    // console.log("numbers is : ",nums);

    // nums.forEach((num)=>{
    //     console.log("square of given numbers is :",num*num);
    // })

    // map method

    // let nums = [1,2,3,4,5];

    // let newArray = nums.map((val)=>{ // map create new array and not change our old array.
    //     return val *2;
    // });

    // console.log(newArray); // new created array.
    // console.log(nums); // old array without any changes.

    // filter Method

    // let arr = [1,2,3,4,5,6,7,8,9,10];

    // let newArray = arr.filter((val)=>{
    //     return val % 2 === 0;
    // });
    
    // console.log("Even no's is :",newArray);

    //reduce method  (it's used when we have a lot of input and we want one vlaue in output so we use this reduce method )

    // let arr = [1,2,4,5]; //  in begining 1 is result and 2 is current then 1 +2 =3 so now 3 is stored in resutl and now current is 4 so 3 + 4 = 7 so this 7 is stored in result and now 5 is my curent and 7 + 5 = 12.  

    // const output = arr.reduce((result, currentNum)=>{ // here result or we called as previous too.
    //     return result + currentNum;
    // });

    // console.log(output); // 12

    
    // extra (find largest no.) 

    // let arr = [1,2,4,5]; 

    // const output = arr.reduce((previous, currentNum)=>{ 
    //     return previous > currentNum ? prev : currentNum; // add < so we got smallest no.
    // });

    // console.log(output); //5

    // pr1

    // let marks = [23,69,98,45,93,99,100,41,95];
    // console.log(marks);

    // let newArray = marks.filter((mark)=>{
    //     return mark >= 90;
    // });

    // console.log("90+ marks :",newArray);

    // pr2

    // let num = prompt("Enter a number : ");
    
    // let arr = [];

    // for(let i=1; i<=num; i++){
    //     arr[i-1] = i;
    // }
    // console.log(arr);

    // let sum = arr.reduce((prev , currNum)=>{
    //     return prev + currNum;
    // });

    // console.log("sum :",sum);

    
    // let factorial = arr.reduce((prev , currNum)=>{
    //     return prev * currNum;
    // });

    // console.log("factorial :",factorial);

    
    