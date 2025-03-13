// Inicializa un array vacío para almacenar la lista de amigos
let listaDeAmigos =[];
// Inicializa una variable para almacenar el índice del amigo sorteado
let indice = 0;
// Define una función para agregar un amigo a la lista
let agregarAmigo =() => {
    // Verifica si el campo de entrada está vacío
    if (document.getElementById('amigo').vale === "") {
        // Muestra una alerta si el campo está vacío
        alert("El campo esta vacio, por favor inserte un nombre");
    }else {
        // Obtiene el valor del campo de entrada
        let nuevoAmigo = document.getElementById('amigo').value;
        // Imprime el nuevo amigo en la consola
        console.log(nuevoAmigo);
        // Agrega el nuevo amigo al array de amigos
        listaDeAmigos.push(nuevoAmigo);
        // Imprime la lista de amigos actualizada en la consola
        console.log(listaDeAmigos);
        // Limpia el campo de entrada
        limpiarPlaceholder();
        // Crea una cadena de elementos HTML para cada amigo en la lista
        const elementosHTML = listaDeAmigos.map(amigos => `<li>${amigos}</li>`).join('');
        // Asigna la cadena de elementos HTML al elemento de la lista en el DOM
        asignarTextoElemento('listaAmigos', elementosHTML);
    }
}
// Define una función para sortear un amigo de la lista
let sortearAmigo = () =>{
    // Verifica si la lista de amigos está vacía
    if (listaDeAmigos.length === 0){
        // Muestra una alerta si no hay amigos en la lista
        alert ('no hay nombres agregados');
//verifica si la longitud del array `listaDeAmigos` es igual a 1. Si es así, ejecuta el bloque de código correspondiente. Esto se utiliza para manejar el caso específico en el que solo hay un amigo en la lista.
    }else if (listaDeAmigos.length === 1){
        // Imprime el único amigo en la lista en la consola
        console.log(listaDeAmigos[0]);
    }else{
        // Genera un índice aleatorio basado en la longitud de la lista de amigos
        indice = Math.floor(Math.random() * listaDeAmigos.length);
        // Imprime el índice aleatorio en la consola
        console.log(indice);
        // Imprime el amigo sorteado en la consola
        console.log(listaDeAmigos[indice]);
    }
}
// Define una función para asignar texto a un elemento del DOM
function asignarTextoElemento(elemento,texto){
    // Selecciona el elemento del DOM usando un selector CSS
    let elementoHTML = document.querySelector(elemento);
    // Asigna el texto al contenido HTML del elemento
    elementoHTML.innerHTML = texto;
}

// Define una función para limpiar el campo de entrada
let limpiarPlaceholder = () =>{
    // Establece el valor del campo de entrada a una cadena vacía
    document.getElementById('#amigo').value = '';
}


