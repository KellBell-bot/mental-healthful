const userURL= "http://localhost:3000/users"

document.addEventListener('DOMContentLoaded', () => {
    let signForm = document.querySelector('form')
    let signUpBtn = document.querySelector('#signUpBtn')

    
    signUpBtn.addEventListener('click', () => {
        if (signForm.style.display === "none") {
            signForm.style.display = "inline";
        }else {
            signForm.style.display = "none"
        }
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

    signForm.reset()
}