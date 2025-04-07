// src/pages/DashBoard.jsx
import { useState } from "react";
import { useNavigate } from "react-router";
import { useGetPokemons } from "../services/pokemonService";
import { PokemonList } from "../components/PokemonList/PokemonList";
import { Paging } from "../components/Paging/Paging";
import FilterPanel from "../components/FilterPanel";

export const DashBoard = () => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const navigate = useNavigate();

    const { pokemonData, isLoading } = useGetPokemons(page - 1, limit);

    const applyFilters = (filters) => {
        console.log("Filtros aplicados:", filters);
    };

    const clearFilters = () => {
        console.log("Filtros limpiados");
    };

    return (
        <section className="container mx-auto p-4 flex gap-6">
            <FilterPanel onApplyFilters={applyFilters} onClearFilters={clearFilters} />
            <div className="flex-1">
            <div className="text-center mb-8">
  <h1 className="text-4xl font-extrabold">
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
      ¡Atrápalos Todos!
    </span>
  </h1>
  <p className="text-gray-500 text-lg mt-2">Explora los Pokémon más poderosos del mundo</p>
</div>





                {isLoading && <p className="text-center">Cargando...</p>}
                {pokemonData?.results?.length > 0 && (
                    <>
                        <PokemonList pokemons={pokemonData.results} onShowDetail={(id) => navigate(`/detail/${id}`)} />
                        <Paging totalElements={pokemonData.count} limit={limit} page={page} onPageChange={setPage} onLimitChange={setLimit} />
                    </>
                )}
            </div>
        </section>
    );
};
