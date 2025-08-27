export const Modal = ({character, onClose}) => {

    if (!character) return null;

    //console.log("Character in Modal:", character);
    const characterFilms = character.films || [];
    const characterVehicles = character.vehicles || [];
    const characterStarships = character.starships || [];
    //console.log("Films:", characterFilms);
    //console.log("Vehicles:", characterVehicles);
    //console.log("Starships:", characterStarships);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
            <div className="bg-gray-800 text-white rounded-lg shadow-lg w-11/12 max-w-2xl p-6 relative">
                <button
                    className="absolute top-4 right-4 text-2xl font-bold text-gray-300 hover:text-white"
                    onClick={onClose}
                >
                    x
                </button>

                <h3 className="text-2xl font-semibold mb-4">{character.name}</h3>

                <section className="mb-4">
                    <h4 className="text-lg font-semibold mb-2">Películas</h4>
                    {characterFilms.length > 0 ? (
                        <ul className="list-disc list-inside space-y-1">
                            {characterFilms.map((film, index) => (
                                <li key={index}>{film}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>No hay películas disponibles</p>
                    )}
                </section>

                <section className="mb-4">
                    <h4 className="text-lg font-semibold mb-2">Vehículos</h4>
                    {characterVehicles.length > 0 ? (
                        <ul className="list-disc list-inside space-y-1">
                            {characterVehicles.map((vehicle, index) => (
                                <li key={index}>{vehicle}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>No hay vehículos disponibles</p>
                    )}
                </section>

                <section>
                    <h4 className="text-lg font-semibold mb-2">Naves Estelares</h4>
                    {characterStarships.length > 0 ? (
                        <ul className="list-disc list-inside space-y-1">
                            {characterStarships.map((starship, index) => (
                                <li key={index}>{starship}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>No hay naves estelares disponibles</p>
                    )}
                </section>
            </div>
        </div>
    );
}

export default Modal;