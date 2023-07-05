import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }


    return (
        <div className='container'>
            <h1 className='main-title'>Carrito</h1>

            {
                carrito.map((prod) => (
                    <div className='compra-carrito' key={prod.id}>
                        <h3 className='prod'>{prod.titulo}</h3>
                        <p className='compra-final'>Precio Unidad: ${prod.precio}</p>
                        <p className='compra-final'>Precio Total: ${prod.precio * prod.cantidad}</p>
                        <p className='prod'>Cantidad: {prod.cantidad}</p>

                    </div>
                ))
            }

            {
                carrito.length > 0 ?

                    <>
                        <h2 className='total'>Total gastado: ${precioTotal()}</h2>
                        <button className='vaciar'  onClick={handleVaciar}>Limpiar Carrito</button>
                        <Link className="finalizar" to="/checkOut">Finalizar Compra</Link> 
                    </> :
                    <h2>Vacio</h2>

            }



        </div>
    )
}

export default Carrito