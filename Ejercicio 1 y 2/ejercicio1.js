// creo un array con los datos de las series
let seriesList = [
    { title: 'Los Soprano', characters: [{ name: 'Tony Soprano', actor: 'James Gandolfini' }, { name: 'Carmela Soprano', actor: 'Edie Falco' }, { name: 'Anthony Soprano Jr', actor: 'Robert Iler' }], img: 'https://www.econlib.org/wp-content/uploads/2019/04/sopranos-1024x576.jpg' },
    { title: 'Friends', characters: [{ name: 'Rachel Green', actor: 'Jennifer Aniston' }, { name: 'Joey Triviani', actor: 'Matt LeBlanc' }, { name: 'Monica Geller', actor: 'Courtney Cox' }], img: 'https://media.gettyimages.com/id/138425601/es/foto/matthew-perry-as-chandler-bing-jennifer-aniston-as-rachel-green-david-schwimmer-as-ross-geller.jpg?s=1024x1024&w=gi&k=20&c=vfBn1dNMFeB28lgTpmdKC-LiPxwFQMZadjiSRFqS0cY=' },
    { title: 'The Big Bang Theory', characters: [{ name: 'Sheldon Cooper', actor: 'Jim Parson' }, { name: 'Penny', actor: 'Kaley Cuco' }, { name: 'Leonard Hofstadter', actor: 'Johnny Galecki' }], img: 'https://media.gettyimages.com/id/85321149/es/foto/the-terminator-decoupling-a-train-trip-to-san-francisco-takes-a-major-detour-when-koothrappali.jpg?s=1024x1024&w=gi&k=20&c=a7bzOJhjvhXg1G223t2PxkDNzHMPA3vfyRHG_qaT9sA=' }];

// Creo un array con los datos de las películas
let moviesList = [
    { title: 'Pulp Fiction', characters: [{ name: 'Vincent Vega', actor: 'John Travolta' }, { name: 'Mia Wallace', actor: 'Uma Thurman' }, { name: 'Jules Winnfield', actor: 'Samuel L. Jackson' }], img: 'https://www.elseptimoarte.net/carteles/pulp_fiction_16463.jpg' },
    { title: 'Mamma Mia', characters: [{ name: 'Donna Sheridan', actor: 'Meryl Streep' }, { name: 'Sophie', actor: 'Amanda SeyFried' }, { name: 'Sam Carmichael', actor: 'Pierce Brosnan' }], img: 'https://www.elseptimoarte.net/carteles/mamma_mia_57317.jpg' },
    { title: 'Titanic', characters: [{ name: 'Jack Dawson', actor: 'Leonardo Di Caprio' }, { name: 'Rose DeWitt Bukater', actor: 'Kate Winslet' }, { name: 'Molly Brown', actor: 'Kathy Bates' }], img: 'https://www.elseptimoarte.net/carteles/titanic_96622.jpg' }];

// selecciono los elementos del html que voy a modificar y los meto en una variable
let titleH1 = document.getElementsByClassName('cat')[0];
let img = document.getElementsByTagName('img')[0];
let char = document.getElementsByTagName('h2')[0];
let act = document.getElementsByTagName('h3')[0];

// Selecciono los botones de series y películas
let seriesButton = document.getElementsByClassName('nutrition')[0];
let moviesButton = document.getElementsByClassName('nutrition')[1];

// Selecciono los botones anterior y siguiente interior
let previousButtonIn = document.getElementsByTagName('a')[0];
let nextButtonIn = document.getElementsByTagName('a')[1];

// Selecciono los botones anterior y siguiente exterior
let previousButtonOut = document.getElementsByTagName('a')[2];
let nextButtonOut = document.getElementsByTagName('a')[3];

// Declaro las variables índice para los botones anterior y siguiente, y la lista que tiene que coger en cada interacción
let indexCurrentIn = 0;
let indexCurrentOut = 0;
let currentList = seriesList;

// función que modifica el html con la primera serie o película cuando clickamos el botón de series o películas 
function updateView() {
    titleH1.innerHTML = currentList[indexCurrentOut].title;
    img.src = currentList[indexCurrentOut].img;
    char.innerHTML = currentList[indexCurrentOut].characters[indexCurrentIn].name;
    act.innerHTML = currentList[indexCurrentOut].characters[indexCurrentIn].actor;
}

// Función para seleccionar las series
function selectSeries(list) {
    indexCurrentIn = 0;
    indexCurrentOut = 0;
    currentList = list;
    return updateView();
} 

// Función para seleccionar las películas
function selectMovies(list) {
    indexCurrentIn = 0;
    indexCurrentOut = 0;
    currentList = list;
    return updateView();
}

// Función para el botón anterior del carrusel exterior
function previousOut() {
    indexCurrentIn = 0;
    (indexCurrentOut > 0) ? indexCurrentOut = indexCurrentOut - 1 : indexCurrentOut = currentList.length - 1;
    return updateView();
}

// Función para el botón siguiente del carrusel exterior
function nextOut() {
    indexCurrentIn = 0;
    (indexCurrentOut < currentList.length - 1) ? indexCurrentOut = indexCurrentOut + 1 : indexCurrentOut = 0;
    return updateView();
}

// Función para el botón anterior del carrusel interior
function previousIn() {
    (indexCurrentIn > 0) ? indexCurrentIn = indexCurrentIn - 1 : indexCurrentIn = currentList.length - 1;
    return updateView();
}

// Función para el botón siguiente del carrusel interior
function nextIn() {
    (indexCurrentIn < currentList.length - 1) ? indexCurrentIn = indexCurrentIn + 1 : indexCurrentIn = 0;
    return updateView();
}

nextButtonIn.addEventListener('click', nextIn);
previousButtonIn.addEventListener('click', previousIn);
nextButtonOut.addEventListener('click', nextOut);
previousButtonOut.addEventListener('click', previousOut);
seriesButton.addEventListener('click', () => selectSeries(seriesList));
moviesButton.addEventListener('click', () => selectMovies(moviesList));

