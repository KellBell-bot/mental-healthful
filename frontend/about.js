function renderAbout(event) {
  document.querySelector("#main").innerHTML = "";

  let main = document.querySelector("#main");
  let card = document.createElement("div");

  card.innerHTML = `
      <div class="container">
      <div class="card-group">
      <div class="card">
      <img class="ui circular image" src="https://i.imgur.com/eiJ32tN.jpg" width= "750px">
          
      </div>
        <div class="card">
          <img class="card-img-top" src="https://avatars3.githubusercontent.com/u/68081665?s=460&u=ac195d4ebbaad1f7b32188ab89738c4ffbe5cdea&v=4" alt="Card image cap" width="256px" height="200px">
          <div class="card-body">
            <h5 class="card-title">Mauro Dorigo-Cortes</h5>
            <p class="card-text">Mauro is a former cheese maker and an almost graduate of Flatiron School.</p>
            <p class="card-text"><small class="text-muted"><a href="https://github.com/purisquiri" target="https://github.com/purisquiri">Github</a></small></p>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="https://i.imgur.com/llGLOYo.jpg" alt="Card image cap" width="256px" height= '200px'>
          <div class="card-body">
            <h5 class="card-title">Kellie Hamilton</h5>
            <p class="card-text">Kellie loves cheese and wine and is also an almost graduate of Flatiron School.</p>
            <p class="card-text"><small class="text-muted"><a href="https://github.com/KellBell-bot" target="blank">Github</a></small></p>
          </div>
        </div>
        <div class="card">
        <img class="ui circular image" src="https://i.imgur.com/eiJ32tN.jpg" width= "750px">
        </div>
    
        
      </div>
        </div>

        `;
  main.appendChild(card);
}

//<div class="card-group">
//     <div class="card ">

//         <img class="justify-content-center" src="https://avatars3.githubusercontent.com/u/68081665?s=460&u=ac195d4ebbaad1f7b32188ab89738c4ffbe5cdea&v=4" height= '200px'>

//       <div class="card-body">
//         <div class="header">Mauro Dorigo</div>
//         <div class="meta">
//           <a href="https://github.com/purisquiri" target="https://github.com/purisquiri">Github</a>
//         </div>
//         <div class="description">
//           Mauro is a former cheese maker and an almost graduate of Flatiron School.
//         </div>
//       </div>
//     </div>
//     <div class="card ">

//       <img src="https://i.imgur.com/llGLOYo.jpg" widht= '150px' height= '200px'>

//       <div class="card-body">
//         <div class="header">Kellie Hamilton</div>
//         <div class="meta">
//           <a href="https://github.com/KellBell-bot" target="blank">Github</a>
//         </div>
//         <div class="description">
//           Kellie loves cheese and wine and is also an almost graduate of Flatiron School.
//         </div>
//       </div>
//     <div class="card ">
//       <img src="https://media.giphy.com/media/fAnzw6YK33jMwzp5wp/giphy.gif" height="350px">
//       <div class="card-body"> keep working</div>
//     </div>
// </div>
