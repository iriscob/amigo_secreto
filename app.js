let amigos = [ ]; 

function agregarAmigo() {
  let nombreInput = document.getElementById("nombreAmigo");
  let nombre = nombreInput.value.trim(); 
     
  if (nombre === "") { 
      alert("Por favor, ingresa un nombre válido.");
      return;
    }

   if (amigos.includes(nombre)) { 
      alert("Este nombre ya fue ingresado.");
      return;
    }

  amigos.push(nombre); 
  nombreInput.value = ""; 
  actualizarListaAmigos();
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
  listarAmigos.innerHTML = ""; 

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
      botonEliminar.classList.add("eliminar-amigo"); 
      botonEliminar.onclick = function() {
          eliminarAmigo(i); 
      };

      elementoLista.appendChild(botonEliminar);
      listaAmigos.appendChild(elementoLista);
  }
}


function eliminarAmigo(indice) {
  amigos.splice(indice, 1); 
  actualizarListaAmigos(); 
}


function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Ingresar al menos dos nombre de amigos para el sorteo.");
    return;
  }

let indiceAleatorio = Math.floor(Math.random() * amigos.length);
let amigoSecreto = amigos[indiceAleatorio];
//alert("El amigo secreto sorteado es: " + amigoSecreto);
listaAmigos.innerHTML = ""; 
document.getElementById("resultado").textContent = "El amigo secreto sorteado es: " + amigoSecreto;

}

function reiniciarSorteo() {
  amigos = []; 
  const listaResultados = document.getElementById("resultado");
  listaResultados.innerHTML = ""; 
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = ""; 
  document.getElementById("nombreAmigo").value = ""; 
  document.getElementById("nombreAmigo").focus(); 
}


//El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
