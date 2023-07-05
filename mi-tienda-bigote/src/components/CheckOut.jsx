import React from 'react'
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useState } from 'react';


const CheckOut = () => {

    const [pedidoId, setPedidoId] = useState("")

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }

        const pedidoRef = collection(db, "pedidos");
        addDoc(pedidoRef, pedido)
            .then((doc) => {
            setPedidoId(doc.id);
            vaciarCarrito();

        })

    }

    if(pedidoId) {
        return(
            <div className='container'>
                <h1 className='main-title'>Los michis te agradeces por tu compra! </h1>
                <p>Tu numero de pedido es: {pedidoId}</p>
            </div>
        )
    }

return (
    <div className='forms'>
        <h1 className='main-title'>Finalizar Compra</h1>
        <form className='formulario' onSubmit={handleSubmit(comprar)}>

            <input text="text" placeholder="Ingresa tu nombre" {...register("nombre")} />
            <input text="email" placeholder="Ingresa tu correo" {...register("email")} />
            <input text="phone" placeholder="Ingresa tu numero" {...register("telefonos")} />

            <button className='comprar' type='submit'>Comprar</button>

        </form>
    </div>
)


}

export default CheckOut