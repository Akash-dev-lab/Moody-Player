const express = require('express')
const router = express.Router()
const multer = require('multer')
const uploadFile = require("../services/storage.services")
const songModel = require('../models/song.model')

const upload = multer({storage: multer.memoryStorage()})

router.post('/songs', upload.single("image"), async (req, res) => {
    console.log(req.body)
    console.log(req.file)
    const fileData = await uploadFile(req.file)
    console.log(fileData)

    const song = await songModel.create({
        title: req.body.title,
        artist: req.body.artist,
        image: fileData.url,
        mood: req.body.mood
    })

    res.json({
        message: 'Song received',
        song: song
    })
})

router.get('/songs', async (req, res) => {
    const {mood} = req.query
    
    const Songs = await songModel.find({
        mood: mood
    })

    console.log(Songs)

    res.status(200).json({
        message: "Songs fetched succesfully"
    })
})

module.exports = router