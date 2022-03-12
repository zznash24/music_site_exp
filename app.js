const express = require('express');
const songData = require('./songData');

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.get('/:artist', (req, res) => {
    let artist = parseInt(req.params.artist);

    if(req.params.artist == '' || !req.params.artist) {
        res.send('Invalid Artist');
        return;
    }
    
    songData.find((artist) => artist.name === artist.name);

    res.json(artist);
})

app.get('/:cds', (req, res) => {
    let cds = songData.find((album) => album.album === album.album)

    res.json(album);
})



app.listen(3000, () => {
    console.log('DoomsDay Device is Active')
});