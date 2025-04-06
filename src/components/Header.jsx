import { NavLink } from 'react-router-dom';
import { FiSearch, FiShoppingCart, FiUser, FiHeart } from 'react-icons/fi';

export const Header = () => {
  return (
    <header className="w-full shadow-md z-50 bg-white">
      {/* Main Header Top */}
      <div className="bg-white px-4 sm:px-6 lg:px-8 py-4 flex flex-col lg:flex-row items-center justify-between gap-4 max-w-7xl mx-auto">
        {/* Logo + Search */}
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 w-full lg:w-auto">
          <NavLink 
            to="/" 
            className="text-blue-600 text-2xl sm:text-3xl font-bold hover:scale-105 transition-transform flex-shrink-0"
          >
            PokeStore
          </NavLink>

          <div className="flex bg-gray-100 rounded-full overflow-hidden shadow-sm w-full lg:w-[400px] h-12">
            <input
              type="text"
              placeholder="Buscar productos..."
              className="px-4 py-2 w-full text-gray-700 focus:outline-none placeholder-gray-400 bg-transparent"
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-5 flex items-center justify-center transition-colors flex-shrink-0">
              <FiSearch className="text-white text-xl" />
            </button>
          </div>
        </div>

        {/* User + Cart */}
        <div className="flex items-center gap-4 sm:gap-6 text-gray-700 flex-shrink-0">
          <NavLink 
            to="/cuenta" 
            className="flex items-center gap-2 group min-w-[70px] sm:min-w-0"
          >
            <div className="relative p-2 rounded-full group-hover:bg-gray-100 transition-colors">
              <FiUser className="text-xl group-hover:text-blue-600 transition-colors" />
            </div>
            <span className="nav-link-responsive">Cuenta</span>
          </NavLink>

          <NavLink 
            to="/favoritos" 
            className="flex items-center gap-2 group min-w-[90px] sm:min-w-0"
          >
            <div className="relative p-2 rounded-full group-hover:bg-gray-100 transition-colors">
              <FiHeart className="text-xl group-hover:text-blue-600 transition-colors" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-xs text-white font-bold w-5 h-5 rounded-full flex items-center justify-center">
                2
              </span>
            </div>
            <span className="nav-link-responsive">Favoritos</span>
          </NavLink>

          <NavLink 
            to="/carrito" 
            className="flex items-center gap-2 group min-w-[80px] sm:min-w-0"
          >
            <div className="relative p-2 rounded-full group-hover:bg-gray-100 transition-colors">
              <FiShoppingCart className="text-xl group-hover:text-blue-600 transition-colors" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-xs text-white font-bold w-5 h-5 rounded-full flex items-center justify-center">
                3
              </span>
            </div>
            <span className="nav-link-responsive">Carrito</span>
          </NavLink>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="w-full flex justify-center bg-white border-t border-gray-100">
        <nav className="w-full max-w-7xl flex items-center py-3 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center w-full">
            <div className="bg-blue-50 rounded-md px-4 py-1 group hover:bg-blue-100 hover:shadow-md transform hover:scale-[1.02] transition-all duration-300 animate-fade-in w-full">
              <ul className="flex items-center justify-between w-full">
                {[
                  { to: '/', label: 'Inicio' },
                  { to: '/tienda', label: 'Tienda' },
                  { to: '/about-me', label: 'Acerca de mí' },
                  { to: '/pagos', label: 'Pagos' }
                ].map(({ to, label }) => (
                  <li key={to} className="flex-1 text-center">
                    <NavLink
                      to={to}
                      className={({ isActive }) =>
                        `group flex items-center justify-center px-3 py-1 text-sm font-medium w-full ${
                          isActive
                            ? 'text-blue-600'
                            : 'text-gray-700 group-hover:text-blue-600'
                        } transition-all duration-200 relative transform group-hover:-translate-y-0.5`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          {label}
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