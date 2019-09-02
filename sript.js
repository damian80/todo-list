// lets select HTML elements first
let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");

//lets create a functions
function inputLength(){
    return input.value.length;
}
function createListElement(){
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}
function addListAfterClick(){
    if(inputLength()>0){
        createListElement();
    }
}
function addListAfterKeyPress(event){
    if (inputLength()>0 &&event.keyCode === 13){
        createListElement

}
}
// so
// if anybody do a click run addListAfterClick
button.addEventListener("click", addListAfterClick);
// if anybody use a keypress use this function
input.addEventListener("keypress",addListAfterKeyPress);