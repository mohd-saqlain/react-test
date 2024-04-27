import React from 'react'
import { Box,Typography,IconButton } from '@mui/material'
import { ChevronsRight } from 'react-feather'

const SmallCards = ({icon,value,title,color}) => {
  return (
  <Box sx={{border:`1px solid ${color}`,borderRadius:1}}>
    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',py:2}}>
        <Typography sx={{color:color}}>{icon}</Typography>
        <Typography variant='body1' fontSize={20}>{value}</Typography>    
        <Typography variant='body2' fontSize={10}>{title}</Typography>
    </Box>
    <Box display='flex' gap={1} sx={{backgroundColor:color,py:0.5}} alignItems='center' justifyContent='center'><Typography sx={{fontSize:12}} variant='body2'>View Detailed Report</Typography><ChevronsRight size={15}/></Box>
  </Box>
  )
}

export default SmallCards
