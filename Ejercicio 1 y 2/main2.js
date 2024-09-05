// selecciono el div que irá antes del footer
let divSeries = document.getElementsByClassName('series')[0];

// creo un array con los atributos de todos los inputs que necesito para el formulario
let attributes = [
    [{ type: 'class', name: 'input' }, { type: 'placeholder', name: 'Nombre' }, { type: 'type', name: 'text' }, { type: 'name', name: 'name' }],
    [{ type: 'class', name: 'input' }, { type: 'placeholder', name: 'Primer Apellido' }, { type: 'type', name: 'text' }, { type: 'name', name: 'first-surname' }],
    [{ type: 'class', name: 'input' }, { type: 'placeholder', name: 'Segundo Apellido' }, { type: 'type', name: 'text' }, { type: 'name', name: 'second-surname' }],
    [{ type: 'class', name: 'input' }, { type: 'placeholder', name: 'Numero de telefono' }, { type: 'type', name: 'text' }, { type: 'name', name: 'telephone-number' }],
    [{ type: 'class', name: 'send' }, { type: 'placeholder', name: 'Enviar' }, { type: 'type', name: 'submit' }, { type: 'name', name: 'send' }]];

// función para crear el footer, retorna la función que crea el div de la clase modal

function createContact(){
    let contact = document.createElement('h1');
    contact.textContent = 'Contacto';
    return contact;
}

function createFooter() {
    let footerDiv = document.createElement('footer');
    footerDiv.className = 'header';
    let contact=createContact();

    footerDiv.appendChild(contact);
    divSeries.insertAdjacentElement('afterend', footerDiv);
    return createDivModal();
} 

/* function createFooter() {
    let footerDiv = document.createElement('footer');
    footerDiv.className = 'header';
    divSeries.insertAdjacentElement('afterend', footerDiv);

    let contact = document.createElement('h1');
    contact.textContent = 'Contacto';
    footerDiv.appendChild(contact);

    return createDivModal();
} */

// función para crear el div para la pantalla modal, retorna la función que crea el formulario
function createDivModal() {
    let divModal = document.createElement('div');
    divModal.className = 'modal';
    divSeries.appendChild(divModal);

    let divModalContent = document.createElement('div');
    divModalContent.className = 'modal-content';
    divModal.appendChild(divModalContent);

    return createForm();
}

// función que crea los inputs
function createInput(attributes) {
    let input = document.createElement('input');
    for (let i = 0; i < attributes.length; i++) {
        input.setAttribute(attributes[i].type, attributes[i].name);
    }
    return input;
}

// función que crea los div que contienen los inputs
function createDiv(attributes) {
    let div = document.createElement('div');
    for (let i = 0; i < attributes.length; i++) {
        let input = createInput(attributes[i]);
        div.appendChild(input);
    };
    return div;
}

// función que crea el formulario que contiene los divs, el botón submit y el botón que cierra la pantalla modal
function createForm() {
    let form = document.createElement('form');
    form.method = 'post';
    for (let i = 0; i <= 2; i += 2) {
        form.appendChild(createDiv([attributes[i], attributes[i + 1]]));
    }

    let submit = createInput(attributes[4]);
    form.appendChild(submit);

    let divSpan = document.createElement('span');
    divSpan.className = 'close-button';
    divSpan.textContent = 'x';
    form.insertAdjacentElement('afterbegin', divSpan);

    let divModalContent = document.getElementsByClassName('modal-content')[0];
    divModalContent.appendChild(form);
}

// función que valida los textos introducidos en el formulario
function validateString(name, value, num) {
    let element = document.getElementsByName(name)[num].value;
    if (element === '' || !isNaN(element)) {
        document.getElementsByName(name)[num].value = '';
        return alert(`Por favor, introduce un ${value} correcto.`);
    }
    else {
        return true;
    }
};

// función que valida el número de teléfono introducido en el formulario
function validatePhoneNumber() {
    let element = document.getElementsByName('telephone-number')[0].value;
    if (!isNaN(element) && element.length == 9) {
        return true
    }
    else {
        document.getElementsByName('telephone-number')[0].value = '';
        return alert("Introduce un numero de telefono valido");
    }
}

// función que valida el formulario, si los datos son correctos cierra la pantalla modal
function testForm(event) {
    event.preventDefault();
    let names = [{ name: 'name', value: 'nombre' }, { name: 'first-surname', value: 'primer apellido' }, { name: 'second-surname', value: 'segundo apellido' }];
    let test = true;
    for (let i = 0; i < names.length; i++) {
        let check = validateString(names[i].name, names[i].value, 0);
        if (check === undefined) {
            test = false;
        }
    }
    let telephone = validatePhoneNumber();

    if (telephone !== undefined && test === true) {
        form.reset();
        return closeModal();
    }
}

// función que esconde la pantalla modal
function closeModal() {
    modal.className = 'modal';
}

// función que muestra la pantalla modal
function showModal() {
    modal.className = 'modal show-modal';
}

// creo el footer
createFooter();
// selecciono el div de clase modal
let modal = document.getElementsByClassName('modal')[0];
// selecciono el footer
let contact = document.getElementsByTagName('h1')[2];
// creo un evento click para la inscripción contacto, al clickar mostrará el formulario
contact.addEventListener('click', () => showModal());
// creo un evento para el botón close buton, al clickar cerrará el formulario
document.getElementsByClassName('close-button')[0].addEventListener('click', closeModal);
// selecciono el formulario
let form = document.getElementsByTagName('form')[0];
// creo un evento para el botón enviar del formulario, al clickar valida los datos enviados a través del formualario
form.addEventListener("submit", (event) => testForm(event));