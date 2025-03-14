# Proyecto Amigo Secreto

Este proyecto es una aplicación web para gestionar un sorteo de amigo secreto. Permite agregar nombres de amigos a una lista y seleccionar un amigo al azar.

## Estructura del Proyecto

El proyecto está compuesto por los siguientes archivos:

- `index.html`: Contiene la estructura HTML de la aplicación.
- `style.css`: Contiene los estilos CSS para la aplicación.
- `amigo.js`: Contiene la lógica en JavaScript para agregar amigos y sortear un amigo al azar.

## Funcionalidades

### Agregar Amigo

Permite agregar un nombre a la lista de amigos. Si el campo de entrada está vacío o el nombre ya está en la lista, muestra una alerta.

### Sortear Amigo

Selecciona un amigo al azar de la lista y muestra el resultado en la interfaz.

## Estructura del Código

### `amigo.js`

- `listaDeAmigos`: Array para almacenar la lista de amigos.
- `indice`: Variable para almacenar el índice del amigo sorteado.
- `agregarAmigo()`: Función para agregar un amigo a la lista.
- `sortearAmigo()`: Función para sortear un amigo de la lista.
- `asignarTextoElemento(elemento, texto)`: Función para asignar texto a un elemento del DOM.
- `limpiarPlaceholder()`: Función para limpiar el campo de entrada.

## Uso

1. Abre `index.html` en un navegador web.
2. Ingresa nombres de amigos en el campo de entrada y haz clic en "Añadir".
3. Haz clic en "Sortear amigo" para seleccionar un amigo al azar de la lista.

## Requisitos

- Navegador web moderno.
- Conexión a internet para cargar las fuentes de Google.

## Créditos

- Iconos y fuentes proporcionados por Google Fonts.
- Imagen representativa de amigo secreto.

## Licencia

Este proyecto está bajo la Licencia MPL Y GPL.
