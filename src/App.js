import React, { useEffect, useState } from "react";
import "./styles.css";
import Login from "./Login/Login";
import { getTokenFromUrl } from "./spotifyJS/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player/Player";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState();
  useEffect(() => {
    const hash = getTokenFromUrl(); //getting token from url
    window.location.hash = ""; //removing token from url
    const _token = hash.access_token; // storing token inside state

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        console.log("person", user);
      }); //gets the user account
    }

    console.log(("token:", token));
  }, []);

  return <div className='app'>{token ? <Player/> : <Login />}</div>;
}

export default App;

// run npm install spotify-web-api-js <-- allows us to connect to their services to grab music etc.
