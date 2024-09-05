// creun array con las categorías de las fotos
let categories = [
    { gallery: 'bebidas', category: ['Cafe', 'Infusiones', 'Alcohol'] },
    { gallery: 'postres', category: ['Fruta', 'Tartas'] },
    { gallery: 'entrantes', category: ['Entrantes'] }];

//** SELECCIONO LAS VARIABLES QUE NECESITO AL INICIO DE LA PÁGINA ** //

let titleH1 = document.getElementsByTagName("h1")[0];
let trElement = document.getElementsByTagName('tr')[1];
let images = document.getElementsByTagName("img");

// declaro el indice actual y le asigno el 0
let indexCurrent = 0;

// Selecciono los botones anterior y siguiente
let previousButton = document.getElementById('anterior');
let nextButton = document.getElementById('siguiente');

// Carga el menú de inicio
function menu() {
    deleteTd();
    titleH1.innerHTML = categories[indexCurrent].gallery.toUpperCase();
    let tdElement = document.createElement('td');
    trElement.appendChild(tdElement);
    // creo las imágenes de las 3 categorías seleccionada,implemento un evento para que al seleccionar una imagen se muestren todas las imágenes de esa categoría 
    for (let i = 0; i < categories[indexCurrent].category.length; i++) {
        let categoryTitleH1titleH1 = document.createElement("h1");
        categoryTitleH1titleH1.textContent = categories[indexCurrent].category[i];
        categoryTitleH1titleH1.setAttribute("style", "background-Image:url('src/" + categories[indexCurrent].category[i] + "/1.jpg'); width:33%; height:300px; color:white; display:inline-block");
        //td.appendChild(categoryTitleH1titleH1);
        categoryTitleH1titleH1.addEventListener('click', () => categoryMenu(categories[indexCurrent].category[i]));
    }
}

// creo el menú de imágenes para cada categoría e implemento un click en cada imagen para ampliarla
function categoryMenu(category) {
    deleteTd();
    let tdElement = document.createElement('td');
    trElement.appendChild(td);
    for (let i = 1; i <= 5; i++) {
        let img = document.createElement("img");
        img.style.display = 'inline-block';
        img.style.width = '20%';
        img.src = `src/${category}/${i}.jpg`;
        tdElement.appendChild(img);
        img.addEventListener('click', () => addImage(category, i));
    }
}

//Muestra la imagen ampliada e implementa un click para volver a la galería anterior
function addImage(category, index) {
    deleteTd();
    let tdElement = document.createElement('td');
    trElement.appendChild(td);
    let imgSelect = document.createElement('img');
    imgSelect.src = `src/${category}/${index}.jpg`;
    tdElement.appendChild(imgSelect);
    imgSelect.addEventListener('click', () => categoryMenu(category));
};

// función que borra el td que voy a modificar
function deleteTd() {
    let tdElement = document.getElementsByTagName('td')[2];
    tdElement.remove();
}

// función que obtiene el índice de la categoría actual en el carrusel 'siguiente'
function next() {
    (indexCurrent < categories.length - 1) ? indexCurrent = indexCurrent + 1 : indexCurrent = 0;
    return menu();
}

// función que obtiene el índice de la categoría actual en el carrusel 'anterior'
function previous() {
    (indexCurrent > 0) ? indexCurrent = indexCurrent - 1 : indexCurrent = categories.length - 1;
    return menu();
}

menu();
titleH1.addEventListener('click', menu);
nextButton.addEventListener('click', next);
previousButton.addEventListener('click', previous);

