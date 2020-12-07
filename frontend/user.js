const userURL= "http://localhost:3000/users"

document.addEventListener('DOMContentLoaded', () => {
    loginForm()
    // let signForm = document.querySelector('form')
    let signUpBtn = document.querySelector('#signUpBtn')


    signUpBtn.addEventListener('click', () => {
        let formSection= document.querySelector('.form')
       
         
        formSection.innerHTML=  

        `   <h3>Sign Up</h3>
            <input type="text" placeholder="Name" name="name">
             <input type="text" placeholder="Email" name="email">
             <button type="submit" class="ui button" name="submit">Submit</button>`

    })
    
})

function loginForm(){

    let loginBtn= document.querySelector('#loginBtn')

    loginBtn.addEventListener('click', () => {
        let formSection= document.querySelector('form')
       
         
        formSection.innerHTML=  

        `  <h3>Login</h3>
             <input type="text" placeholder="Email" name="email">
             <button type="submit" class="ui button" name="submit">Submit</button>`

    })

}

function createLogin(event, ){
    event.preventDefault()

    let userInfo= {
        email: event.target.email.value
    }
    //comapre email.value to all users using User.find
    //

    fetch('http://localhost:3000/login', {
        
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            
            body: JSON.stringify(userInfo)
        }).then(response => response.json())
        .then(data => data)
        document.querySelector('form').innerHTML= ""  
}



function createUser(event) {
    event.preventDefault()
    let name = event.target.name.value
    document.getElementById("userDiv").innerText = name
    let user = document.getElementById("userDiv")
    // userId.dataset
    let newUser= {
        name: name,
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
    .then(data => { 
        data,
        user.dataset.userId = data.id
        
    })
    
    document.querySelector('form').innerHTML= ""
}