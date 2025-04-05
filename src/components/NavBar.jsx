import { NavLink } from "react-router-dom";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";

export const NavBar = ({ isOpen = false }) => {
  return (
    <>
      {/* Barra superior (logo + buscador + usuario) */}
      <div className="bg-white shadow-sm py-2 px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold text-cyan-600">
          Hondutienda
        </NavLink>

        {/* Buscador (solo en desktop) */}
        <div className="hidden md:flex flex-1 max-w-md mx-6">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Buscar productos..."
              className="w-full py-2 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
            <FiSearch className="absolute right-3 top-2.5 text-gray-400" />
          </div>
        </div>

        {/* Iconos de usuario/carrito */}
        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-600 hover:text-cyan-600 transition-colors">
            <FiUser className="text-xl" />
          </button>
          <NavLink 
            to="/carrito" 
            className="relative p-2 text-gray-600 hover:text-cyan-600 transition-colors"
          >
            <FiShoppingCart className="text-xl" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              3
            </span>
          </NavLink>
          <HamburgerBtn 
            onClickHandler={() => {}} 
            isOpen={isOpen} 
            className="md:hidden" 
          />
        </div>
      </div>

      {/* Barra de navegación principal */}
      <nav className={`bg-white shadow-md ${isOpen ? "block" : "hidden md:block"}`}>
        <div className="container mx-auto px-4">
          <ul className="flex flex-col md:flex-row gap-1 md:gap-6">
            <li>
              <NavLink 
                to="/tienda" 
                className={({ isActive }) => 
                  `block py-3 px-4 font-medium transition-colors
                  ${isActive ? 'text-cyan-600 border-b-2 border-cyan-600' : 'text-gray-700 hover:text-cyan-500'}`
                }
              >
                Nuestros Productos
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about-me" 
                className={({ isActive }) => 
                  `block py-3 px-4 font-medium transition-colors
                  ${isActive ? 'text-cyan-600 border-b-2 border-cyan-600' : 'text-gray-700 hover:text-cyan-500'}`
                }
              >
                ¿Quiénes Somos?
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/pagos" 
                className={({ isActive }) => 
                  `block py-3 px-4 font-medium transition-colors
                  ${isActive ? 'text-cyan-600 border-b-2 border-cyan-600' : 'text-gray-700 hover:text-cyan-500'}`
                }
              >
                Pagos y Envíos
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export const HamburgerBtn = ({ onClickHandler = () => {}, isOpen = false, className = "" }) => {
  return (
    <button
      className={`flex flex-col justify-center items-center w-10 h-10 focus:outline-none ${className}`}
      onClick={onClickHandler}
      aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
    >
      <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 transform ${isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'}`}></span>
      <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 my-1.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
      <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 transform ${isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'}`}></span>
    </button>
  );
};