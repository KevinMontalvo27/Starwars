
import { useEffect } from "react";
export const Table = ({data}) => {

    const pageSize = 10;
    const columns = ["Nombre", "Altura", "Peso", "Color de cabello", "Color de piel", "Color de ojos"
    , "Fecha de nacimiento", "Genero", "Planeta de nacimiento", "Mas"];
    

    useEffect(() => {
        console.log("Datos recibidos en Table:", data);
    }, [data]);

    if (!data || data.length === 0) return <p>No hay datos disponibles</p>;

    return (
        <div className="mx-auto max-w-5xl overflow-x-auto">
            <table className="min-w-full shadowd-md border-collapse text-left rtl:text-right text-sm bg-gray-400">
                <thead className="text-xs font-semibold uppercase bg-gray-50">
                    <tr>
                        {columns.map((column) =>(
                            <th scope="col" className="px-6 py-3" key={column}>{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody >
                    {
                        data.map((character, index) =>(
                            <tr key={index} className="bg-white border-b  border-gray-200">
                                <td>{character.name}</td>
                                <td>{character.height}</td>
                                <td>{character.mass}</td>
                                <td>{character.hair_color}</td>
                                <td>{character.skin_color}</td>
                                <td>{character.eye_color}</td>
                                <td>{character.birth_year}</td>
                                <td>{character.gender}</td>
                                <td>{character.homeworld}</td>
                                <td><button>Ver Mas</button></td>
                            </tr>
                        ))
                        
                    }
                </tbody>
            </table>
        </div>
    )
}


export default Table;