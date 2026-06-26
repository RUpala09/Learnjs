// get num using prompt 

// let Num = prompt("Enter Num :");

// if(Num % 4 === 0){
//     console.log(Num,"is multiple of 4.");
// }else{
//     console.log(Num,"is not multiple of 4.");
// }

// add grade accordign to marks ranges.

let marks = prompt("Enter Your Marks :");
console.log(marks);

if(marks >= 90 && marks <= 100){
    console.log("Grade A.");
}else if(marks >= 70 && marks <= 89){
    console.log("Grade B");
}else if(marks >= 60 && marks <= 69){
    console.log("Grade C");
}else if(marks >= 50 && marks <= 59){
    console.log("Grade D");
}else if(marks >= 0 && marks <= 49){
    console.log("Grade F");
}else{
    console.log("Invaild marks number");
}