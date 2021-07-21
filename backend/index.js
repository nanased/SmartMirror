const express = require('express');
const app = express();
const cors = require("cors")
const bodyParser = require("body-parser")
const SpotifyWebApi = require("spotify-web-api-node")

app.use(express.static(__dirname + '/build'));
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res)=> {
  res.sendFile(__dirname + '/build/index.html');
})

app.post("/refresh", (req, res) => {
  const refreshToken = req.body.refreshToken
  const spotifyApi = new SpotifyWebApi({
    redirectUri: 'http://localhost:3000',
    clientId: 'e0b298a61d2b4018973359a922693427',
    clientSecret: '71de944a556f4a19a96aba5b689458b5',
    refreshToken,
  })

  spotifyApi
    .refreshAccessToken()
    .then(data => {
      res.json({
        accessToken: data.body.accessToken,
        expiresIn: data.body.expiresIn,
      })
    })
    .catch(err => {
      console.log(err)
      res.sendStatus(400)
    })
})

app.post("/login", (req, res) => {
  const code = req.body.code
  const spotifyApi = new SpotifyWebApi({
    redirectUri: 'http://localhost:3000',
    clientId: 'e0b298a61d2b4018973359a922693427',
    clientSecret: '71de944a556f4a19a96aba5b689458b5',
  })
console.log (code)
  spotifyApi
    .authorizationCodeGrant(code)
    .then(data => {
      console.log (data)
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      })
    })
    .catch(err => {
      console.log(err)
      res.sendStatus(400)
    })
})

app.listen(8080,()=>{console.log("Server starting on port 8080")});