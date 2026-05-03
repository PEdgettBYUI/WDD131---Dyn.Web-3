
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let pageContent = document.body;

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        pageContent.style.backgroundColor = "black";
        pageContent.style.color = "white";
        logo.src="images/byui-logo-white.png";
    } else {
        pageContent.style.backgroundColor = "white";
        pageContent.style.color = "black";
        logo.src="images/byui-logo-blue.webp";
    }
}           
                    