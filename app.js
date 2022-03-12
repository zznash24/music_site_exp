const express = require('express');
const app = express();
const songData = require('./song');

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.get('/:artist', (req, res) => {
    let artist = songData.find((artist) => artist.name === artist.name);

    res.json(artist)
})



app.listen(3000, () => {
    console.log('DoomsDay Device is Active')
});