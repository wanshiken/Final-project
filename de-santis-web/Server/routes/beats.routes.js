const router = require('express').Router()
const Track = require('../models/Track.model')

router.get('/', (req, res) => {
    Track.find()
        .then(tracks => res.status(200).json(tracks))
        .catch(err => res.status(500).json({ code: 500, message: "Error retrieving tracks", err }))
})

router.get('/:id', (req, res) => {
    const {id} = req.params
    Track.findById(id)
        .then(track => res.status(200).json({ track, message: "Track detail" }))
        .catch(err => res.status(500).json({ code: 500, message: "Error retrieving a single track", err }))
})

module.exports = router