import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import {FaSquareInstagram} from "react-icons/fa6";

export const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-columns">
                <div>
                    <h2 className="footer-title">
                        ¿Quienes somos?
                    </h2>
                    <p className="text-gray-300">
                        Somos Hondutienda!
                        Nuestra tienda nacio en el verano del 2020.
                        Siempre hemos querido que lo nuestro esta a tu alcance!
                    </p>
                </div>
                <div>
                    <h2 className="footer-title">
                        Menu
                    </h2>
                    <ul>
                        <li><a href="#" className="footer-link">Inicio</a></li>
                        <li><a href="#" className="footer-link">Tienda</a></li>
                        <li><a href="#" className="footer-link">¿Quienes Somos?</a></li>
                        <li><a href="#" className="footer-link">Carrito</a></li>
                        <li><a href="#" className="footer-link">Pagos</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="footer-title">
                        Categoria Productos
                    </h2>
                    <ul>
                        <li><a href="#" className="footer-link">Ropa</a></li>
                        <li><a href="#" className="footer-link">Galletas</a></li>
                        <li><a href="#" className="footer-link">Cereales</a></li>
                        <li><a href="#" className="footer-link">Churros</a></li>
                        <li><a href="#" className="footer-link">Bebidas</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="footer-title">
                        ¡Siquenos en nuestras redes!
                    </h2>
                    <ul className="flex space-x-4">
                        <li><FaSquareFacebook className="footer-social-icon"/><a href="#" className="footer-social-link">Facebook</a></li>
                        <li><FaSquareTwitter className="footer-social-icon"/><a href="#" className="footer-social-link">Twitter</a></li>
                        <li><FaSquareInstagram className="footer-social-icon" /><a href="#" className="footer-social-link">Instagram</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-copyright">
                <p> &copy; 2025, Todos los Derechos Reservados</p>
            </div>
        </footer>
    )
}