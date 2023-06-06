import React from 'react';
import './SongRow.css';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function SongRow({track}){

  

  return (
    
    <div className="songRow">
     
     <img className='songRow_album' src={track.album.images[0].url} alt=''/>

     <div className='songRow_info'>
       <h1>{track.name}</h1>
       <h4> 
         {track.artists.map((artist) => artist.name).join(" , ")}
       </h4>
       
      <h3>{track.album.name.substring(0,50)}</h3>
      <h2></h2>
      
      <h2></h2>
    
    </div> 
    
    
     <div class="wrapper">
                <div class="one">
                <div className='releasedate'>{track.album.release_date}</div>
                </div>
                <div class="two"><div className='duration'>{(((track.duration_ms/ 1000)/60) * 100 / 100).toFixed(2)} min</div> </div>
                
    </div> 

      

    </div>
  )
}

export default SongRow

