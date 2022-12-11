import SpotifyWebApi from 'spotify-web-api-node';

const spotifyApi = new SpotifyWebApi({
    clientId: 'f0e9404236714981a355115fe5cdddd6',
    clientSecret: 'f574813fee8a4895904dd1d2e60e0ba3',
    redirectUri: 'http://www.example.com/callback'
});

spotifyApi.setAccessToken('BQC3GT8rAzNsEM33g');

const currentTrack = await spotifyApi.getMyCurrentPlayingTrack()
const currentTrackAnalysis = await spotifyApi.getAudioAnalysisForTrack(currentTrack.body.item.id)

console.log(currentTrackAnalysis.body)


// user-read-currently-playing
