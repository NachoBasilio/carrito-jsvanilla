import cardCarrito from "../componentes/cardCarrito";



export default function eventoActualizador(array, nodo) {
    nodo.innerText = ""
    array.map((figura)=>{
        const nodoAux = cardCarrito(figura, array, nodo)
        nodo.appendChild(nodoAux)
    })
}