console.log('Estamos conectados')

const movies =['psycho', 'Citizen%20Kane', 'Gone%20with%20the%20Wind', 'casablanca', 'spartacus', 'La%20grande%20illusion', 'Modern%20Times', 'Singin%27%20in%20the%20Rain', 'metropolis', ];

function classicMovie () {movies.map(function(item) {
    fetch('http://www.omdbapi.com/?apikey=5688f11a&t='+ item)
      .then(res => res.json())
      .then(data => {
        document.getElementById('root').innerHTML+=
      `<div class="row">
      <div class="subapartado col-8 offset-2">
          <div class="titulo col-12">
              <div class="row align-items-center">
                  <div class="col-2 col-miniatura">
                      <div class="circular">
                          <img src=${data.Poster} alt="miniatura poster película">
                      </div>
                  </div>
                  <div class="col-10">
                      <p class="parrafo pl-2">
                          ${data.Title}
                      </p>
                  </div>
              </div>
          </div>
          <div class="info-box col-12">
              <div class="row">
                  <div class="col-2">
                      <img class="poster" src=${data.Poster} alt="" srcset="">
                  </div>
                  <div class="col-10">
                      <div class="info">
                          <p><span class="bold">Pais: </span>${data.Country}</p>
                          <p><span class="bold">Año: </span>${data.Year}</p>
                          <p><span class="bold">Duración: </span>${data.Runtime}</p>
                          <p><span class="bold">Sinopsis: </span>${data.Plot}</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>`
    })
      
  })
  };
  classicMovie(); 