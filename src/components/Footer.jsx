import React from "react";

export const Footer = () => {
    return (
        <footer className="bg-gray-800 px-4 md:px-16 lg:px-28">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h2 className="text-lg text-white font-bold md-4">
                        ¿Quienes somos?
                    </h2>
                    <p className="text-gray-300">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, minima dolorem!
                    </p>
                </div>
                <div>
                    <h2 className="text-lg text-white font-bold md-4">
                        Menu
                    </h2>
                    <ul>
                        <li><a href="#" className="hover:underline text-gray-300">Inicio</a></li>
                        <li><a href="#" className="hover:underline text-gray-300">Tienda</a></li>
                        <li><a href="#" className="hover:underline text-gray-300">¿Quienes Somos?</a></li>
                        <li><a href="#" className="hover:underline text-gray-300">Carrito</a></li>
                        <li><a href="#" className="hover:underline text-gray-300">Pagos</a></li>
                    </ul>
                </div>
                <div>
                <h2 className="text-lg text-white font-bold md-4">
                        Categoria Productos
                    </h2>
                    <ul>
                        <li><a href="#" className="hover:underline text-gray-300">Ropa</a></li>
                        <li><a href="#" className="hover:underline text-gray-300">Galletas</a></li>
                        <li><a href="#" className="hover:underline text-gray-300">Cereales</a></li>
                        <li><a href="#" className="hover:underline text-gray-300">Churros</a></li>
                        <li><a href="#" className="hover:underline text-gray-300">Bebidas</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}