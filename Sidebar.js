import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from './DataLayer';


const Sidebar = () => {

  const [ {playlists}, dispatch ] = useDataLayerValue();

  return (
    <div className='sidebar'>
      

      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
      <br/>
      <strong className="sidebar_title">PLAYLISTS</strong>
      
      <hr />

      {playlists?.items?.map(playlist => (
        <SidebarOption title={playlist.name} />
       
      ))}


      
      
      {/* <SidebarOption title={playlists.items[0].name}/>
      <SidebarOption title={playlists.items[1].name}/>
      <SidebarOption title={playlists.items[2].name}/>  */}
      
    </div>
  )
}

export default Sidebar