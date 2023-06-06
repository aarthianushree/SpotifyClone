import React from 'react'
import "./Player.css";
import Sidebar from './Sidebar.js';
import Body from './Body.js';
import Footer from './Footer.js';


function Player( {spotify} ) 
{
  return (
    <div className='player'>
      <div className='player_body'>

        {/* ---------sidebar ---------   body-------------footer  -------------- */}

        <Sidebar/>
        <Body spotify/>
        

      </div>

      <Footer/>
      
     </div>
  )
}

export default Player
