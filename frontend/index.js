
const url = "http://localhost:3000/practitioners"
const urlUP = "http://localhost:3000/user_practitioners"
const urlUser = "http://localhost:3000/user"

const main = document.querySelector("#main")

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

    function likesCounter(totalLikes, pract) {
        return totalLikes + pract.likes;
    }

    function commentCounter(totalComents, pract) {
        let nComments = 0
        if (pract.reviews.length > 0){
            nComments += 1
           
            return totalComents + nComments
        }
        // function incrementValue()
        // {
        //     var value = parseInt(document.getElementById('number').value, 10);
        //     value = isNaN(value) ? 0 : value;
        //     value++;
        //     document.getElementById('number').value = value;
        // }
        // onclick to hearts??
        
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
                    <i class="heart outline like icon" ></i>
                        ${allUsers.reduce(likesCounter, 0)}
                    </span>
                    <i class="comment icon"></i>
                        ${allUsers.reduce(commentCounter, 0)}
                </div>
            `
        
    card.querySelector(".header").addEventListener("click", () => {
       showPract(event, practitioner)})

   
}

function showPract(event, practitioner){
    // console.log(event.target.dataset.id);
    document.querySelector("#main").innerHTML = ""
    
    fetch(`${url}/${event.target.dataset.id}`)
    .then(res => res.json())
    .then(renderP)

    // console.log(event.target.dataset);

    

    let reviewSegment = document.createElement('div')
    reviewSegment.className = "ui secondary segment"
    reviewSegment.innerText = "Reviews: "
    
    let reviewDiv = document.createElement('ul')
    let array = practitioner.user_practitioners.map(function(up) {
        
        return up.reviews}).forEach(review => { 
            reviewDiv.innerHTML += `<li>${review}</li>`
        })

    let commentsForm = document.createElement('form')
    commentsForm.className = "content"
    commentsForm.id = practitioner.id
    
    let placeHolder = document.createElement('div')
    placeHolder.className = "ui large transparent left icon input"
    let inputForm = document.createElement('input')
    inputForm.type ="text"
    inputForm.name ="review"
    inputForm.id ="review-input"
    inputForm.placeholder= "Add Review..."
    // inputForm.value = ""
    let button = document.createElement('button')
    button.className = "ui primary button"
    button.id = "submit"
    button.innerText = "submit a review"
   

    
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
        
    
    
    placeHolder.append(inputForm)
    commentsForm.append(placeHolder, button)
    
    reviewSegment.append(reviewDiv, commentsForm)
    
    specialtiesTitle.append(specialties)
    segment.append(about, specialtiesTitle, languages, zipCode)
    main.append(segment, reviewSegment)

    commentsForm.addEventListener("submit", function(event){
        event.preventDefault();
        postReview(event, commentsForm, reviewDiv)
    })



}

function postReview(event, commentsForm, reviewDiv){
    event.preventDefault();
    let practitionerId = commentsForm.id


    let userId = document.getElementById("userDiv")
    
    let newReviewText = commentsForm.review.value
    
    let li = document.createElement('li')
    li.innerText = commentsForm.review.value
    reviewDiv.appendChild(li)
    console.log(newReviewText);
    commentsForm.reset();
    
   
    let newReview= {
        user_id: +userId.dataset.userId,
        practitioner_id: +practitionerId,
        reviews: newReviewText,
        likes: 0
    }

    console.log();
    
    fetch(urlUP, {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        
        body: JSON.stringify(newReview)
    }).then(response => response.json())
    .then(newdata => console.log(newdata)) 


}


