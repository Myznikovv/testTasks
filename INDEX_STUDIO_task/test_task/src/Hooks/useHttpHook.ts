import {useCallback, useEffect, useState} from "react";
import axios from "axios";


const useHttpHook = ()=>{

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(()=>{
        setLoading(false);
    },[])

    const request = useCallback(async (url:string, page:number)=>{

        setLoading(false);

        try{
            const response  = await axios.get(`${url}${page}`);

            if (response.statusText !== "OK") {
                throw new Error(`Couldn't fetch ${url}, status : ${response.status} `)
            }
            console.log(response)
            return response.data.items;
        }catch(e:unknown){
            setLoading(false)
            setError("Ошибка при загрузке")
            throw e;
        }

    },[])

    const clearError = useCallback(()=>{
        setError("")
    }, [])

    return {loading, error, clearError, request};
}

export default useHttpHook;

