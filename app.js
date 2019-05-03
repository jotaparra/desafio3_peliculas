const movies =['psycho', 'Citizen%20Kane', 'Gone%20with%20the%20Wind', 'casablanca', 'rebecca', 'La%20grande%20illusion', 'Modern%20Times', 'Singin%27%20in%20the%20Rain', 'metropolis', 'Forbidden%20Planet','2001:A%20Space%20Odyssey', 'seven%20samurai', 'Vertigo', 'Some%20Like%20It%20Hot','Rebel%20Without%20a%20Cause','ordet', 'm'];

function classicMovie () {movies.map(function(item) {
    fetch('http://www.omdbapi.com/?apikey=5688f11a&t='+ item)
      .then(res => res.json())
      .then(data => {
        document.getElementById('root').innerHTML+=
      `<div class="row">
      <div class="principal-box col-12 col-lg-8 offset-lg-2">
          <div class="titulo col-12">
              <div class="row align-items-center">
                  <div class="col-2">
                      <div class="circle">
                          <img src=${data.Poster} alt="miniatura poster película">
                      </div>
                  </div>
                  <div class="col-10">
                      <p class="movie-title pl-5 pl-md-3">
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