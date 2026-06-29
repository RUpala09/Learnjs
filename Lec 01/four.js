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

// let price = [250,645,300,900,50];

// for(let i=0; i<price.length; i++){
//     let offer = price[i] / 10;
//     price[i] -= offer;
// }

// console.log(`after appply price is ${price}`);

// => arrays Methods

// let foodItems = ["tomato","potato","apple"];  //(changes happens in original array.)
// // foodItems.push("banana","berry"); using push we add items.    (push)
// console.log(foodItems);
// let deletedItems = foodItems.pop();          (pop)
// console.log(foodItems);
// console.log("Deleted items is : ",deletedItems);

// console.log(foodItems.toString()); //(it's convert our array into string but it's not change the original stigs.)
// console.log(foodItems);

// let indianHeros = ["ajay devgan","amitabachan","akshaykumar","amir khan","sahrukhan"];
// let southHeros = ["vijay thalapti","mahesh babu","ravi teja"];
// let hollywoodHeros = ["tom cruse","piter"];

// let heros = indianHeros.concat(southHeros,hollywoodHeros); //merge(concat) my multiple arrays.
// console.log(heros);



// let indianHeros = ["ajay devgan","amitabachan"];

// indianHeros.unshift("prem chopra"); // add at starting index
// let val = indianHeros.shift(); //remove at starting in index
// console.log("deleted val :",val);


// let indianHeros = ["ajay devgan","amitabachan","akshaykumar","amir khan","sahrukhan"];
// console.log(indianHeros);

// console.log(indianHeros.slice(1,3)); // it's gave us some silces in our arrays. (it's not change original arrays.)

// let num = [1,2,3,4,5,6,7];

// num.splice(2,3,101,102,103); // 2 is starting index , 3 means deleted doing in index 2,3,4 so in array -> 3,4,5 is deleted and 101,102,103 is added as a new element.
// console.log(num);

//add Element
// num.splice(1,0,11,12);

//remove Element 
// num.splice(3,1);

//replce Element
// num.splice(4,1,55);
