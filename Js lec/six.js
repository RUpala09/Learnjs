//window object

// console.log("hello");
// window.console.log("hello2");

//document object (it's window object's sub part)

// console.log(window.document); // we get html files.
// console.log(document); //we get all methods and property.

// console.dir(window.document); // it's used to print document objects
// console.log(window.document); // its use to print document elements.

// DOM (document object model) It's used for doing dynamic changes without thouch html and css files.

// console.dir(document.body); // we get all body tag objects.
// console.log(document.body); // we get all body elements.

// document.body.style.background = "green"; // color change with the help of js  
 
// document.body.childNodes[3].innerText = "abcd"; // written text change and become abcd with the help of js

//  => DOM manipulation

// 1) Using id we acces our elemnet.

// let myId = document.getElementById("mainHeading"); 
// console.dir(myId);

// 2) using class

// let myclass = document.getElementsByClassName("headingclass");
// console.dir(myclass);  // its return the htmlcollection

// 3) using tag name

// let para = document.getElementsByTagName("p");
// console.dir(para);

// 4) using query selector (using query selector we acces one or all type of class tags and id.)

 // mostly used this  query selector.....
 
// let para = document.querySelector("p"); // it's gave only one things.
// let para = document.querySelectorAll("p"); // it's return all paragraphs.
// console.dir(para); 

// -> for class

// let firstEl = document.querySelector(".headingclass"); 
// console.dir(firstEl);

// let allEl = document.querySelectorAll(".headingclass"); 
// console.dir(allEl); 

// -> for id

// let myid = document.querySelector("#mainHeading");
// console.dir(myid);

 
// -> properties (we can access and change our values using this properties.)

// let myid = document.querySelector("#mainHeading");
// // console.dir(myid);
// console.log(myid.tagName); //write in console and see the tagname.

// let fruit = document.querySelector("div");
// console.dir(fruit);
// console.dir(fruit.innerText); // only text come
// console.dir(fruit.innerHTML); // html tags and text come.

// console.dir(fruit.innerText = "abcd");
// console.dir(fruit.innerHTML = "<i>aabbccdd</i>");
 
// => this way we change out values using innertext & innerhtml

// let heading = document.querySelector("h1");
// console.dir(heading);
// console.dir(heading.innerText = "new heading"); // change my text old heading to new heading.
// console.dir(heading.innerHTML = "<i>new heading</i>");  // come in italic way and also seen html changes in web browsers html file.

// => textcontent is work as a innertext but its shows hidden elements,

// let heading = document.querySelector("h1");
// console.dir(heading.innerText); // not visible in this
// console.dir(heading.textContent); // i seen it my hidden text.

// => extra

// let child = document.querySelector("h1").childNodes;
// console.dir(child); // we get  h1 tag childernode list.


//   pr 1

// let heading = document.querySelector("h2");
// console.dir(heading);
// console.dir(heading.innerText = heading.innerText +  " from apna college student");

// pr 2

// let boxclass = document.querySelectorAll(".box");

// first way to do 
// console.dir(boxclass[0].innerText = "new unique value 1");
// console.dir(boxclass[1].innerText = "new unique value 2");
// console.dir(boxclass[2].innerText = "new unique value 3");

// second way using loop
// let idx = 1;

// for(div of boxclass){
//     div.innerText = `new unique value ${idx}`;
//     idx++;
// }















