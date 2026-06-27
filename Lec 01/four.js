// arrays (collection of items)

// let heros = ["ironman", "spiderman", "batman","heman","thor"];
// console.log(heros);

// let marks = [12,14,15,16,19]; //(out of 20)
// console.log(marks);

// let info = ["rahul",12,"Delhi"];
// console.log(info);

// => array indices(index)

// let marks = [12,14,15,10,18];
// console.log(marks[0]);
// marks[3]=0;
// console.log(marks); //(here marks values is mutable means changeble so upper line changes happens.)

// => loop in arrays

// let heros = ["ironman", "spiderman", "batman","heman","thor"];

// for(let i=0; i < heros.length; i++){
//     console.log(heros[i]);
// }
// console.log("loop ended.");

//using for of

// let studentsNames = ["raj","ram","yash","jash","jigar"];

// for(let student of studentsNames){
//     console.log(student);
// }

// Qs

// let marks =[85,97,44,37,76,60];
// let sum = 0;

// for(let val of marks){
//     sum += val;
// }

// let average = sum / marks.length;
// console.log(`Total of average marks = ${average}`);

// Qs 

let price = [250,645,300,900,50];

for(let i=0; i<price.length; i++){
    let offer = price[i] / 10;
    price[i] -= offer;
}

console.log(`after appply price is ${price}`);