/* 
    define object that takes url as parameter and 
    returns Promise with the response for the get and post requests made
    the object should have 2 properties 
    - get
    - post

    the properties should return Promise that should resolve 
    for success or reject with error

*/

const axios = require('axios');

export default function http(url){

    this.get =() =>axios.get(url)
    this.post =(body) => axios.get(url, body)
}





// create object of the Promise driven HTTP client and ensure following code works

const httpClient = new http('http://localhost:3000/contacts');


let contact = {
    // add properties as per the data structure of the data fetched and retrieved
    "firstName": "jones",
    "lastName": "christi",
    "email": "jones.c@gmail.com",
    "homeNo": "+1 890 765 3210",
    "workNo": "",
    "birthDate": "2001-16-9",
    "company": "",
    "jobTitle": "",
    "notes": "nth contact",
    "contactAddedOn": "2021-05-23T12:19:11.235Z"
  }

httpClient
.post(contact)
.then(response=>{
    alert('record added')
    console.log(response);
})
.catch(err=>{
    console.log(err);
});

httpClient
.get()
.then((response)=>{
    let data = '<ul>'
    let records = JSON.parse(response);
    records.forEach(r => {
        data+= `<li>${r.firstName}.${r.lastName}</li>`
    })
    data+='</ul>'
    document.body.innerHTML += data;
    console.log(response);
})
.catch(err=>{
    document.write(response);
    console.log(err)
});

