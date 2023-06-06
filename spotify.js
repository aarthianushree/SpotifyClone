export const authEndPoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "d31e60b0d4ce4b288a271e4175df97b7"

//scopes:
const scopes = [ 
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
];

// window.location.hash --- //returns a string that contains a # along with the fragment identifier of the URL. 

export const getTokenFromUrl = () =>{
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce( (initial, item) => {
        var parts = item.split("=");
        initial[parts[0]] = 
        decodeURIComponent(parts[1]);
//the whole use of this code is to pull the action tokens.
        return initial;
    }, {});  
}






//ascii code for space = %20
//here the token at the end is the authentication[it is a string]
export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;