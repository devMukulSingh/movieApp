import React from 'react'
import ReactPlayer from 'react-player'
import CloseIcon from '@mui/icons-material/Close';
import { Box,styled, Dialog } from "@mui/material";

const DialogStyled = styled(Dialog)({
    '.css-1t1j96h-MuiPaper-root-MuiDialog-paper':{
      boxShadow:'none',
      maxWidth: 800,
      width: '40rem',
      height: '60vh',
      padding:'5px 10px',
      '& > svg':{
        cursor:'pointer',
      }
    },
  })
const VideoPlayer = ( { openVideo,setOpenVideo,id} ) => {


    const handleClose = () => {
        setOpenVideo(false); 
      }

  return (

        <DialogStyled
            open={openVideo} 
            hideBackdrop={true} 
            onClose={handleClose}>
            <CloseIcon onClick = {handleClose}/>
            <ReactPlayer 
                controls
                playing={true}
                light={false}
                url={`https://www.youtube.com/watch?v=${id}`}
                width='100%' height='100%' />
        </DialogStyled>

  )
}

export default VideoPlayer