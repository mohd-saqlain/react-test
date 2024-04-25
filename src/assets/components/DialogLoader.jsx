import React from 'react'
import { Dialog,DialogContent,CircularProgress,Typography,Box } from '@mui/material'

const DialogLoader = ({isLoading}) => {
  return (
    <div>
         <Dialog open={isLoading}>
       <DialogContent>
       <Box sx={{display: 'flex', justifyContent: 'center',alignItems:'center', gap: '20px'}}>
          <CircularProgress />
         <Typography variant="body2">
         Loading...
         </Typography>
       </Box>
        
       </DialogContent>
     </Dialog>
    </div>
  )
}

export default DialogLoader
