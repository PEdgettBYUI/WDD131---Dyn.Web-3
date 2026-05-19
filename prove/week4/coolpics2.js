// Used for Header Menu button
var menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

// Used for Gallery Modal
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Event listener for Menu button
menuBtn.addEventListener("click", toggleMenu);

// Show or Hide mobile menu
function toggleMenu() {
    menu.classList.toggle("hide");
    menuBtn.classList.toggle("change")
}

// Event listener for opening the modal
gallery.addEventListener('click', openModal);

function openModal(event) {
    // Code to show modal  - Use event parameter 'e'
    // console.log(event.target.src);
    // console.log(event.target.alt);

    let imageSrc = event.target.src;
    let imageAlt = event.target.alt;

    // Select img tag inside dialog, give it src
    modalImage.src = imageSrc.replace("-sm.", "-full.");
    modalImage.alt = imageAlt.replace("An image of Norris Geyser", "A LARGE image of Norris Geyser.")
    // console.log(typeof(imageSrc))   //NOTE: typeof() can be used to find the type of a variable
    modal.showModal();
}
// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});