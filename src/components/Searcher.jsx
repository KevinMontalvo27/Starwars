export const Searcher = ({term, onSearch}) => {

    const handleKeyPress = (e) => {
        if (e.key === "Enter") { 
            onSearch(e.target.value);
        }
    }
    return (
        <div className="flex justify-center mb-6">
            <input
                type="text"
                defaultValue={term}             
                onKeyDown={handleKeyPress}   
                placeholder="Buscar personaje..."
                className="w-full max-w-md px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
}

export default Searcher;