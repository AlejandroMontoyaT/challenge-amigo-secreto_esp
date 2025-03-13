// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
// Aquí deberás desarrollar la lógica para resolver el problema.
let amigos =[];

// funcion para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.ariaValueMax.trim();


//Valida que el campo no este vacio
    if (nombre === "") {
        alert("Debes ingresar un nombre");
        return;// detiene la ejecucion de la funcion
    }

//Validar que el nombre no este duplicado
    if (amigos.includes(nombreAmigo)) {
        alert(`El nombre ${nombreAmigo} ya esta en la lista`);
        return;
    }

//agregar el nombre al array de amigos
    amigos.push(nombreAmigo);

//limpiar el campo de entrada
    inputAmigo.ariavalue = '';

// Actualizar la lista de amigos en el html
    actualizarLista();
}
//Funcion para actualizar la lista de amigos en la interfaz
function actualizarLista(){
const listaAmigos = document.getElementById('listaAmigos');

//limpiar el contenido actual de la lista
listaAmigos.innerHTML = ''; /// borra cualquier contenido previo dentro de contenedor de la lista

    //Recorre el array
    for(let i = 0 ; i < amigos.length; i++){
        //Crear un elemento de lista para cada amigo
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

//funcion para seleccionar un amigo aleatorio de la lista
function sortearAmigo(){
    //Validar que haya amigos disponibles
    if (amigos.length===0){ //comprueba si el array 'amigo ' esta vacio
        alert("No hay amigos disponibles en la lista para sortear");
        return;
    }

    //Genera un indice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length); //genera un numero aleatorio entre 0 y la cantidad de amigos en la lista

    //optener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio]; // usa el indice aleatrio para optener el nombre del amigo sorteado

    // Mostrar el resultado en el html
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo Sorteado: <strong>${amigoSorteado}</strong>`;

}