

export default function eventoClic(refCarrito, nombre, precio, img, id,actualizador) {
    refCarrito.push({
        nombre,
        precio,
        img,
        id
    })
    
    actualizador(refCarrito)
}
