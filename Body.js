import React from 'react'
import './Body.css'
import Header from './Header'
import { useDataLayerValue } from './DataLayer'
import { Favorite, MoreHoriz, PlayCircleFilled } from '@mui/icons-material';
import SongRow from './SongRow';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import GetAppIcon from '@mui/icons-material/GetApp';

function Body(spotify){
  
  const [{ discover_weekly , user}, dispatch] = useDataLayerValue();

  return (
    <div className='body'>

      <Header spotify={spotify}/>

      <div className='body_info'>

        <img src={discover_weekly?.images[0].url} alt=''/> 
        
        <div className='body_infoText'>
          <strong>PLAYLISTS</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p><br></br>
          <p>Made for {user?.display_name}   . {discover_weekly?.tracks?.total} song</p>
        </div> 

      </div>

      <br></br>
      <hr width="75%" color="gray"></hr>

      <div className='body_songs'>
      <div className='body_icon'>

        <div className='body_iconLeft'>
           <PlayCircleFilled className='body_shuffle'/>
           <Favorite fontSize='large'/>
           <GetAppIcon className='body_shuffled'/>
           <MoreHoriz className='body_shuffled'/>
        </div>

        <div className="body_iconRight">
           {/* search  CUSTOM ORDER arroww down*/}
           <SearchIcon fontSize='large' className='body_shuffled'/>
           <h3>Custom Order</h3>
           <KeyboardArrowDownIcon fontSize='large' className='body_shuffled'/>
        </div>

      </div>

      
      <div class="body_title">
<h3>Title</h3>
<h2>Album</h2>
<h4>ReleasedDate</h4>
<p><AccessTimeIcon/></p>  
      </div>
        
        <hr  width="75%" color="gray"></hr>
       

      {/* ..............list of songs................ */}

      {discover_weekly?.tracks.items?.map(item =>(
        <SongRow track={item.track} />
      ))}

      </div>

      <hr  width="75%" color="gray"></hr>

      
      <div className='body_height'>

      </div>
    </div>
  )
}

export default Body

 