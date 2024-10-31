// function validateSubmit(event) {
//     // Get form values
//     event.preventDefault();
//     console.log("Test");
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const subject = document.getElementById('subject').value;
//     const message = document.getElementById('message').value;
    
//     // Clear previous error messages
//     const errorName = document.getElementById('name-error');
//     errorName.textContent = '';
    
//     // Validate Name (at least 3 characters)
//     if (name.length < 3) {
//         errorName.textContent = 'Name must be at least 3 characters long.';
//         return;
//     }else{
//         errorName.textContent="";
//     }
    
//     // Validate Email
//     if (!validateEmail(email)) {
//         errorMessage.textContent = 'Please enter a valid email address.';
//         event.preventDefault();
//         return;
//     }
    
//     // Validate Subject (non-empty)
//     if (subject.trim() === '') {
//         errorMessage.textContent = 'Please enter a subject.';
//         event.preventDefault();
//         return;
//     }
    
//     // Validate Message (non-empty)
//     if (message.trim() === '') {
//         errorMessage.textContent = 'Please enter a message.';
//         event.preventDefault();
//     }
// };

// Email validation function
// function validateEmail(email) {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(String(email).toLowerCase());
// }


// ----------------------------------------------------
// function validateForm() {
//     let valid = true;

//     // Get form field values
//     const name = document.getElementById("name").value.trim();
//     const email = document.getElementById("email").value.trim();
//     const subject = document.getElementById("subject").value.trim();
//     const message = document.getElementById("message").value.trim();

//     // Error elements
//     const nameError = document.getElementById("nameError");
//     const emailError = document.getElementById("emailError");
//     const subjectError = document.getElementById("subjectError");
//     const messageError = document.getElementById("messageError");

//     // Reset errors
//     nameError.innerText = "";
//     emailError.innerText = "";
//     subjectError.innerText = "";
//     messageError.innerText = "";

//     // Validate Name
//     if (name.length < 3 || /\d/.test(name)) {
//       nameError.innerText = "Name must be at least 3 characters and contain no numbers.";
//       valid = false;
//     }

//     // Validate Email
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailPattern.test(email)) {
//       emailError.innerText = "Please enter a valid email address.";
//       valid = false;
//     }

//     // Validate Subject
//     if (subject === "") {
//       subjectError.innerText = "Please enter a subject.";
//       valid = false;
//     }

//     // Validate Message
//     if (message === "") {
//       messageError.innerText = "Please enter a message.";
//       valid = false;
//     }

//     // Return the validity of the form
//     return valid;
//   }

  