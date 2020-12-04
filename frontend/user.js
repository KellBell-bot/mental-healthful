const userURL= "http://localhost:3000/users"

function createUser(event, userData) {
    let signForm = document.querySelector('form')
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