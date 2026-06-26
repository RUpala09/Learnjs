let mode = "purple";
let color;

if(mode === "dark"){
    color = "black";
}
else if(mode === "light"){
    color = "white";
}else{
    console.log("You're given mode color is not exits. Please enter given options.")
}

console.log(color);