
const url = "http://localhost:3000/practitioners"

const urlUser = "http://localhost:3000/user"

let main = document.querySelector("#main")

document.addEventListener("DOMContentLoaded", ()=> {
    getPract()
    document.querySelector('form').addEventListener('submit', createUser)
 })

function getPract(){
fetch(url)
    .then(resp => resp.json())
    .then(practArray => practArray.forEach(practitioner => renderP(practitioner)))
}
function renderP(practitioner){
    const main = document.querySelector("#main")
    let card = document.createElement("div")
    main.appendChild(card)
    card.className = "ui card"
    card.id = practitioner.id

    let allUsers = practitioner.user_practitioners
    function likesCounter(totalLikes, user) {
        return totalLikes + user.likes;
    }

    function commentCounter(totalComents, user) {
        return totalComents + user.reviews.length
    }

    card.innerHTML = `
            <div class="content">
            <a data-id=${practitioner.id} class="header">${practitioner.name}</a>
            </div>
                <div class="image">
                    <img src = "${practitioner.image}">
                </div>
                <div class="content">
                    <span class="right floated">
                    <i class="heart outline like icon"></i>
                        ${allUsers.reduce(likesCounter, 0)}
                    </span>
                    <i class="comment icon"></i>
                    ${allUsers.reduce(commentCounter, 0)}
                </div>
            <div class="extra content">
            <div class="ui large transparent left icon input">
                <i class="heart outline icon"></i>
                <input type="text" placeholder="Add Reviews...">
            </div>
            </div>`
        
   card.querySelector(".header").addEventListener("click", () => {
       showPract(event, practitioner)})
}

function showPract(event, practitioner){
    // console.log(event.target.dataset.id);
    
    document.querySelector("#main").innerHTML = ""
    fetch(`${url}/${event.target.dataset.id}`)
    .then(res => res.json())
    .then(renderP)
    
    let segment = document.createElement('div')
    segment.className = "ui raised segment"
    let about = document.createElement('p')
    about.innerText = practitioner.about
    let specialtiesTitle = document.createElement('ul')
    specialtiesTitle.innerText = 'Specialties:'
    let specialties = document.createElement('li')
    practitioner.specialties.forEach(specialty => {
        specialties.innerHTML += `<li>${specialty}</li>`})
    let languages = document.createElement('p')
    languages.innerText = `Languages Spoken: ${practitioner.languages}`
    let zipCode = document.createElement('p')
    zipCode.innerText = `Zip Code: ${practitioner.zip_code}`

    specialtiesTitle.append(specialties)
    segment.append(about, specialtiesTitle, languages, zipCode)
    main.appendChild(segment)

    
}
// const url = "http://localhost:3000/practitioners"
// let main = document.querySelector("#main")


// document.addEventListener("DOMContentLoaded", ()=> {

//     document.querySelector('form').addEventListener('submit', createUser)
//  })

