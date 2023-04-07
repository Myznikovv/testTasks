import * as React from "react";
import {Box, Card, CardActions, CardContent, CardMedia, IconButton, Typography} from '@mui/material';
import {ICard} from "../models";
import LikeDefault from "./Icons/Likes/LikeDefault";
import LikeHover from "./Icons/Likes/LikeHover";
import {useState} from "react";
import LikeActive from "./Icons/Likes/LikeActive";

interface CardsProps {
    card: ICard
}

const VerticalCard = ({card}:CardsProps) => {

    const [clicked, setClicked]=useState(false);
    const [isHovered, setHovered]=useState(false);

    const mouseEnterHandler = () =>{
        setHovered(true);
    }
    const mouseLeaveHandler = () =>{
        setHovered(false);
    }
    const mouseClickHandler = () =>{
        setClicked((prevState)=>!prevState);
    }

    const hover =  (isHovered && !clicked)?<LikeHover/>:null;
    const click = clicked?<LikeActive/>:null;
    const result = (!hover && !click)?<LikeDefault/>:null;
    return (
        <Card key={card.id} sx={{m:"15px",position:"relative", width: 224 , height:364 , borderRadius:"12px", filter:" drop-shadow(0px 0px 16px rgba(0, 0, 0, 0.1));"}}>
            <CardMedia
                component="img"
                alt="photo"
                height="260"
                image={`https://source.unsplash.com/random/${card.id}`}
            />
            {card.seen?
                <Box sx={{position:"absolute", width:"94px", height:"24px", borderRadius:8, left: 65, top: 11,bgcolor:"#ffffff"}}>
                <Typography sx={{fontWeight:"400", fontSize:"12px",
                    color: "#2C2C2C", pt:"5px"}} gutterBottom variant="h5" component="div">
                    Просмотрено
                </Typography>
                 </Box>
                :null}
            <CardContent sx={{pb:"5px"}}>
                <Box sx={{display:"flex", textAlign:"center", justifyContent:"space-between"}}>
                    <Typography sx={{textAlign:"center", verticalAlign: "middle", mb:0, fontWeight:"700", fontSize:"22px"}} gutterBottom variant="h5" component="div">
                        {card.price} ₽
                    </Typography>
                    <IconButton
                        sx={{
                            p:0, m:0,

                        }}
                        onMouseEnter={()=>mouseEnterHandler()}
                        onMouseLeave={()=>mouseLeaveHandler()}
                        onClick={() => {
                            mouseClickHandler();
                        }}>
                        {result}
                        {hover}
                        {click}

                    </IconButton>
                </Box>
                <Typography sx={{textAlign:"left"}} variant="body2" color="text.secondary">
                    {card.title}
                </Typography>
            </CardContent>
            <CardActions>
               <Typography>
                   {card.address}
               </Typography>
                <Typography>
                    {card.address}
                </Typography>
            </CardActions>
        </Card>
    )
}

export default VerticalCard;