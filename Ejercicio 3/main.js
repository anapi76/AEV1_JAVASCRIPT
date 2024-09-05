// creun array con las categorías de las fotos
let categories = [
    { gallery: 'bebidas', category: ['Cafe', 'Infusiones', 'Alcohol'] },
    { gallery: 'postres', category: ['Fruta', 'Tartas'] },
    { gallery: 'entrantes', category: ['Entrantes'] }];

//** SELECCIONO LAS VARIABLES QUE NECESITO AL INICIO DE LA PÁGINA ** //

let title = document.getElementsByTagName("h1")[0];
let tr = document.getElementsByTagName('tr')[1];
let images = document.getElementsByTagName("img");

// declaro el indice actual y le asigno el 0
let current = 0;

// botón anterior
let previousButton = document.getElementById('anterior');
// botón siguiente
let nextButton = document.getElementById('siguiente');

// Carga el menú de inicio
function startMenu() {
    deleteTd();
    title.innerHTML = categories[current].gallery.toUpperCase();
    let td = document.createElement('td');
    tr.appendChild(td);
    // creo las imágenes de las 3 categorías seleccionada,implemento un evento para que al seleccionar una imagen se muestren todas las imágenes de esa categoría 
    for (let i = 0; i < categories[current].category.length; i++) {
        let categoryTitle = document.createElement("h1");
        categoryTitle.textContent = categories[current].category[i];
        categoryTitle.setAttribute("style", "background-Image:url('src/" + categories[current].category[i] + "/1.jpg'); width:33%; height:300px; color:white; display:inline-block");
        td.appendChild(categoryTitle);
        categoryTitle.addEventListener('click', () => categoryMenu(categories[current].category[i]));
    }
}

// creo el menú de imágenes para cada categoría e implemento un click en cada imagen para ampliarla
function categoryMenu(category) {
    deleteTd();
    let td = document.createElement('td');
    tr.appendChild(td);
    for (let i = 1; i <= 5; i++) {
        let img = document.createElement("img");
        img.style.display = 'inline-block';
        img.style.width = '20%';
        img.src = `src/${category}/${i}.jpg`;
        td.appendChild(img);
        img.addEventListener('click', () => addImage(category, i));
    }
}

//Muestra la imagen ampliada e implementa un click para volver a la galería anterior
function addImage(category, index) {
    deleteTd();
    let td = document.createElement('td');
    tr.appendChild(td);
    let imgSelect = document.createElement('img');
    imgSelect.src = `src/${category}/${index}.jpg`;
    td.appendChild(imgSelect);
    imgSelect.addEventListener('click', () => categoryMenu(category));
};

// función que borra el td que voy a modificar
function deleteTd() {
    let td = document.getElementsByTagName('td')[2];
    td.remove();
}

// función que obtiene el índice de la categoría actual en el carrusel 'siguiente'
function next() {
    (current < categories.length - 1) ? current = current + 1 : current = 0;
    return startMenu();
}

// función que obtiene el índice de la categoría actual en el carrusel 'anterior'
function previous() {
    (current > 0) ? current = current - 1 : current = categories.length - 1;
    return startMenu();
}

startMenu();
title.addEventListener('click', startMenu);
nextButton.addEventListener('click', next);
previousButton.addEventListener('click', previous);

