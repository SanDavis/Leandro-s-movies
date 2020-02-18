window.onload = iniciar;

const URL_IMAGE = 'https://image.tmdb.org/t/p/w500';

function iniciar() {
    cargarPelicula();
}

function cargarPelicula() {
    let pelicula = JSON.parse(localStorage.getItem('datos'));

    document.getElementById('titulo').textContent = pelicula['title'];
    document.getElementById('valoracion').textContent = pelicula['popularity'];
    document.getElementById('descripcion').textContent = pelicula['overview'];
    document.getElementById('fecha').textContent = pelicula['release_date'];
    document.getElementById('poster').src = `${URL_IMAGE + pelicula['poster_path']}`;
    if (pelicula['backdrop_path']) {
        document.getElementById('fondo').src = `${URL_IMAGE + pelicula['backdrop_path']}`;
    }


}