//Provide the solution code here

let contacts = [];

var count = 0;
function init() {
    // listen to click of addContact button and add maximum of two additional inputs for inputting Contact Nos.
    var contactNos = document.getElementById("contactNos");
    var addContact = document.getElementById("addContactNo");
   
    
    addContact.addEventListener('click', ()=>{
        
        if(count < 2){
            const newBtn = document.createElement("input");
            newBtn.className = "form-control form-control-sm";
            newBtn.placeholder = "Enter Contact No";
            if(count === 0){
                newBtn.id = "contactOne";
            }
            else{
                newBtn.id = "contactTwo";
            }
            contactNos.appendChild(newBtn);
            count += 1;
        }
            
    })
   
    //disable all dates for whom age is less than 18

    var currentDate = new Date();

    currentDate = new Date().toISOString().split("T")[0];
    var maxYear = currentDate.substring(0, 4)-18;
    console.log(typeof maxYear);
    var maxMonth = currentDate.substring(5, 7);
    console.log(maxMonth);
    var date = currentDate.substring(8, 10);
    console.log(date);

    var maxDate = new Date(maxYear, parseInt(maxMonth), parseInt(date));
    console.log(maxDate);

    const setMaxDate = element =>{
        element !== null ? element.setAttribute('max', maxDate.toISOString().split("T")[0]):element;
    }
    
    setMaxDate(document.getElementById("birthdate"));
 
}




const submitContact = (event) => {
    event.preventDefault();

    //contact object captures all the inputs provided
    console.log("event: " +event.target);

 
    let contactInfo = Object.fromEntries(new FormData(event.target));

    console.log("contactInfo " +contactInfo);

    console.log(contactInfo.firstname);
    console.log(contactInfo.contactOne);
     
    //errors object captures all the validation errors
    let error ={
        firstNameError: validateFirstName(contactInfo.firstname),
        lastNameError: validateLastName(contactInfo.lastname),
        emailError: validateEmail(contactInfo.email),
        homeNoError: validateHomeNo(contactInfo.homeNo),
        workNoError: validateWorkNo(contactInfo.workNo),
        contactOneError:validateContactOne(contactInfo.contactOne),
        contactTwoError:validateContactTwo(contactInfo.contactTwo),
        notesError: validateNotes(contactInfo.notes)
    }

     
    let errorMessages = Object.values(error).filter(e => e !== "");

    //display validation summary with error messages
    displayValidationSummary(errorMessages);
    
     
    //if no errors, push the contact to contacts array
    if(errorMessages.length === 0){
        contacts.push(contactInfo);
       
        
    }
    else{
        displayIndividualErrorMessages(error);
    }

    if(error.firstNameError === "" && error.emailError === "" && error.homeNoError === "" &&
        error.notesError === ""){
        document.getElementsByTagName("ul")[0].innerHTML = "";
    }

    //contacts can be logged on to console, or can even be updated on UI

}

//function to display validation summary with error messages provided
function displayValidationSummary(errorMessages){
    document.getElementsByTagName("ul")[0].innerHTML = errorMessages
    .map(e => `<li>${e}</li>`)
    .join("");
}

//function to display error messages alongside the input fields
function displayIndividualErrorMessages(errorMessages){
    let smallElements = document.getElementsByTagName("small");
    console.log(smallElements);

    [...smallElements].forEach((element) =>{
        element.innerHTML = errorMessages[element.id];
    });
}
const isEmpty = value => value === "" || value === undefined || value === null;

const validateInput = (value, fieldName) => isEmpty(value) ? `${fieldName} cannot be left blank` : "";
//function to validate firstName

const validateFirstName = (firstname)=>{

    let validRegex = "^[a-zA-Z. ]*$";
    let firstNameError = validateInput(firstname, "FirstName");

  
    return firstNameError !== "" ? firstNameError : !firstname.match(validRegex) ?
         "FirstName can contain only alphabets and (.)" :"";


}

console.log("helloValid: " + validateFirstName("hello"));

//function to validate lastName
const validateLastName = (lastname)=>{

    let lastNameError = validateInput(lastname, "LastName");

    let validRegex = "^[a-zA-Z.]+";
    return lastNameError !== ""? lastNameError: !lastname.match(validRegex) ?
           "LastName can contain only alphabets and (.)":"";

}

//function to validate email

const validateEmail =(email)=>{

    let emailError = validateInput(email, "Email");

    let validRegex = "^[a-zA-Z0-9.!#$%&'*+/=?^_{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$";
    return emailError !== ""? emailError: !email.match(validRegex) ?
           "Invalid Email":"";
}

//function to validate home no
const validateHomeNo = (homeNo)=>{

    let homeNoError = validateInput(homeNo, "Home No");

    let validRegex = /^\+([0-9 ]{1,2})?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    return homeNoError !== ""? homeNoError: !homeNo.match(validRegex) ?
           "Home Contact No should start with country code prefixed by + and followed by 10 digits":"";
}

//function to validate work no
const validateWorkNo = (workNo)=>{
    
    let workNoError = validateInput(workNo, "Work No");

    let validRegex = /^\+91\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    return workNoError !== ""? workNoError: !workNo.match(validRegex) ?
           "Work Contact No should start with country code prefixed by + and followed by 10 digits":"";

}

//function to validate additional contact no
const validateContactOne = (contactOne)=>{
    let contactOneError = validateInput(contactOne, "Additional contact One");

    let validRegex = /^\+91\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    return contactOneError !== ""? contactOneError: !contactOne.match(validRegex) ?
           "Additional contact No should start with country code prefixed by + and followed by 10 digits":"";
}

//function to validate additional contact no
const validateContactTwo = (contactTwo)=>{
    let contactTwoError = validateInput(contactTwo, "Additional contact Two");

    let validRegex = /^\+91\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    return contactTwoError !== ""? contactTwoError: !contactTwo.match(validRegex) ?
           "Additional contact No should start with country code prefixed by + and followed by 10 digits":"";
}

//function to validate notes
const validateNotes = (notes)=>{
    let notesError = validateInput(notes, "Notes");

    return notesError !== ""? notesError: notes.length > 200? 'Notes should contain maximum of 200 characters':"";
}

//disable all dates for whom age is less than 18


module.exports = submitContact
