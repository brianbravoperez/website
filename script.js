var firstname = "brian"
var lastname = "bravo"
var hasPets = false;



console.log(firstname);
console.log(lastname);
console.log(hasPets);

if(hasPets === true){
    console.log("They are playful -- Dogs have four legs");

}

if(hasPets === false){
    console.log("humans are the GOATS")
}
var number = 0;
while (number < 15){
    console.log("1 2 3 4 5 6 7 8 9 10 11 12 13 14 15");
    number++;
}


var button = document.getElementById("hi");
var h1 =document.getElementById("brian")
var body = document.body;

body.setAttribute("style", "background-color: white");
button.addEventListener("click", function(){
    console.log("boshkalay");
    body.setAttribute("style" "background-color: blue");

})