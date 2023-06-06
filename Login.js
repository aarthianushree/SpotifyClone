import React from 'react';
import './Login.css';
import { loginUrl } from './spotify.js';

const Login = () => {
  return (
    <div className='login'>

        {/* logo */}
        {/* login button */}

        <img 
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" 
        alt=""
        />
        
        <a href={loginUrl}>Login to Spotify</a>

    </div>
  );
}

export default Login