

export default function eventoActualizador(array, nodo) {
    nodo.innerText = ""
    array.map(pokemon =>{        
        const contenedor = document.createElement("div")
        const nombreNodo = document.createElement("h3")
        const precioNodo = document.createElement("p")
        const imagenNodo = document.createElement("img")
        nombreNodo.innerText = pokemon.nombre
        precioNodo.innerText = pokemon.precio
        imagenNodo.src = pokemon.img

        contenedor.appendChild(nombreNodo)
        contenedor.appendChild(precioNodo)
        contenedor.appendChild(imagenNodo)
        
       

        nodo.appendChild(contenedor)
    })
}
