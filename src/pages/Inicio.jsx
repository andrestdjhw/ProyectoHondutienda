import { useNavigate } from "react-router-dom";

export const Inicio = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full">
      {/* Hero principal */}
      <div className="bg-gradient-to-br from-blue-100 to-indigo-100 py-16 px-4 sm:px-8 flex flex-col lg:flex-row items-center justify-between gap-10 max-w-7xl mx-auto">
        <div className="flex-1">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight mb-4">
            ¡Bienvenido a <span className="text-blue-600">PokeStore</span>!
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Tu tienda favorita de artículos Pokémon, con envío rápido, precios increíbles y mucho más.
          </p>
          <button
            onClick={() => navigate("/tienda")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition-transform transform hover:scale-105"
          >
            Explorar Tienda
          </button>
        </div>
        <div className="flex-1">
          <img
            src="/img/pikachu-banner.png" // ¡Asegurate de tener esta imagen o poné otra!
            alt="Pikachu feliz"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>

      {/* Productos Destacados */}
      <div className="py-12 px-4 sm:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Destacados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl p-4 transition-transform hover:scale-[1.02]"
            >
              <img
                src={`/img/producto-${item}.png`} // Asegurate de tener las imágenes
                alt={`Producto ${item}`}
                className="w-full h-40 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">Producto Pokémon #{item}</h3>
              <p className="text-gray-600 text-sm mt-1">Descripción corta del producto.</p>
              <button
                onClick={() => navigate("/tienda")}
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white w-full py-2 rounded-md font-medium"
              >
                Ver Producto
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Beneficios */}
      <div className="bg-blue-50 py-12 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <h4 className="text-blue-600 font-bold text-xl mb-2">🚚 Envíos Rápidos</h4>
            <p className="text-gray-600">Entregas a todo el país en 48hs.</p>
          </div>
          <div>
            <h4 className="text-blue-600 font-bold text-xl mb-2">🛡️ Compra Segura</h4>
            <p className="text-gray-600">Pagos protegidos y garantía asegurada.</p>
          </div>
          <div>
            <h4 className="text-blue-600 font-bold text-xl mb-2">🎁 Productos Exclusivos</h4>
            <p className="text-gray-600">Merchandising oficial y edición limitada.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
