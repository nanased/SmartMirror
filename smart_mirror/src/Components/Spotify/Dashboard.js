import { useState, useEffect } from "react"
import useAuth from "./AUTH"
import SpotifyWebApi from "spotify-web-api-node"

const songStylesheet = {
  songName: {
      fontSize: '20px',
      textAlign: 'center'
  },
  image: {
    paddingLeft: '30px'
  }
}

const spotifyApi = new SpotifyWebApi({
  clientId: "e0b298a61d2b4018973359a922693427",
})

export default function Dashboard({ code }) {
  const accessToken = useAuth(code)

  const [songName, setSongName] = useState('');
  const [image, setImage] = useState ('');

  useEffect(() => {
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken)
    const interval = setInterval (()=>{
    spotifyApi.getMyCurrentPlaybackState()
  .then(function(data) {
    if (data.body && data.body.is_playing) {
      console.log(data.body);
      setSongName (data.body.item.name);
      setImage (data.body.item.album.images[1].url);
    } else {
      console.log("User is not playing anything, or doing so in private.");
    }
  }, function(err) {
    console.log('Something went wrong!', err);
  });},1000)
    return ()=>{
        clearInterval(interval);
    }
  }, [accessToken])
return (
    <div>
      <div style= {songStylesheet.image}><img src={image} height={210}></img></div>
        <p style = {songStylesheet.songName}>{songName}</p>
    </div>
)
}