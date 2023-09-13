
export default function card(nombre, precio, imagen, tipo, stock, generacion) {
    const nombreNodo = document.createElement("h3")
    const precioNodo = document.createElement("p")
    const imagenNodo = document.createElement("img")
    const tipoNodo = document.createElement("p")
    const stockNodo = document.createElement("p")
    const generacionNodo = document.createElement("p")
    const contenedor = document.createElement("div")

    nombreNodo.innerText = nombre
    precioNodo.innerText = "$ "+precio
    imagenNodo.src = imagen
    tipoNodo.innerText = tipo
    stockNodo.innerText = stock
    generacionNodo.innerText = generacion


    const boton = document.createElement("button")
    boton.innerText = "Comprar"

    contenedor.appendChild(nombreNodo)
    contenedor.appendChild(precioNodo)
    contenedor.appendChild(imagenNodo)
    contenedor.appendChild(tipoNodo)
    contenedor.appendChild(stockNodo)
    contenedor.appendChild(generacionNodo)
    contenedor.appendChild(boton)


    return contenedor
}
