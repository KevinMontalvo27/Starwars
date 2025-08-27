

const fetchData = async (URL, field="name") =>{
    try{
        const response = await fetch(URL);
        const data = await response.json();
        return data[field] || "Unknown";
    } catch (error){
        return "Unknown";
    }
}

export const changeData = async (characters) =>{

    const updatedCharacters = await Promise.all(
        characters.map (async (character) =>{

            let homeworldName;
            let filmTitles = [];
            let vehicleNames = [];
            let starshipNames = [];

            if(character.homeworld){
                homeworldName = await fetchData(character.homeworld, "name");
            }else{
                homeworldName = "Unknown";
            }

        
            if(character.films && character.films.length > 0){
                filmTitles = await Promise.all(character.films.map((url) => fetchData(url, "title")))
            } else{
                filmTitles = [];
            }

            if(character.vehicles && character.vehicles.length > 0){
                vehicleNames = await Promise.all(character.vehicles.map((url) => fetchData(url, "name")))
            } else{
                vehicleNames = [];
            }

            if(character.starships && character.starships.length > 0){
                starshipNames = await Promise.all(character.starships.map((url) => fetchData(url, "name")))
            } else{
                starshipNames = [];
            }

            return{
                ...character,
                homeworld: homeworldName,
                films: filmTitles,
                vehicles: vehicleNames,
                starships: starshipNames,
            }
        })
    )
    return updatedCharacters;
}