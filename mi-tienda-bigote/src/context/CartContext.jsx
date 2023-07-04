import { createContext, useEffect, useState } from "react";
import Carrito from "../components/Carrito";

export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState(carritoInicial);

    const adentroDelCarrito = (item, cantidad) => {

        const itemAgregado = { ...item, cantidad };

        const nuevoCarrito = [...carrito];
        const adentroDelCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);

        if (adentroDelCarrito) {
            adentroDelCarrito.cantidad += cantidad;
            setCarrito(nuevoCarrito);
        } else {
            nuevoCarrito.push(itemAgregado);
        }
        setCarrito(nuevoCarrito);
    }

    const cantidadEnCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    } 

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }, [carrito])
    

    return (
    <CartContext.Provider value={{ carrito, adentroDelCarrito, cantidadEnCarrito, precioTotal, vaciarCarrito }}>
        {children}
    </CartContext.Provider>)
}