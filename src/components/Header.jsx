import { NavLink } from 'react-router-dom';
import { FiSearch, FiShoppingCart, FiUser, FiHeart } from 'react-icons/fi';

export const Header = () => {
  return (
    <header className="w-full shadow-md z-50 bg-white">
      {/* Main Header Top - Background Fixed */}
      <div className="bg-white px-4 sm:px-6 lg:px-8 py-5 flex flex-col lg:flex-row items-center justify-between gap-4 max-w-7xl mx-auto">
        {/* Logo + Search */}
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 w-full lg:w-auto">
          <NavLink 
            to="/" 
            className="text-blue-600 text-2xl sm:text-3xl font-bold hover:scale-105 transition-transform flex-shrink-0"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">PokeStore</span>
          </NavLink>

          <div className="flex rounded-full overflow-hidden shadow-lg border border-gray-200 w-full lg:w-[450px] h-12 group hover:shadow-xl transition-all duration-300">
            <input
              type="text"
              placeholder="Buscar productos..."
              className="px-5 py-3 w-full text-gray-700 focus:outline-none placeholder-gray-400 bg-white"
            />
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 px-6 flex items-center justify-center transition-colors flex-shrink-0 group-hover:shadow-inner">
              <FiSearch className="text-white text-xl" />
            </button>
          </div>
        </div>

        {/* User + Cart */}
        <div className="flex items-center gap-6 sm:gap-8 text-gray-700 flex-shrink-0">
          <NavLink 
            to="/cuenta" 
            className="flex items-center gap-2 group min-w-[70px] sm:min-w-0"
          >
            <div className="relative p-2 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors shadow-sm">
              <FiUser className="text-xl text-blue-500 group-hover:text-blue-600 transition-colors" />
            </div>
            <span className="text-gray-600 group-hover:text-blue-600 font-medium transition-colors">Cuenta</span>
          </NavLink>

          <NavLink 
            to="/favoritos" 
            className="flex items-center gap-2 group min-w-[90px] sm:min-w-0"
          >
            <div className="relative p-2 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors shadow-sm">
              <FiHeart className="text-xl text-blue-500 group-hover:text-blue-600 transition-colors" />
              <span className="absolute -top-1 -right-1 bg-gradient-to-br from-red-500 to-pink-500 text-xs text-white font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
                2
              </span>
            </div>
            <span className="text-gray-600 group-hover:text-blue-600 font-medium transition-colors">Favoritos</span>
          </NavLink>

          <NavLink 
            to="/carrito" 
            className="flex items-center gap-2 group min-w-[80px] sm:min-w-0"
          >
            <div className="relative p-2 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors shadow-sm">
              <FiShoppingCart className="text-xl text-blue-500 group-hover:text-blue-600 transition-colors" />
              <span className="absolute -top-1 -right-1 bg-gradient-to-br from-red-500 to-pink-500 text-xs text-white font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
                3
              </span>
            </div>
            <span className="text-gray-600 group-hover:text-blue-600 font-medium transition-colors">Carrito</span>
          </NavLink>
        </div>
      </div>

      {/* Navigation Bar - Enhanced Styling */}
      <div className="w-full bg-blue-50">
        <nav className="w-full max-w-7xl mx-auto flex items-center py-3 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center w-full">
            <div className="bg-blue-50 rounded-lg px-4 py-2 group hover:bg-blue-100 hover:shadow-md transform hover:scale-[1.02] transition-all duration-300 w-full">
              <ul className="flex items-center justify-between w-full">
                {[
                  { to: '/', label: 'Inicio' },
                  { to: '/tienda', label: 'Tienda' },
                  { to: '/about-me', label: '¿Quienes Somos?' },
                  { to: '/pagos', label: 'Pagos' }
                ].map(({ to, label }) => (
                  <li key={to} className="flex-1 text-center">
                    <NavLink
                      to={to}
                      className={({ isActive }) => `
                        group flex items-center justify-center px-3 py-1.5 
                        font-medium tracking-wide w-full
                        ${isActive ? 'text-blue-600' : 'text-gray-700 group-hover:text-blue-600'} 
                        transition-all duration-200 relative transform group-hover:-translate-y-0.5
                      `}
                    >
                      {({ isActive }) => (
                        <>
                          <span className="font-sans text-sm md:text-base">{label}</span>
                          {isActive && (
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></span>
                          )}
                        </>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};