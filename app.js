let amigos = [ ]; // Arreglo // almacena nombres de los amigos

function agregarAmigo() { //funcion agregar nombres 
     
  let nombreInput = document.getElementById("nombreAmigo");
  let nombre = nombreInput.value.trim(); // Elimina espacios en blanco al inicio y al final

  if (nombre === "") { // Si nombre es equivalente vacio envia la alerta
      alert("Por favor, ingresa un nombre válido.");
      return;
    }

   if (amigos.includes(nombre)) { // Si nombre esta en el arreglo
      alert("Este nombre ya fue ingresado.");
      return;
    }


  amigos.push(nombre); // Agrega nombre al arreglo
  nombreInput.value = ""; // Limpia el campo
  actualizarListaAmigos(); // funcion muestra la lista de amigos
  nombreInput.focus(); 

}

let nombreInput = document.getElementById("nombreAmigo");
nombreInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    agregarAmigo();
  }
});





function actualizarListaAmigos() {
  const listarAmigos = document.getElementById("listaAmigos");
  listarAmigos.innerHTML = ""; // Limpia la lista antes de actualizarla

  for (let i = 0; i < amigos.length; i++) {
      const amigo = amigos[i];
      const elementoLista = document.createElement("li");

      // span para el nombre
      const spanNombre = document.createElement("span");
      spanNombre.textContent = amigo;
      elementoLista.appendChild(spanNombre);

      // botón de eliminación
      const botonEliminar = document.createElement("button");
      botonEliminar.textContent = "Quitar(x)";
      botonEliminar.classList.add("eliminar-amigo"); // Agrega una clase para estilizar
      botonEliminar.onclick = function() {
          eliminarAmigo(i); // Llama a la función de eliminación
      };

      elementoLista.appendChild(botonEliminar);
      listaAmigos.appendChild(elementoLista);
  }
}


function eliminarAmigo(indice) {
  amigos.splice(indice, 1); // Elimina el amigo del array
  actualizarListaAmigos(); // Actualiza la lista en la página
}



function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Ingresar al menos dos nombre de amigos para el sorteo.");
    return;
  }

let indiceAleatorio = Math.floor(Math.random() * amigos.length);
let amigoSecreto = amigos[indiceAleatorio];
//alert("El amigo secreto sorteado es: " + amigoSecreto);
listaAmigos.innerHTML = ""; //Limpia Lista
document.getElementById("resultado").textContent = "El amigo secreto sorteado es: " + amigoSecreto;

}


function reiniciarSorteo() {
  amigos = []; // Restablece el arreglo
  const listaResultados = document.getElementById("resultado");
  listaResultados.innerHTML = ""; // Limpia resultados
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = ""; // Limpia la lista de amigos
  document.getElementById("nombreAmigo").value = ""; // Limpia el input
  document.getElementById("nombreAmigo").focus(); // Coloca el foco en el input
}






//El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
