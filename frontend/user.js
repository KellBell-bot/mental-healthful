const userURL = "http://localhost:3000/users";

document.addEventListener("DOMContentLoaded", () => {
  // loginForm()
  // let signForm = document.querySelector('form')
  let signUpBtn = document.querySelector("#signUpBtn");

  signUpBtn.addEventListener("click", (event) => {
    renderForm(event);
  });
});

function renderForm(event) {
  document.querySelector("main").innerHTML = "";

  let form = document.createElement("form");
  form.className = "container card ui form justify-content-center";

  form.innerHTML = `   <h3 class="card-title text-center">Sign Up</h3><br/>
        <input type="text" placeholder="Name" name="name">
         <input type="text" placeholder="Email" name="email"><br/>
         <button type="submit" class="ui button" name="submit">Submit</button>`;

  document.querySelector("#main").appendChild(form);

  document.querySelector("form").addEventListener("submit", (event) => {
    createUser(event);
  });
}

//     let loginBtn= document.querySelector('#loginBtn')

//     loginBtn.addEventListener('click', () => {
//         let formSection= document.querySelector('.form')

//         formSection.innerHTML=

//         `  <h3>Login</h3>
//              <input type="text" placeholder="Email" name="email">
//              <button type="submit" class="ui button" name="submit">Submit</button>`

//     })

// }

// function createLogin(event){
//     event.preventDefault()

//     let userInfo= {
//         email: event.target.email
//     }

//     fetch('http://localhost:3000/login', {

//         method: "POST",
//         headers:{
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         },

//         body: JSON.stringify(userInfo)
//     }).then(response => response.json())
//     .then(data => data)
//     document.querySelector('form').innerHTML= ""
//     console.log("you're user email is"+ `${userInfo.email}`)
//     }

function createUser(event) {
  event.preventDefault();
  let name = event.target.name.value;
  document.getElementById("userDiv").innerText = `Hi ${name}!`;

  let user = document.getElementById("userDiv");
  // userId.dataset
  let newUser = {
    name: name,
    email: event.target.email.value,
  };

  fetch(userURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },

    body: JSON.stringify(newUser),
  })
    .then((response) => response.json())
    .then((data) => {
      data, (user.dataset.userId = data.id);
      getPract();
    });
  document.querySelector("main").innerHTML = "";
  //document.querySelector("form").innerHTML = `<h3 class="welcome">Welcome!</h3>
  // <img class="ui circular image" src="https://i.imgur.com/eiJ32tN.jpg" width= "750px">`;
}
