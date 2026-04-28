// anytime we want to change DOM, use 'document'
// 'document' is an object like a C# class object
let firstList = document.querySelector(".list");    // grabs the first instance of list in the html
firstList.style.backgroundColor = "#FF0000";

let content = document.getElementById("content");
content.style.color = "#0000FF";

document.querySelector("img").setAttribute("src", "portrait.png");
document.querySelector("img").setAttribute("alt", "new alt tag");

document.querySelector("h1").textContent = "BEANS ARE STORED IN THE TOAST";

let headingText = document.querySelector("h1").textContent;
console.log(headingText);

firstList.className = "new-list";

// Selects all "ul" elements; [1] second element in array
document.querySelectorAll("ul")[1].style.backgroundColor = "pink";

// From the Ponder
let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
})
                