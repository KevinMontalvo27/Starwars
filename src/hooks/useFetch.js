import { useEffect, useState} from 'react';
import { changeData } from '../services/changeData.service';

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () =>{
            setLoading(true);
            setError(null);
            try{
                const response = await fetch (url);
                if(!response.ok) throw new Error('Error al solicitar los datos');
                const result = await response.json();

                const resolvedData = await changeData(result)
                setData(resolvedData);

                console.log("Datos transformados", resolvedData);
            } catch(err){
                setError(err.message);
            } finally{
                setLoading(false);
            }
        }

        if (url){
            fetchData();
        }
    }, [url]);

    return {data, loading, error};
}


