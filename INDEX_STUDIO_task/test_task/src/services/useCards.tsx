import useHttpHook from "../Hooks/useHttpHook";
import {useEffect} from "react";

const  useCards = ()=> {

    const {loading, error, request ,clearError} = useHttpHook();
    const _url = 'https://testguru.ru/frontend-test/api/v1/items?page=';

    useEffect(()=>{
        getAllCards(1);
    },[])

    const getAllCards = async (page:number) => {
        const res = await request(_url,page);
        return (res);
    }

    return {loading, error, getAllCards, clearError}
}
export default useCards;
