const express = require('express')
const router = express.Router()
const multer = require('multer')

const upload = multer({storage: multer.memoryStorage()})

router.post('/songs', upload.single("image"), (req, res) => {
    console.log(req.body)
    console.log(req.file)
    res.json({
        message: 'Song received',
        song: req.body
    })
})

module.exports = router