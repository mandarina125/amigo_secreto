// Array global que almacena los nombres de los amigos
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }


    amigos.push(nombre);

    
    input.value = "";

    
    renderizarLista();
}


function renderizarLista() {
    const lista = document.getElementById("listaAmigos");
    
    // Limpiar la lista
    lista.innerHTML = "";

    // Recorrer el array y agregar cada nombre como <li>
    amigos.forEach(amigo => {
        lista.innerHTML += `<li>${amigo}</li>`;
    });
}
function sortearAmigo() {
    // Verificar que el array 'amigos' no esté vacío
    if (amigos.length === 0) {
        alert("No hay amigos disponibles para sortear.");
        return;
    }

    // Generar un índice aleatorio entre 0 y la longitud del array - 1
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado usando el índice aleatorio
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en el elemento con id "resultado"
    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = `<li>El amigo secreto es: ${amigoSorteado}</li>`;
}
