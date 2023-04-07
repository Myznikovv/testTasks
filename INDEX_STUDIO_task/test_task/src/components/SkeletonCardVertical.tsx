import * as React from "react";
import styled from "styled-components"
import {Box, Skeleton} from '@mui/material';

const Container = styled.div`
  background-color: #F8F8F8;
  border-radius: 8px;
  width: 224px;
  height: 364px;
`

const SkeletonCardVertical = () => {
    return (
        <Container>
            <Box sx={{background:"#F8F8F8"}}>
                <Box sx={{position:"relative" }}>
                    <Skeleton sx={{ borderRadius:"8px 8px 0 0 ", bgcolor:"#EAEAEA"}} variant="rounded" animation="wave" width={224} height={260}/>
                    <Skeleton sx={{ position:"absolute", fontSize: '8px', width: "56px", br:'3px', bgcolor:"#ffffff", height: "8px", left: "84px", top: "243px"}} variant="text" animation="wave" />
                </Box>
                <Box sx={{padding:"10px 12px 0px 12px", display: "flex"}}>
                    <Skeleton sx={{ fontSize: '22px', width: "166px", br:'8px', bgcolor:"#EAEAEA"}} variant="text" animation="wave" />
                    <Skeleton sx={{fontSize: '22px', width: "25px", br:'8px', ml:"9px", bgcolor:"#EAEAEA"}} variant="text" animation="wave" />
                </Box>
                <Box sx={{padding:"0px 12px"}}>
                    <Skeleton sx={{ fontSize: '16px', width: "200px", br:'8px', bgcolor:"#EAEAEA"}} variant="text" animation="wave" />
                    <Skeleton sx={{ fontSize: '16px', width: "200px", br:'8px', bgcolor:"#EAEAEA"}} variant="text" animation="wave" />
                </Box>
            </Box>
        </Container>
    )
}

export default SkeletonCardVertical