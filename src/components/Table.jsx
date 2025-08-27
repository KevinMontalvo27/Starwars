
import { useEffect } from "react";
export const Table = ({data, selectedCharacter}) => {

    
    const columns = ["Nombre", "Altura", "Peso", "Color de cabello", "Color de piel", "Color de ojos"
    , "Fecha de nacimiento", "Genero", "Planeta de nacimiento", "Ver más información"]; 
    

    useEffect(() => {
        console.log("Datos recibidos en Table:", data);
    }, [data]);

    if (!data || data.length === 0) return <p>No hay datos disponibles</p>;

    return (
        <div className="mx-auto max-w-5xl overflow-x-auto">
            <table className="min-w-full border-collapse text-left text-sm bg-gray-700 text-white">
                <thead className="bg-gray-800 text-xs font-semibold uppercase">
                    <tr>
                        {columns.map((column) =>(
                            <th scope="col" className="px-4 py-3 border-b border-gray-600" key={column}>{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody >
                    {
                        data.map((character, index) =>(
                            <tr key={index} className="border-b border-gray-600 bg-gray-700">
                                <td className="px-4 py-2">{character.name}</td>
                                <td className="px-4 py-2">{character.height}</td>
                                <td className="px-4 py-2">{character.mass}</td>
                                <td className="px-4 py-2">{character.hair_color}</td>
                                <td className="px-4 py-2">{character.skin_color}</td>
                                <td className="px-4 py-2">{character.eye_color}</td>
                                <td className="px-4 py-2">{character.birth_year}</td>
                                <td className="px-4 py-2">{character.gender}</td>
                                <td className="px-4 py-2">{character.homeworld}</td>
                                <td className="text-2xl px-4 py-2 cursor-pointer hover:text-yellow-300" onClick={selectedCharacter}>+</td>
                            </tr>
                        ))
                        
                    }
                </tbody>
            </table>
        </div>
    )
}


export default Table;