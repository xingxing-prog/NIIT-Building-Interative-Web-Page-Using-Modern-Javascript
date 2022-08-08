// Provide persistence solution code here
const persistSubmittedContact = (contact) => {

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3000/contacts", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    xhr.onload =()=>{
        if(xhr.status === 201){
            console.log("data added successfully");
        }
        else{
            console.log("operation failed");
        }
    }

    xhr.onerror=() =>{
        console.log("failed to establish connection");
    }
    xhr.send(JSON.stringify(contact));

    
}

// Code to show the persisted data
const showPersistedData = () => {
    let xhr = XMLHttpRequest();

    xhr.open("GET", "http://localhost:3000/contacts", true);

    xhr.onload=()=>{
        let response = JSON.parse(xhr.response);
        console.log(response);

        
    }

    xhr.onerror=()=>{
        console.log("failed to parse JSON file");
    }
    xhr.send();
 
}

module.exports = { persistSubmittedContact, showPersistedData }
