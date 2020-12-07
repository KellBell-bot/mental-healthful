function renderAbout(event){
    document.querySelector("#main").innerHTML = ""

    let main = document.querySelector("#main")
    let card = document.createElement("div")

        card.innerHTML = 
        `<div class="ui link cards">
        <div class="card">
          <div class="image">
            <img src="https://avatars3.githubusercontent.com/u/68081665?s=460&u=ac195d4ebbaad1f7b32188ab89738c4ffbe5cdea&v=4" height= '200px'>
          </div>
          <div class="content">
            <div class="header">Mauro Dorigo</div>
            <div class="meta">
              <a>Flatiron Student</a>
            </div>
            <div class="description">
              Mauro is a former cheese maker and almost graduate of Flatiron School.
            </div>
          </div>
        </div>
        <div class="card">
          <div class="image">
            <img src="https://i.imgur.com/llGLOYo.jpg" height= '200px'>
          </div>
          <div class="content">
            <div class="header">Kellie Hamilton</div>
            <div class="meta">
              <span class="date">Flatiron Student</span>
            </div>
            <div class="description">
              Kellie loves cheese and wine and is also an almost graduate of Flatiron School.
            </div>
          </div>
        </div>`
main.appendChild(card)

}