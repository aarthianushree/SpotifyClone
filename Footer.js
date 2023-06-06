import React from 'react'
import './Footer.css'
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import RepeatIcon from '@mui/icons-material/Repeat';
import ShuffleIcon from '@mui/icons-material/Shuffle';

import Grid from '@mui/material/Grid';
import { PlaylistPlay } from '@mui/icons-material';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';




function Footer() {

  

  return (
    <div className='footer'>
      
    <div className='footer_left'>
        <img className='footer_albumLogo' src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTAPp4Cyx0uAkK3RupL-EZJ4z-BPsC01kCIoBIbfPlyW208WBn_' alt=''></img>

        <div className='footer_songInfo'>
          <h4>BlankSpace</h4>
          <p>Taylor Swift</p>
        </div>
        
        <FavoriteBorderIcon  className='footer_icon'/>
        <RemoveCircleOutlineIcon  className='footer_icon'/>

    </div>  

    <div className='footer_center'>
       <ShuffleIcon className='footer_green' />
       <SkipPreviousIcon className='footer_icon'/>
       <PlayCircleFilledWhiteIcon fontSize='large' className='footer_icon'/>
       <SkipNextIcon className='footer_icon'/>
       <RepeatIcon className='footer_green'/>
    </div>

    <div className='footer_right'>
      <Grid container spacing={2}>
        <Grid item>
          <PlaylistPlay  className='footer_icon'/>
        </Grid>

        <Grid item>
        <VolumeDown  className='footer_icon'/>
        </Grid>

        <Grid item xs>
       
        <Slider className='footer_icon'/>
        </Grid>

      </Grid>
      
      </div>
    </div>
  )
}

export default Footer

    
   