
let url = "http://localhost:3000/contacts"
// put the solution code to persist and fetch data here
 
/*
    persistSumittedContact() should contain code to persist given contact to server
    use axios to call the post method and persist data
    ensure the return from axios handles both success and error
    the posted data should be displayed on the browser as well.
*/

//const axios = require("axios").default;

const persistSubmittedContact = (contact) => {
    axios.post(url, contact)
         .then((response)=>{
            console.log(response);
         })
         .catch((error)=>{
            console.log(error);
         });

  
};

var contact ={
    "id": 4,
    "FirstName": "Donald",
    "LastName": "Mitchell",
    "Email":  "Donald123@gmail.com",
    "HomeNo": +911234567890,
    "Company": "Rosemary International",
    "Job title": "Manager",
    "WorkNo": +912453652780
};

//persistSubmittedContact(contact);

/*
    getDetails() should contain code to fetch details of contact for the given contact-id from server
    use axios to call the get method and fetch data
    ensure the return from axios handles both success and error
    the fetched data should be displayed on the browser in a modal dialog.
*/
const getDetails = (id)=>{
   
    axios.get(url).then((response)=>{

        let records = response.data;
        sorted(records);

        let record = records[id];
        console.log(record);

        var contact = document.getElementById("contact-data");
        contact.innerHTML = record.FirstName + " " + record.LastName + "<br/>" + "Home " +
                      record.HomeNo + "<br/>" + "Birthdate " + record.Birthdate + "<br/>" +
                      "Company " + record.Company + "<br/>" + "Job Title " + 
                      record.JobTitle + "<br/>";
       

    })
    .catch((error)=>{
        console.log(error);
    })
};

//getDetails(2);

/*
    showPersistedData() should contain code to fetch details of all existing contacts from server
    use axios to call the get method and fetch data
    ensure the return from axios handles both success and error
    the fetched data should be displayed on the browser
*/

const showPersistedData = () => {
    axios.get(url).then((response)=>{

        console.log(response.data);

        records = response.data;
        sorted(records);
        /*records.sort((a, b)=>{
            const nameA = a.FirstName;
            const nameB = b.FirstName;
            if(nameA < nameB){
                return -1;
            }
            if(nameA > nameB){
                return 1;
            }
            return 0;

        });*/

        
        var tbody = document.querySelector("tbody");
        var start = 0;
        records.forEach((record)=>{

             var tr = document.createElement("tr");
             var th1 = document.createElement("th");
             th1.innerHTML = record.FirstName;
             tr.appendChild(th1);
             var th2 = document.createElement("th");
             th2.innerHTML = record.LastName;
             tr.appendChild(th2);
             var th3 = document.createElement("th");
             th3.innerHTML = record.Email;
             tr.appendChild(th3);
             var th4 = document.createElement("th");
             th4.innerHTML = record.HomeNo;
             tr.appendChild(th4);
             var th4 = document.createElement("th");
             var btn = document.createElement("button");
             btn.className = "button";
             btn.setAttribute("data-bs-toggle", "modal");
             btn.setAttribute("data-bs-target", "#exampleModal");
            
             btn.innerHTML = "+";
             btn.id = start;
             
             th4.appendChild(btn);
             tr.appendChild(th4);

            //getDetails(btn.id);
             
            start++;
                         
            tbody.appendChild(tr);
             

            
             

    })
    })
    .catch((error)=>{
        console.log(error);
    })

};
showPersistedData(); //uncomment this code to display the existing contacts on browser

//var contact = document.getElementById("contact-data");
//contact.innerHTML = "Hello World";

function sorted(records){

    records.sort((a, b)=>{
        const nameA = a.FirstName;
        const nameB = b.FirstName;
        if(nameA < nameB){
            return -1;
        }
        if(nameA > nameB){
            return 1;
        }
        return 0;

    });
}



/*var modal = document.getElementById("exampleModal");

//getDetails(3);
modal.addEventListener('show.bs.modal', function(event){
    var button = event.relatedTarget;
    console.log(button);
    getDetails(button.id);    
})*/

function showModal(){
    var modal = document.getElementById("exampleModal");

    //getDetails(3);
    modal.addEventListener('show.bs.modal', function(event){
    var button = event.relatedTarget;
    console.log(button);
    getDetails(button.id);    
   })
};

showModal();



 

module.exports = { persistSubmittedContact, showPersistedData, getDetails }

