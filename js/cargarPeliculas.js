window.onload = iniciar;

const API_KEY = 'cfda99149c58e26e63fb4a1f74fe361d';
const URL = 'https://api.themoviedb.org/3/';
const URL_IMAGE = 'https://image.tmdb.org/t/p/w500';
var i = 0;

function iniciar() {
    obtenerPeliculasActuales();
    document.getElementById('buscador').onkeypress = obtenerPeliculasActuales;
}

function obtenerPeliculasActuales() {

    if (13 == event.which || i == 0) {

        // document.getElementById('pelis');

        window.location = '#pelis';

        let keyword = this.value;

        if (!keyword) {
            keyword = 'a';
        }

        let url = `${URL}search/movie?api_key=${API_KEY}&query=${keyword}`;

        fetch(url)
            .then(result => result.json())
            .then((data) => {
                let html = '';

                console.log(data.total_results,' El valor de data ');

                if (data.total_results != 0) {
                    data.results.forEach(pelicula => {

                        if (pelicula.poster_path != null) {
                            html +=
                                `<figure class='pelicula contenedor'>
                            <a href='pelicula.html' target='_blank'><img class='imagen' src='${URL_IMAGE}${pelicula.poster_path}'></a>
                            <figcaption>${pelicula.title}</figcaption>
                            <span>${JSON.stringify(pelicula)}</span>
                            </figure>`;
                        }
                    });
                }else{
                    html = `<h3>¡No ha habido suerte!<br></h3>`;
                }
                document.getElementById('listado').innerHTML = html;
                guardarPelicula();
            });
    }
    i = 1;
}

function guardarPelicula() {
    let peliculas = document.getElementsByClassName('pelicula');
    for (let pelicula of peliculas) {
        pelicula.addEventListener('click', guardarDatos);
    }

    function guardarDatos() {
        let peliculaJSON = this.getElementsByTagName('span');
        localStorage.setItem('datos', peliculaJSON[0].innerHTML);
    }
}