
import { useState } from "react";
import { Contacto } from "./components/Contacto";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import "./main.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartContext, CartProvider } from "./context/CartContext";
import Carrito from "./components/Carrito";

function App() {


    return (
        <div>
            <CartProvider>
                <BrowserRouter>
                    <Navbar />

                    <Routes>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route path="item/:id" element={<ItemDetailContainer />} />
                        <Route path="/productos" element={<ItemListContainer />} />
                        <Route path="productos/:categoria" element={<ItemListContainer />} />
                        <Route path="/contacto" element={<Contacto />} />
                        <Route path="/carrito" element={<Carrito />} />
                    </Routes>
                </BrowserRouter>
            </CartProvider>
        </div>
    );
}

export default App;