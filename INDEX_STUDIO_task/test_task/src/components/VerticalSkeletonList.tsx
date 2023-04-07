import {Box, Skeleton} from "@mui/material";
import SkeletonCardVertical from "./SkeletonCardVertical";
import * as React from "react";



const VerticalSkeletonList = ()=>{
    return(

        <Box>
            <Skeleton sx={{ borderRadius:"8px", bgcolor:"#EAEAEA", float:"right" , m:"32px 32px 0 0"}} variant="rounded" animation="wave" width={84} height={39}/>
            <Box sx={{ flexGrow: 1, margin:" 0px 15%", padding:" 0 5%", flexDirection:"column", display:"flex", alignItems:"center"}}>
                <Box sx={{ display:"flex", flexWrap:"wrap", justifyContent:"center", paddingTop:'92px'}}>
                    {Array.from(Array(16)).map((_, index) => (
                        <Box sx={{mb:"24px", ml:"24px"}} key={index}>
                            <SkeletonCardVertical/>
                        </Box>
                    ))}
                </Box>
                <Skeleton sx={{fontSize: '32px', width: "125px", borderRadius:"45px", m:"20px 0 34px 24px", bgcolor:"#EAEAEA", justifyContent:'center'}} variant="text" animation="wave" />
            </Box>
        </Box>

    )
}

export default VerticalSkeletonList