import * as React from "react";
import {Box, Button, Card, CardContent, CardMedia, IconButton, MobileStepper, Typography} from '@mui/material';
import {ICard} from "../models";
import LikeDefault from "./Icons/Likes/LikeDefault";
import LikeHover from "./Icons/Likes/LikeHover";
import {useState} from "react";
import LikeActive from "./Icons/Likes/LikeActive";

interface CardsProps {
    card: ICard
}

const GorizontalCard = ({card}:CardsProps) => {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

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

    const   date = card.createdAt.slice(0,10).split("-", 3);
    const time =card.createdAt.slice(11,16).replace(":", ".");
    const createsDate = `${date[1]}.${date[2]}.${date[0].slice(2,4)}, `.concat(time);

    return (
        <Card key={card.id} sx={{m:"15px",position:"relative", width: 472 , height:134 , borderRadius:"12px",filter:" drop-shadow(0px 0px 16px rgba(0, 0, 0, 0.08));", display:"flex"}}>
            <CardMedia
                component="img"
                alt="photo"
                height="134"
                sx={{
                    width:"156px",
                }}
                image={`https://source.unsplash.com/random/${card.id}`}
            />
            <Box sx={{position :"absolute", bottom:"5px", ml:'35px'}}>
                <MobileStepper
                    sx={{backgroundColor:"rgba(0, 0,0,0)",
                        "& .MuiMobileStepper-dot":{
                            backgroundColor: "#C7C7C7"
                        },
                        "& .MuiMobileStepper-dot:nth-child(1)":{
                            backgroundColor: "#00A0AB"
                        }
                    }}
                    variant="dots"
                    steps={6}
                    position="static"
                    activeStep={activeStep}
                    nextButton={
                        <Button  sx={{display:'none'}} size="small" onClick={handleNext} disabled={activeStep === 5}>
                            Next

                        </Button>
                    }
                    backButton={
                        <Button sx={{display:'none'}} size="small" onClick={handleBack} disabled={activeStep === 0}>
                            Back
                        </Button>
                    }
                />
            </Box>
            {card.seen?
                <Box sx={{position:"absolute", width:"94px", height:"24px", borderRadius:8, left: 31, top: 11,bgcolor:"#ffffff"}}>
                    <Typography sx={{fontWeight:"400", fontSize:"12px", fontFamily:"Ubuntu, sans-serif",
                        color: "#2C2C2C", pt:"5px"}} gutterBottom variant="h5" component="div">
                        Просмотрено
                    </Typography>
                </Box>
                :null}
            <CardContent sx={{pb:"5px", pt:"10px", width:"316px"}}>
                <Box sx={{display:"flex", textAlign:"center", justifyContent:"space-between"}}>
                    <Typography sx={{textAlign:"center", verticalAlign: "middle", mb:0, fontWeight:"700", fontSize:"22px",fontFamily:"Ubuntu, sans-serif", color: "#2C2C2C",}} gutterBottom variant="h5" component="div">
                        {card.price.toFixed()} ₽
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
                <Typography sx={{textAlign:"left",fontFamily:"Ubuntu, sans-serif",fontWeight:500, fontSize:"14px", pt:"10px"}} variant="body2" color="text.secondary">
                    {card.title}
                </Typography>
                <Box sx={{display:"flex", mt:"30px", justifyContent:"space-between"}}>
                    <Typography sx={{fontFamily:"Ubuntu, sans-serif",color:" #8F8F8F",fontSize:'14px'}}>
                        {card.address.replace(/[^a-zA-Z]+/g,"")}
                    </Typography>
                    <Typography sx={{fontFamily:"Ubuntu, sans-serif",color:" #8F8F8F",fontSize:'14px'}}>
                        {createsDate}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    )
}

export default GorizontalCard;