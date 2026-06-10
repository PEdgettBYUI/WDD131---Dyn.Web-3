const ticketForm = document.querySelector("#ticketForm");
const ticketType = ticketForm.ticketType;


// Check if Type == Student or Guest and show numContainer
ticketType.addEventListener("change", event => {
    event.preventDefault();     // Prevents the page from reloading on form submission
    const chosenValue = ticketType.value;
    const studentSelection = document.querySelector("#studentId");   
    const guestSelection = document.querySelector("#guestAccess");   

    if (chosenValue == "student") {
        studentSelection.hidden = false;
        studentSelection.required = true;
        guestSelection.hidden = true;
    }
    if (chosenValue == "guest") {
        guestSelection.hidden = false;
        studentSelection.hidden = true;
    }
    else if (chosenValue == "") {
        guestSelection.hidden = true;
        studentSelection.hidden = true;
    }

});