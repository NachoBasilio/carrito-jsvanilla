import eventoEliminador from "../helper/eventoEliminador"

export default function cardCarrito(figura, array, nodo) {  
    const contenedor = document.createElement("div")
    const nombreNodo = document.createElement("h3")
    const precioNodo = document.createElement("p")
    const imagenNodo = document.createElement("img")
    nombreNodo.innerText = figura.nombre
    precioNodo.innerText = figura.precio
    imagenNodo.src = figura.img

    const boton = document.createElement("button")
    boton.innerText = "Eliminar"
    boton.addEventListener("click", ()=>{eventoEliminador(array, figura.id, nodo)})

    contenedor.appendChild(nombreNodo)
    contenedor.appendChild(precioNodo)
    contenedor.appendChild(imagenNodo)
    contenedor.appendChild(boton)

    return contenedor
}