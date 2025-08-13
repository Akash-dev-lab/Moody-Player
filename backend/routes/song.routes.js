const express = require('express')
const router = express.Router()
const multer = require('multer')
const uploadFile = require("../services/storage.services")

const upload = multer({storage: multer.memoryStorage()})

router.post('/songs', upload.single("image"), async (req, res) => {
    console.log(req.body)
    console.log(req.file)
    const fileData = await uploadFile(req.file)
    console.log(fileData)
    res.json({
        message: 'Song received',
        song: req.body
    })
})

module.exports = router