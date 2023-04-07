import {Box, Typography} from "@mui/material";
import * as React from "react";

const ErrorMessage = ()=>{
    return(
        <Box sx={{ width: '100%', maxWidth: 400 , position: "absolute", top: "50%", left:"50%",transform: "translate(-50%, -50%)",margin:0}}>
            <Typography sx={{color:"#00A0AB", fontSize:"16px", fontWeight:500}} variant="h2" gutterBottom>
                ОБЪЯВЛЕНИЙ НЕ НАЙДЕНО
            </Typography>

            <Typography sx={{color:"#8F8F8F"}}variant="subtitle2" gutterBottom>
                Простите, по вашему запросу товаров сейчас нет. Задайте запрос по-другому или измените характеристики
            </Typography>
        </Box>
    )
}

export default ErrorMessage