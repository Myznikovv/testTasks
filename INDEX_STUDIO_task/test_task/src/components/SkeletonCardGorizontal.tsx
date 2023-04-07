import * as React from "react";
import {Box, Skeleton} from '@mui/material';


const SkeletonCardGorizontal = () => {
    return (
        <Box sx={{
            width:"472px", height:"134px", display:"flex",backgroundColor:'#F8F8F8', borderRadius:"8px"
        }}>
            <Box sx={{position:"relative" }}>
                <Skeleton sx={{ borderRadius:"8px 0px 0 8px",bgcolor:"#EAEAEA"}} variant="rounded" animation="wave" width={156} height={134}/>
                <Skeleton sx={{ position:"absolute", fontSize: '8px', width: "56px", br:'3px', bgcolor:"#ffffff", height: "8px", left: "50px", top: "117px"}} variant="text" animation="wave" />
            </Box>
            <Box>
                <Box sx={{padding:"10px 12px 0px 12px", display: "flex"}}>
                    <Skeleton sx={{ fontSize: '22px', width: "256px", br:'8px', backgroundColor:"#EAEAEA"}} variant="text" animation="wave" />
                    <Skeleton sx={{fontSize: '22px', width: "25px", br:'8px', ml:"9px", bgcolor:"#EAEAEA"}} variant="text" animation="wave" />
                </Box>
                <Box sx={{padding:"0px 12px"}}>
                    <Skeleton sx={{ fontSize: '16px', width: "292px", br:'8px', bgcolor:"#EAEAEA"}} variant="text" animation="wave" />
                    <Skeleton sx={{ fontSize: '16px', width: "116px", br:'8px', bgcolor:"#EAEAEA"}} variant="text" animation="wave" />
                </Box>
                <Box sx={{padding:"0px 12px", display:"flex"}}>
                    <Skeleton sx={{ fontSize: '14px', width: "177px", br:'8px', bgcolor:"#EAEAEA"}} variant="text" animation="wave" />
                    <Skeleton sx={{ fontSize: '14px', width: "107px", br:'8px', ml:"9px", bgcolor:"#EAEAEA"}} variant="text" animation="wave" />
                </Box>
            </Box>

        </Box>
    )
}

export default SkeletonCardGorizontal