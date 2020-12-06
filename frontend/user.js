const userURL= "http://localhost:3000/users"

document.addEventListener('DOMContentLoaded', () => {
    let signForm = document.querySelector('form')
    let signUpBtn = document.querySelector('#signUpBtn')


    signUpBtn.addEventListener('click', () => {
        let formSection= document.querySelector('.form')
       
         
        formSection.innerHTML=  

        `   <input type="text" placeholder="Name" name="name">
             <input type="text" placeholder="Email" name="email">
             <button type="submit" class="ui button" name="submit">Submit</button>`

    })
    
})





function createUser(event, userData) {
    event.preventDefault()
    
    let newUser= {
        name: event.target.name.value,
        email: event.target.email.value
    }
    
    fetch(userURL, {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        
        body: JSON.stringify(newUser)
    }).then(response => response.json())
    .then(data => data)
    
    document.querySelector('form').innerHTML= ""
}