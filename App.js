import React, { useEffect, useState } from 'react';
import './app.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify.js';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './DataLayer';
import Player from './Player';

const spotify = new SpotifyWebApi(); //this spotify is an instance of the spotify, which allows us to communicate to back and forth with spotify

function App() {

  //const [tokens, setToken] = useState(null);
  const [{ user , token}, dispatch] = useDataLayerValue();  //here, {user} --- we kinda destructured it, it means we r pulling the user details whiah has been stored in the dataLayer.   something like = dataLayer.user

   //runs code based on the given condition

  useEffect( () => {

    const hash = getTokenFromUrl();
    window.location.hash=""; //this is done for security purpose
    const _token = hash.access_token; //Access tokens are used in token-based authentication to allow an application to access an API. The application receives an access token after a user successfully authenticates and authorizes access, then passes the access token as a credential when it calls the target API.
    
    if(_token)
    {
      //setToken(_token);
      dispatch( {
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);  //basically, gives the _token to the spotify api.
//can also be said as a magic key which safely allows us to talk/interact back&forth with react and spotify api.

      spotify.getMe().then((user) => {   //getMe() is like promise and it is a async function, it gives each user's details when they log in. This step is done to check whether user logged in or not
        dispatch({
          type: "SET_USER",
          user : user,
        });
      });

      spotify.getUserPlaylists().then((playlists) =>{
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
        //console.log('i got the playlist: ',playlists.items[1].name);
      });

      spotify.getPlaylist("37i9dQZEVXcSt1nW8qmVOh").then(response =>
          dispatch({
            type: "SET_DISCOVER_WEEKLY",
            discover_weekly: response,
          })
        );

    }

    //console.log('i got a token:', token);
  }, []);   
  
  //console.log('user details: ', user);
  //console.log('user token: ', token)

//this useEffect function loads once the app function achanges or loads
// and also loads when the callBack() in it changes.

  return (
    <div className="app">
{/* below is html in JSX format */}
       {
          token ? <Player spotify={spotify}/>: <Login/> 
       }


    </div>
  );
}

export default App;
