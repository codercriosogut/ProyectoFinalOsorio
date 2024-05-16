import { createContext, useState } from "react";

export const contexto = createContext();
const Provider = contexto.Provider;


function CarritoProvider(props) {
    const [cantCarrito, setCantCarrito] = useState(0)
    const [precioTotal, setPrecioTotal] = useState(0)
    const [carrito, setCarrito] = useState([])
    const agregarAlCarrito = (cant, item) => {
        setCantCarrito(cantCarrito + cant)
        const copia = carrito.slice(0)
        const productoConCantidad = item
        productoConCantidad.cantidad = cant

        copia.push(productoConCantidad)
        setCarrito(copia)
    }
    const borrarDelCarrito = (id) => {
    }
    const vaciarCarrito = () => {       
        setCantCarrito(0)
        setCarrito([])
    }
    const estaEnCarrito = (id) => {
       
    }
    const valorActual = {
        carrito: carrito,
        cantCarrito: cantCarrito,
        precioTotal: precioTotal,
        agregarAlCarrito: agregarAlCarrito,
        borrarDelCarrito: borrarDelCarrito,
        vaciarCarrito: vaciarCarrito,
        estaEnCarrito: estaEnCarrito
    }
    return (
        <Provider value={valorActual}>
            {props.children}
        </Provider>
    )
}

export default CarritoProvider