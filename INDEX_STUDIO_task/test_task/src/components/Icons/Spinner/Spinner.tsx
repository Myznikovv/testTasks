import {Box, CircularProgress} from "@mui/material";
import * as React from "react";

function Spinner() {
    return (
        <Box sx={{ position: 'relative' }}>
            <CircularProgress
                variant="determinate"
                sx={{
                    color: " #ABCFD0",
                    opacity: "0.4" ,
                }}
                size={40}
                thickness={6}
                value={100}
            />
            <CircularProgress
                variant="indeterminate"
                disableShrink
                sx={{
                    color: "#ABCFD0",
                    animationDuration: '700ms',
                    position: 'absolute',
                    left: 0,
                    marginLeft: "auto",
                    marginRight: "auto",
                    right: 0,
                    textAlign: "center",
                    strokeDasharray: "25px,200px"
                }}
                size={40}
                thickness={6}


            />
        </Box>
    );
}

export default Spinner