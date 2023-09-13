

export default function eventoClic(refCarrito, nombre, precio, img, actualizador) {
    refCarrito.push({
        nombre,
        precio,
        img
    })
    
    actualizador(refCarrito)
}
