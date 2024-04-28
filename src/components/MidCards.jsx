import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { ChevronsRight } from "react-feather";

const MidCards = ({ heading, subHeading1, subHeading2, value1, value2 }) => {
  return (
    <Box sx={{border:'1px solid aqua',borderRadius:1}}>
      <Box display="flex" justifyContent="space-between" sx={{borderBottom:'1px solid aqua',py:1,px:3}}>
        <Typography variant="body1">{heading}</Typography>
        <Typography variant="body2"display='flex' alignItems='center' fontSize={12} gap={1}>January 2024 <ChevronsRight size={15} /></Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between",py:2,px:3 }}>
        <Box width='60%'>
          <Typography variant="body1">{value1}</Typography>
          <Typography sx={{fontSize:12}} variant="body2">{subHeading1}</Typography>
        </Box>
        <Box width='40%'>
          <Typography variant="body1">{value2}</Typography>
          <Typography sx={{fontSize:12}} variant="body2">{subHeading2}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default MidCards;
