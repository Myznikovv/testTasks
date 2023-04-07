import {useEffect, useState} from "react";
import {ICard} from "../models";
import axios, {AxiosError} from "axios";

// interface createCardProps{
//     offset:number
// }

const useCard = ()=>{
    const[cards, setCards] = useState<ICard[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [total, setTotal] = useState(0);
    const [pageCount, setPageCount] = useState(1);
    const [newCardsLoading, setNewCardsLoading] = useState(true);

    const addCards = (newCards:ICard)=>{
        setCards(cards=>[...cards, newCards])
    }


    const getCards = async ()=>{
        try{
            setLoading(true);
            setError('');
            const response  = await axios.get(`https://testguru.ru/frontend-test/api/v1/items?page=${pageCount}`);
            if (response.status !== 200) {
                throw new Error(`Couldn't fetch, status : ${response.status} `)
            }
            setCards(response.data.items)
            setLoading(false);
        }catch(e:unknown){
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }
    }

    useEffect(() => {
        getCards()
    }, [])

    return { cards, error, loading, addCards, newCardsLoading }
}

export default useCard;