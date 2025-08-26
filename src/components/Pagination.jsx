import { useState } from "react";


export const Pagination = ({
    currentPage,  
    pageSize,
    totalItems,
    currentDataLength,
    onPageChange,
}) => {
    const totalPages = Math.ceil(totalItems / pageSize);
    const startItem = pageSize * (currentPage - 1) + 1;
    const endItem = startItem + currentDataLength - 1;

    const handlePagination = (direction) =>{
        if (direction === 'next' && currentPage < totalPages){
            onPageChange(currentPage + 1);
        } else if (direction === 'prev' && currentPage > 1){
            onPageChange(currentPage - 1);
        }
    }

    return(
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6 px-4">
            <p className="text-sm text-gray-300">
                Mostrando <span className="font-medium text-white">{startItem}</span> a{" "}
                <span className="font-medium text-white">{endItem}</span> de{" "}
                <span className="font-medium text-white">{totalItems}</span> resultados
            </p>

            <div className="flex gap-2">
                <button
                    onClick={() => handlePagination("prev")}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Anterior
                </button>
                <span className="px-4 py-2 text-gray-300">
                    Página {currentPage} de {totalPages}
                </span>
                <button
                    onClick={() => handlePagination("next")}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Siguiente
                </button>
            </div>
        </div>
    )
}

export default Pagination;