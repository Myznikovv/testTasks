import {Box, Button, IconButton, Skeleton, Typography} from "@mui/material";
import VerticalViewActive from "./Icons/VerticalView/VerticalViewActive";
import GorizontalViewDefault from "./Icons/GorizontalView/GorizontalViewDefault";
import * as React from "react";
import Spinner from "./Icons/Spinner/Spinner";
import {useEffect, useState} from "react";
import VerticalViewDefault from "./Icons/VerticalView/VerticalViewDefault";
import GorizontalViewActive from "./Icons/GorizontalView/GorizontalViewActive";
import VerticalCard from "./VerticalCard";
import GorizontalCard from "./GorizontalCard";
import {ICard} from "../models";
import useCards from "../services/useCards";
import SkeletonCardVertical from "./SkeletonCardVertical";
import SkeletonCardGorizontal from "./SkeletonCardGorizontal";

import GorizontalViewHover from "./Icons/GorizontalView/GorizontalViewHover";
import VerticalViewHover from "./Icons/VerticalView/VerticalViewHover";
import ErrorMessage from "./ErrorMessage";

const MainListPage = () => {
    const [direction, setDirection] = useState("vertical");
    const [cards, setCards] = useState<ICard[]>([]);
    const [page, setPage] = useState(1);
    const [newCardsLoading, setNewCardsLoading] = useState(false);
    const [clickedVertical, setClickedVertical]=useState(false);
    const [isHoveredVertical, setHoveredVertical]=useState(false);
    const [clickedGorizontal, setClickedGorizontal]=useState(false);
    const [isHoveredGorizontal, setHoveredGorizontal]=useState(false);


    const {loading, error , getAllCards,clearError} = useCards();


    useEffect(() => {
        getCardResources( page,true);
    },[])


    const getCardResources = (page:number, initial:boolean) => {
        initial ? onNewCharLoading(false) : onNewCharLoading(true);

        getAllCards(page)
            .then(onCardsLoaded);
    }

    const onNewCharLoading = (newCardsLoading = true) => {
        setNewCardsLoading(newCardsLoading);
    }

    const onCardsLoaded = (newCardsList:ICard[]) => {
        setCards(prevState => [...prevState, ...newCardsList]);
        setNewCardsLoading(false);
        setPage(page => page+1);
    }

    let verticalIcon,gorizontalIcon;
    if(direction === "vertical"){
         verticalIcon =<VerticalViewActive/> ;
         gorizontalIcon = (!isHoveredGorizontal)?<GorizontalViewDefault/>:<GorizontalViewHover/>;
    }else{
        gorizontalIcon =<GorizontalViewActive/> ;
        verticalIcon = (!isHoveredVertical)?<VerticalViewDefault/>:<VerticalViewHover/>;
    }
    if (cards.length<1){
        return <ErrorMessage/>
    }

    return (
        <Box>
            {
                loading ?
                    <Skeleton sx={{ borderRadius:"8px", bgcolor:"#EAEAEA", float:"right" , m:"32px 32px 0 0"}} variant="rounded" animation="wave" width={84} height={39}/>
                        :
                    <Box sx={{display: "flex", borderRadius: "8px", float: "right", m: "32px 32px 0 0"}}>
                        <IconButton
                            sx={{p: 0, m: 0, mr: "10px"}}
                            onMouseEnter={(prev)=>setHoveredVertical(!prev)}
                            onMouseLeave={(prev)=>setHoveredVertical(!prev)}
                            onClick={(prev)=>{
                                setClickedVertical(!prev);
                                setDirection("vertical");
                            }}
                        >
                            {verticalIcon}
                        </IconButton>
                        <IconButton
                            sx={{p: 0, m: 0}}
                            onMouseEnter={(prev)=>setHoveredGorizontal(!prev)}
                            onMouseLeave={(prev)=>setHoveredGorizontal(!prev)}
                            onClick={(prev)=>{
                                setClickedGorizontal(!prev);
                                setDirection("gorizontal");
                            }}
                        >
                            {gorizontalIcon}
                        </IconButton>
                    </Box>
            }


            <Box>
                <Box sx={{
                    flexGrow: 1,
                    margin: " 0px 15%",
                    padding: " 0 5%",
                    flexDirection: "column",
                    display: "flex",
                    alignItems: "center"
                }}>
                    {
                        loading?
                            <Box sx={{ display:"flex", flexWrap:"wrap", justifyContent:"center", paddingTop:'92px'}}>
                                {Array.from(Array(16)).map((_, index) => (
                                    <Box sx={{mb:"24px", ml:"24px"}} key={index}>
                                        {(direction === "vertical")?<SkeletonCardVertical/>:
                                            <SkeletonCardGorizontal/>}
                                    </Box>
                                ))}
                            </Box>
                            :
                            <Box sx={{display: "flex", flexWrap: "wrap", justifyContent: "center", paddingTop: '92px'}}>
                                {
                                    cards.map((item, id) => {
                                        return (
                                            <Box sx={{mb: "24px", ml: "24px"}} key={id}>
                                                {(direction === "vertical") ? <VerticalCard card={item}/> :
                                                    <GorizontalCard card={item}/>}
                                            </Box>
                                        )
                                    })
                                }
                            </Box>


                    }
                </Box>
                {
                    (loading)?
                        <Skeleton sx={{fontSize: '32px', width: "125px", borderRadius:"45px", m:"20px 0 34px 24px", bgcolor:"#EAEAEA", justifyContent:'center'}} variant="text" animation="wave" />
                        :
                        newCardsLoading?null :
                            error? <><Typography sx={{
                                fontFamily: "Ubuntu, sans-serif",
                                color: " #8F8F8F",
                                fontSize: '14px',
                                mb: "100px"
                            }}>Ошибка при загрузке</Typography>
                                <Button
                                sx={{
                                    fontStyle: "normal",
                                    fontWeight: 500,
                                    fontSize: "14px",
                                    lineHeight: "16px",
                                    textAlign: "right",
                                    color: "#00A0AB",
                                    mb: "30px",
                                    ml: "25px"
                                }}
                                onClick={() => {
                                    setNewCardsLoading(true);
                                    getAllCards(page).then(onCardsLoaded);
                                    clearError();
                                }}
                            >
                                Показать еще
                            </Button></>:
                                <Button
                                    sx={{
                                        fontStyle: "normal",
                                        fontWeight: 500,
                                        fontSize: "14px",
                                        lineHeight: "16px",
                                        textAlign: "right",
                                        color: "#00A0AB",
                                        mb: "30px",
                                        ml: "25px"
                                    }}
                                    onClick={() => {
                                        setNewCardsLoading(true);
                                        getAllCards(page).then(onCardsLoaded);
                                        clearError();
                                    }}
                                >
                                    Показать еще
                                </Button>
                }
            </Box>
            {newCardsLoading ? <Spinner/> : null}
        </Box>
    );
}

export default MainListPage;