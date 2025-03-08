let amigos = [ ]; // Arreglo // almacena nombres de los amigos

function agregarAmigo() { //funcion agregar nombres 
  let nombreInput = document.getElementById("nombreAmigo");
  let nombre = nombreInput.value.trim(); // Elimina espacios en blanco al inicio y al final

  if (nombre === "") { // Si nombre es equivalente vacio envia la alerta
      alert("Por favor, ingresa un nombre válido.");
      return;
    }

  amigos.push(nombre); // Agrega nombre al arreglo
  nombreInput.value = ""; // Limpia el campo
    actualizarListaAmigos(); // funcion muestra la lista de amigos
    nombreInput.focus(); 

}

function actualizarListaAmigos() {
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = ""; // Limpia la lista antes de actualizarla

  for (let i = 0; i < amigos.length; i++) {
      const amigo = amigos[i]; 
      const elementoLista = document.createElement("li");
      elementoLista.textContent = amigo;
      listaAmigos.appendChild(elementoLista);
  }
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Debes ingresar al menos dos amigos para el sorteo.");
    return;
  }

let indiceAleatorio = Math.floor(Math.random() * amigos.length);
let amigoSecreto = amigos[indiceAleatorio];
//alert("El amigo secreto sorteado es: " + amigoSecreto);
listaAmigos.innerHTML = ""; //Limpia Lista
document.getElementById("resultado").textContent = "El amigo secreto sorteado es: " + amigoSecreto;

}

//El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
