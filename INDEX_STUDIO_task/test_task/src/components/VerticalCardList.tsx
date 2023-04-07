import {Box, Button, IconButton} from "@mui/material";
import VerticalCard from "./VerticalCard";
import * as React from "react";
import useCards from "../Hooks/useCards";
import VerticalViewActive from "./Icons/VerticalView/VerticalViewActive";
import GorizontalViewDefault from "./Icons/GorizontalView/GorizontalViewDefault";


const VerticalCardList = () => {
    const {cards} = useCards();

    return(


    <Box>
        <Box sx={{display:"flex", borderRadius:"8px", float:"right" , m:"32px 32px 0 0"}}>
            <IconButton sx={{p:0, m:0, mr:"10px"}}>
                <VerticalViewActive/>
            </IconButton>
            <IconButton sx={{p:0, m:0}}>
                <GorizontalViewDefault/>
            </IconButton>

        </Box>
        <Box sx={{
            flexGrow: 1,
            margin: " 0px 15%",
            padding: " 0 5%",
            flexDirection: "column",
            display: "flex",
            alignItems: "center"
        }}>
            <Box sx={{display: "flex", flexWrap: "wrap", justifyContent: "center", paddingTop: '92px'}}>
                {cards.map((item, id) => {
                    return (
                        <Box sx={{mb: "24px", ml: "24px"}} key={id}>
                            <VerticalCard card={item}/>
                        </Box>
                    )
                })}
            </Box>
        </Box>
        <Button
            sx={{fontStyle: "normal",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "16px",
                textAlign: "right",
                color: "#00A0AB",
                mb:"30px",
                ml:"25px"
            }}
        >
            Показать еще
        </Button>
    </Box>

    )
}

export default VerticalCardList