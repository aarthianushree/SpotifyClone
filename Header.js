import React from 'react'
import './Header.css'
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import DownloadForOfflineOutlinedIcon from '@mui/icons-material/DownloadForOfflineOutlined';
import { useDataLayerValue } from './DataLayer';
import { Avatar } from '@mui/material';

function Header() {

  const [{user}, dispatch] = useDataLayerValue();

  return (
    <div className='header'>

      <div className='header_left'>

       <ArrowCircleLeftOutlinedIcon fontSize='large'/>
       <ArrowCircleRightOutlinedIcon fontSize='large'/>

      </div>

      <div className='header_right'>
      <h4>Upgrade</h4>
      <h3><DownloadForOfflineOutlinedIcon/>InstallApp</h3>
       <p><Avatar src={user?.images[0]?.url} alt="anu"/></p>
       {/* <p>{user?.display_name}</p>  */}
      </div>

    </div>
  )
}

export default Header