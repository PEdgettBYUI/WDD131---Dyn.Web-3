// Grab the form element from the DOM, print it out
const form = document.querySelector("#fsyForm");

console.log(form);

// Create an event listener on the form
// Calls a function when "submit"

form.addEventListener("submit", event => {
    event.preventDefault();     // Prevents the page from reloading on form submission
    console.log(event);

    const firstName = form.firstName.value;
    console.log(firstName);
    
    // Retrieve email, last name, print to console
    const email = form.email.value;
    const lastName = form.lastName.value;

    const campuses = form.campus;
    console.log(lastName);
    console.log(email);

    
    // console.log(campuses[0].checked);   
    
    // Returns a bool each checked element
    campuses.forEach(campus => {
        if (campus.checked) {
            console.log(`${campus.value}: Checked`);
        }
    });
});
