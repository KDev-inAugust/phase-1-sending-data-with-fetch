// Add your code here
//document.addEventListener("DOMContentLoaded", submitData)


function submitData(uName, uMail){
    let createEl = document.createElement('div');
    let formData = {
        name:uName,
        email:uMail,
    }
    return fetch('http://localhost:3000/users',
    {
        method: 'POST',
    headers: {
        'Content-Type':'application/json',
        'Accept':'application/json',
    },
    body: JSON.stringify(formData)
}).then(res => res.json())
    .then(data => document.body.append(data["id"]))
    .catch(function (error) {
        document.querySelector('body').append('Unauthorized Access'); 
        console.log(error.message)
    })
    
   
        
    }
   
