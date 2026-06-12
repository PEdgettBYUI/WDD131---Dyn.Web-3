const ticketForm = document.querySelector("#ticketForm");
const ticketType = ticketForm.ticketType;


// Check if Type == Student or Guest and show numContainer
ticketType.addEventListener("change", event => {
    event.preventDefault();     // Prevents the page from reloading on form submission
    const output = ticketForm.querySelector("#submissionOutput");
    output.innerHTML = ""

    const chosenValue = ticketType.value;
    const studentSelection = document.querySelector("#studentChoice");   
    const guestSelection = document.querySelector("#guestChoice");
    const studentIdInput = document.querySelector("#studentId");
    const guestAccessInput = document.querySelector("#guestAccess");

    if (chosenValue == "student") {
        studentSelection.hidden = false;
        studentIdInput.required = true;
        guestSelection.hidden = true;
        guestAccessInput.required = false;
    }
    if (chosenValue == "guest") {
        studentSelection.hidden = true;
        studentIdInput.required = false;
        guestSelection.hidden = false;
        guestAccessInput.required = true;
    }
    else if (chosenValue == "") {
        studentSelection.hidden = true;
        studentIdInput.required = false;
        guestSelection.hidden = true;
        guestAccessInput.required = false;

    }
});


// Check if Student I# is 9-digits and only numbers
function StudentIdValidation() {
    const studentId = ticketForm.studentId.value;

    // regex pattern for 9digits with only numbers: ^\d{9}$
    // Returns true or false depending on if studentId matches the conditions
    const isValid = /^\d{9}$/.test(studentId);
    
    return isValid;
}


// Check if Guest Access value == 'EVENT131'
function AccessValidation() {
    const accessCode = ticketForm.guestAccess.value;
    if (accessCode == "EVENT131") {
        return true; }
    else { return false; }
}


// On Submit, inform the user of errors if there were any present in StudentId/GuestAccess
//  If successful, give Ticket Created and Name, Type, and Date info.
ticketForm.addEventListener("submit", event => {
    event.preventDefault();     // Prevents the page from reloading on form submission
    const chosenValue = ticketType.value;
    const output = ticketForm.querySelector("#submissionOutput");
    output.innerHTML = ""

    let ticket_flag = true;
    if (chosenValue == "student") {
        if (!StudentIdValidation()) {
            output.innerHTML += `<p>Student Id must be 9 digits</p>`;
            return;
        }
    }
    if (chosenValue == "guest") {
        if (!AccessValidation()) {
            output.innerHTML += `<p>Not the right access code!</p>`;
            return;
        }
    }

    output.innerHTML = `
    <h3>Ticket Created</h3>
    <p>${ticketForm.firstName.value} ${ticketForm.lastName.value}</p>
    <p>${chosenValue}</p>
    <p>${ticketForm.eventDate.value}</p>
    `;
});